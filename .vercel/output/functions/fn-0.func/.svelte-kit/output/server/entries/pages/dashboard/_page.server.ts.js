import { r as redirect } from "../../../chunks/index.js";
import { s as supabaseClient } from "../../../chunks/supabase.js";
const load = async ({ locals }) => {
  if (!locals.session) {
    throw redirect(303, "/auth");
  }
  const { data, error } = await supabaseClient.from("url_shortener_links").select("*").order("created_at", { ascending: false }).eq("user_id", locals.session?.user.email);
  if (error)
    console.log("error loading links | dashboard server: ", error);
  return {
    user: locals.session,
    links: data
  };
};
export {
  load
};
