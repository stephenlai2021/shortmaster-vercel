import { r as redirect } from "../../../../chunks/index.js";
import { s as supabaseClient } from "../../../../chunks/supabase.js";
const load = async ({ params, locals }) => {
  const { data: clickDetails, error: err } = await supabaseClient.from("url_shortener_links").select("*, url_shortener_clicks(*)").eq("key", params.id).single();
  if (err) {
    console.log("error message: ", err.message);
    throw redirect(303, "/dashboard");
  }
  return { clickDetails, user: locals.session };
};
export {
  load
};
