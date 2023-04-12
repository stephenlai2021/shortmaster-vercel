import { s as supabaseClient } from "../../../chunks/supabase.js";
import { r as redirect } from "../../../chunks/index.js";
import { I as IPAPI, a as IPIFY } from "../../../chunks/private.js";
const load = async ({ params, fetch }) => {
  console.log("key: ", params.id);
  const { data, error } = await supabaseClient.from("url_shortener_links").select("*").eq("key", params.id).single();
  if (error) {
    console.log("error: ", error.message);
    throw redirect(303, "/");
  }
  const jsonRes = await fetch(IPAPI);
  const { city, country_name, latitude, longitude, language } = await jsonRes.json();
  const res = await fetch(IPIFY);
  const ip = await res.text();
  const { data: clicks, error: err } = await supabaseClient.from("url_shortener_clicks").insert([
    {
      link_id: data?.id,
      country: country_name,
      ip,
      city,
      latitude,
      longitude,
      language
    }
  ]);
  if (err)
    console.log("error message: ", err.message);
  console.log("clicks table: ", clicks);
  await supabaseClient.from("url_shortener_links").insert([{ total_clicks: data?.total_clicks + 1 }]);
  throw redirect(303, data?.long_url);
};
export {
  load
};
