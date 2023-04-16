import type { PageServerLoad } from "./$types";
import { supabaseClient } from "$lib/supabase";
import { redirect } from "@sveltejs/kit";
import { IPAPI, IPIFY } from "$env/static/private";

export const load: PageServerLoad = async ({ params, fetch }) => {
  console.log("key: ", params.id);

  const { data: link, error: linkErr } = await supabaseClient
    .from("url_shortener_links")
    .select("*")
    .eq("key", params.id)
    .single();
  // console.log("link data: ", data);

  if (linkErr) {
    console.log("error: ", linkErr.message);
    throw redirect(303, "/");
  }

  const jsonRes = await fetch(IPAPI);
  const { city, country_name, latitude, longitude, language } =
    await jsonRes.json();

  const res = await fetch(IPIFY);
  const ip = await res.text();

  /* Get user info */
  const { data: click, error: clickErr } = await supabaseClient
    .from("url_shortener_clicks")
    .insert([
      {
        link_id: link?.id,
        country: country_name,
        ip,
        city,
        latitude,
        longitude,
        language,
      },
    ]);

  if (clickErr) console.log("error message: ", clickErr.message);
  console.log("clicks table: ", click);

  /* Get total number of link_id(clicks table) associates with key(links table)  */
  // const { data: linkedKey,  error: readLinkErr } = await supabaseClient
  // .from("url_shortener_clicks")
  // .select("*")
  // .eq("link_id", link?.id)
  // console.log("link id: ", link?.id);
  // console.log("No of linked key: ", linkedKey?.length);
  
  // if (readLinkErr) console.log("Error of getting total number of link_id associates with key: ", readLinkErr.message);
  
  /* update total clicks */
  const { error: updateErr } = await supabaseClient
    .from("url_shortener_links")
    .insert([{ total_clicks: link?.total_clicks + 1 }]);
    // .insert([{ total_clicks: linkedKey?.length }]);
  
  if (updateErr) console.log("total clicks updated error: ", updateErr?.message);

  throw redirect(303, link?.long_url);
};
