import "./supabase.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { r as redirect } from "./index.js";
const handle = async ({ event, resolve }) => {
  const { session, supabaseClient } = await getSupabase(event);
  event.locals.sb = supabaseClient;
  event.locals.session = session;
  if (event.url.pathname.startsWith("/dashboard/")) {
    if (!event.locals.session) {
      throw redirect(303, "/auth");
    }
  }
  let theme = null;
  const newTheme = event.url.searchParams.get("theme");
  const cookieTheme = event.cookies.get("colortheme");
  event.locals.currentTheme = cookieTheme;
  if (newTheme) {
    theme = newTheme;
  } else if (cookieTheme) {
    theme = cookieTheme;
  }
  if (theme) {
    return await resolve(event, {
      transformPageChunk: ({ html }) => html.replace('data-theme="cupcake"', `data-theme="${theme}"`)
    });
  }
  return resolve(event);
};
export {
  handle
};
