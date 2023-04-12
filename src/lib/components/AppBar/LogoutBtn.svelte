<script lang="ts">
  import { t } from "$lib/i18n/translations";
  import { enhance, type SubmitFunction } from "$app/forms";
  import { supabaseClient } from "$lib/supabase";

  const submitLogout: SubmitFunction = async ({ cancel }) => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
    cancel();
  };
</script>

<li class="btn-logout">
  <form action="/logout" method="POST" use:enhance={submitLogout}>
    <button type="submit" class="">Logout</button>
  </form>
</li>

<style>
  @media (max-width: 837px) {
    .btn-logout {
      display: none;
    }
  }
</style>
