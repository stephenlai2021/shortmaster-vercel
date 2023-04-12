import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit/dist/types";
import type { Session } from "@supabase/supabase-js";

declare global {
  namespace App {
    interface Error {}
    interface Locals {
      sb: TypedSupabaseClient;
      session: Session | null;
      details: ShortKey;
      currentTheme: Theme;
      // theme: null
    }
    interface PageData {
      session: import("@supabase/supabase-js").Session | null;
    }
    interface Platform {}
  }
}

interface Link {
  key: string
  long_url: string
  total_clicks: number
  created_at: string
}

interface ClickDetails {
  ip: string
  created_at: string
  country: string
  city: string
}

export {};
