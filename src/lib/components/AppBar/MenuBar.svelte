<script lang="ts">
  import { t } from "$lib/i18n/translations";
  import { page } from "$app/stores";
  import Logo from "$lib/components/AppBar/Logo.svelte";
  import ThemeMenu from "./ThemeMenu.svelte";
  import LangMenu from "./LangMenu.svelte";
  import UserMenu from "./UserMenu.svelte";
  import imagePanel from "$lib/assets/images/icons/panel.png";
  import imageLogin from "$lib/assets/images/icons/enter.png";
</script>

<div class="bg-base/30 backdrop-blur-2xl fixed top-0 left-0 right-0 z-50">
  <nav class="py-2 relative flex justify-between items-center">
    <Logo />

    <ul class="flex items-center">
      <div class="side-men">
        <ul class="menu menu-horizontal px-1 z-50 flex items-center">
          <ThemeMenu />
          <LangMenu />

          {#if $page.url.pathname === "/" && !$page.data.user?.user.email}
            <a href="/auth" class="mr-4 borde max-[530px]:hidden tooltip tooltip-bottom tooltip-neutral" data-tip={$t('common.login')}>
              <img src={imageLogin} width="24" alt="" />
            </a>
          {/if}

          {#if $page.data.user?.user.email && $page.url.pathname !== "/dashboard" && $page.url.pathname !== "/auth"}
            <li>
              <a
                href="/dashboard"
                class="max-[530px]:hidden pl-0 mr-1 hover:bg-base-100 tooltip tooltip-bottom tooltip-neutral"
                data-tip={$t('common.dashboard')}
              >
                <img src={imagePanel} width="24" alt="" />
              </a>
            </li>
          {/if}

          <UserMenu />
        </ul>
      </div>
    </ul>
  </nav>
</div>
