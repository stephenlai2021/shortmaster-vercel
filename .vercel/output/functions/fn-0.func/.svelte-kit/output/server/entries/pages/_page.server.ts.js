import { r as redirect } from "../../chunks/index.js";
const load = async ({ locals }) => {
  if (locals.session) {
    throw redirect(303, "/dashboard");
  }
  return { user: locals.session };
};
const actions = {
  setTheme: async ({ url, cookies }) => {
    const theme = url.searchParams.get("theme");
    console.log("theme: ", theme);
    const redirectTo = url.searchParams.get("redirectTo");
    if (theme) {
      cookies.set("colortheme", theme, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365
      });
    }
    throw redirect(303, redirectTo ?? "/");
  }
};
export {
  actions,
  load
};
