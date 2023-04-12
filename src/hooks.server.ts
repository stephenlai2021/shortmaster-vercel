import "$lib/supabase";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  /* Supabase  */
  const { session, supabaseClient } = await getSupabase(event);

  event.locals.sb = supabaseClient;
  event.locals.session = session;

  if (event.url.pathname.startsWith("/dashboard/")) {
    if (!event.locals.session) {
      throw redirect(303, "/auth");
    }
  }

  // if (event.url.pathname === "/") {
  //   if (event.locals.session && event.params) {
  //     throw redirect(303, `/dashboard/${event.params.id}`);
  //   }
  // }

  /* Theme  */
  let theme: string | null = null;

  const newTheme = event.url.searchParams.get("theme");
  const cookieTheme = event.cookies.get("colortheme");
  event.locals.currentTheme = cookieTheme

  if (newTheme) {
    theme = newTheme;
  } else if (cookieTheme) {
    theme = cookieTheme;
  }

  if (theme) {
    return await resolve(event, {
      transformPageChunk: ({ html }) =>
        html.replace('data-theme="cupcake"', `data-theme="${theme}"`),
    });
  }

  // return await resolve(event);
  return resolve(event);
};
