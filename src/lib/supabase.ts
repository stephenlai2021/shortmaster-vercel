import { createClient } from "@supabase/auth-helpers-sveltekit";
import {
  PUBLIC_SUPABASE_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public";
// import type { Database } from "$lib/types/supabase";

// export const supabaseClient = createClient<Database>(
export const supabaseClient = createClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_KEY
);
