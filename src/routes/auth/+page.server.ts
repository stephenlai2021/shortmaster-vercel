import type { Provider } from "@supabase/supabase-js";
import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

const OAUTH_PROVIDERS = ["google", "discord", "github"];

export const load: PageServerLoad = ({ locals }) => {
  if (locals.session) {
    throw redirect(303, "/dashbzoard");
  }

  return {
    user: locals.session
  }
};

export const actions: Actions = {
  login: async ({ locals, url }) => {
    const provider = url.searchParams.get("provider") as Provider;

    if (provider) {
      if (!OAUTH_PROVIDERS.includes(provider)) {
        return fail(400, {
          error: "Provider not supported.",
        });
      }

      const { data, error: err } = await locals.sb.auth.signInWithOAuth({
        provider: provider,
      });

      if (err) {
        console.log(err);
        return fail(400, {
          message: "Something went wrong.",
        });
      }      

      // throw redirect(303, data.url);
    }
  },
};


