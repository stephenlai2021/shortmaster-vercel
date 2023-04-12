import { createClient } from "@supabase/auth-helpers-sveltekit";
const PUBLIC_SUPABASE_URL = "https://itzgmdgndusfvggjclwk.supabase.co";
const PUBLIC_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0emdtZGduZHVzZnZnZ2pjbHdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA2NTgwNDYsImV4cCI6MTk4NjIzNDA0Nn0.pNt5W8ccp8TnrKhRaDzYPuVjKrcazjWh06QUMZ0ZC90";
const supabaseClient = createClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_KEY
);
export {
  supabaseClient as s
};
