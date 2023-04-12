import { getServerSession } from "@supabase/auth-helpers-sveltekit";
import "../../chunks/index.js";
const load = async (event) => {
  console.log("Root layout server load");
  return {
    user: event.locals.session,
    // theme: event.locals.currentTheme,
    session: await getServerSession(event)
  };
};
export {
  load
};
