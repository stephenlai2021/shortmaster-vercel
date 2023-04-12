import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {  
  if (locals.session) {
    throw redirect(303, "/dashboard");
  }
  
  return { user: locals.session };
};

export const actions: Actions = {
  setTheme: async ({ url, cookies }) => {
    const theme = url.searchParams.get("theme");
    console.log("theme: ", theme);
    const redirectTo = url.searchParams.get("redirectTo");

    if (theme) {
      cookies.set("colortheme", theme, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }

    throw redirect(303, redirectTo ?? "/");
  },
};
