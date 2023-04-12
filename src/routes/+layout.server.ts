import { getServerSession } from "@supabase/auth-helpers-sveltekit";
import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: LayoutServerLoad = async (event) => {
  console.log("Root layout server load");

  return {
    user: event.locals.session,
    // theme: event.locals.currentTheme,
    session: await getServerSession(event),
  };
};