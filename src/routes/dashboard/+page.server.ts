import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { supabaseClient } from "$lib/supabase";

export const load: PageServerLoad = async ({ locals }) => {
   if (!locals.session) {
     throw redirect(303, "/auth");
   }
  
  const { data, error } = await supabaseClient
    .from("url_shortener_links")
    .select("*")
    // .order('created_at', { ascending: false })
    .order('total_clicks', { ascending: false })
    .eq("user_id", locals.session?.user.email)
  
  if (error) console.log('error loading links | dashboard server: ', error)

  return {
    user: locals.session,
    links: data
  };
};
