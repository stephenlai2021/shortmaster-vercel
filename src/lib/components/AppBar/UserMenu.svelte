<script lang="ts">
  import { enhance, type SubmitFunction } from "$app/forms";
  import { supabaseClient } from "$lib/supabase";
  import { user, btnChat, menuOpen, widthLessthan530 } from "$lib/stores";
  import { t } from "$lib/i18n/translations";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import imageAvatar from "$lib/assets/images/avatar.png"

  const submitLogout: SubmitFunction = async ({ cancel }) => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
    cancel();
  };

  const toggleChatbot = () => {
    $btnChat = !$btnChat;
    $menuOpen = false;
  };
</script>

<!-- <li class="tooltip tooltip-bottom tooltip-neutral" data-tip={$t('common.user')}> -->
<li>
  <span class="pl-0 hover:bg-base-100">
    <img
      src={$page.data.user?.user.user_metadata.avatar_url ? $page.data.user.user.user_metadata.avatar_url : imageAvatar}
      alt=""
      width="30"
      height="30"
      class="rounded-full"
    />
  </span>
  <ul class="dropdown-menu">
    {#if $page.data.user?.user.email}
      <li>
        <button style:background="none" class="cursor-default">
          {$page.data.user?.user.email.substring(0, $page.data.user?.user.email.indexOf("@"))}
        </button>
      </li>
    {/if}

    {#if $widthLessthan530}
      {#if $page.data.user?.user.email && $page.url.pathname !== "/dashboard" && $page.url.pathname !== "/auth"}
        <li>
          <button on:click={() => goto("/dashboard")}>
            {$t("common.dashboard")}
          </button>
        </li>
      {/if}

      {#if !$page.data.user?.user.email && $page.url.pathname !== "/auth"}
        <li>
          <button on:click={() => goto("/dashboard")}>
            {$t("common.login")}
          </button>
        </li>
      {/if}
    {/if}

    <li>
      <button
        on:click={toggleChatbot}
        style:font-weight={$btnChat ? "bold" : ""}
      >
        {$t("common.chat")}
      </button>
    </li>

    {#if $page.data.user?.user.email}
      <li>
        <form action="/logout" method="POST" use:enhance={submitLogout}>
          <button type="submit" class="">{$t("common.logout")}</button>
        </form>
      </li>
    {/if}
  </ul>
</li>