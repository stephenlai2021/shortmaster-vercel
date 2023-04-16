import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { supabaseClient } from "$lib/supabase";

export const load: PageServerLoad = async ({ params, locals }) => {
  /* Stragety 1 */
  const { data: link, error: linkErr } = await supabaseClient
    .from("url_shortener_links")
    .select("*")
    .eq("key", params.id)
    .single();
  console.log("link: ", link);

  if (linkErr) {
    console.log("error message of link table: ", linkErr.message);
    throw redirect(303, "/dashboard");
  }

  const { data: clickDetails, error: clickErr } = await supabaseClient
    .from("url_shortener_clicks")
    .select("*")
    .order("created_at", { ascending: false })
    .eq("link_id", link?.id);
  console.log("clicks: ", clickDetails);

  if (clickErr) console.log("error message of click table: ", clickErr.message);

  return { link, clickDetails, user: locals.session };

  /* Strategy 2 */
  // const { data: clickDetails, error: err } = await supabaseClient
  //   .from("url_shortener_links")
  //   .select("*, url_shortener_clicks(*)")
  //   .eq("key", params.id)
  //   .single();

  // if (err) {
  //   console.log("error message: ", err.message);
  //   throw redirect(303, "/dashboard");
  // }

  // return { clickDetails, user: locals.session };
};
