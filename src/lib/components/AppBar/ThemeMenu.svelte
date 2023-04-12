<script>
  import { t } from "$lib/i18n/translations";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import imagePalette from "$lib/assets/images/icons/palette.png"

  let currentTheme = "cupcake"

  const themes = [
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "pastel",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
  ];

  const submitUpdateTheme = ({ action }) => {
    const theme = action.searchParams.get("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  // const handleTheme = (theme) => {
  //   if (theme === "dark") currentTheme = "dark";
  //   if (theme === "cupcake") currentTheme = "cupcake";
  //   if (theme === "bumblebee") currentTheme = "bumblebee";
  //   if (theme === "emerald") currentTheme = "emerald";
  //   if (theme === "synthwave") currentTheme = "synthwave";
  //   if (theme === "retro") currentTheme = "retro";
  //   if (theme === "cyberpunk") currentTheme = "cyberpunk";
  //   if (theme === "valentine") currentTheme = "valentine";
  //   if (theme === "halloween") currentTheme = "halloween";
  //   if (theme === "garden") currentTheme = "garden";
  //   if (theme === "forest") currentTheme = "forest";
  //   if (theme === "pastel") currentTheme = "pastel";
  //   if (theme === "wireframe") currentTheme = "wireframe";
  //   if (theme === "black") currentTheme = "black";
  //   if (theme === "luxury") currentTheme = "luxury";
  //   if (theme === "dracula") currentTheme = "dracula";
  //   if (theme === "autumn") currentTheme = "autumn";
  //   if (theme === "business") currentTheme = "business";
  //   if (theme === "acid") currentTheme = "acid";
  //   if (theme === "lemonade") currentTheme = "lemonade";
  //   if (theme === "night") currentTheme = "night";
  // };
</script>

<!-- <li class="relative cursor-pointer tooltip tooltip-bottom tooltip-neutral" data-tip={$t('common.theme')}> -->
<li class="relative cursor-pointer">
  <span class="pl-0 hover:bg-base-100">
    <img src={imagePalette} width="20" alt="">
  </span>
  <ul class="dropdown-menu max-h-96 overflow-y-scroll">
    <form method="POST" use:enhance={submitUpdateTheme}>
      {#each themes as theme}
        <li>
          <button
            formaction="/?/setTheme&theme={theme}&redirectTo={$page.url
              .pathname}"
            >
            <!-- on:click={() => handleTheme(theme)} -->
            <!-- style:font-weight={currentTheme === theme ? "bold" : ""} -->
            {#if theme === "dark"}{$t("common.dark")}{/if}
            {#if theme === "cupcake"}{$t("common.cupcake")}{/if}
            {#if theme === "bumblebee"}{$t("common.bumblebee")}{/if}
            {#if theme === "emerald"}{$t("common.emerald")}{/if}
            {#if theme === "synthwave"}{$t("common.synthwave")}{/if}
            {#if theme === "retro"}{$t("common.retro")}{/if}
            {#if theme === "cyberpunk"}{$t("common.cyberpunk")}{/if}
            {#if theme === "valentine"}{$t("common.valentine")}{/if}
            {#if theme === "halloween"}{$t("common.halloween")}{/if}
            {#if theme === "garden"}{$t("common.garden")}{/if}
            {#if theme === "forest"}{$t("common.forest")}{/if}
            {#if theme === "pastel"}{$t("common.pastel")}{/if}
            {#if theme === "wireframe"}{$t("common.wireframe")}{/if}
            {#if theme === "black"}{$t("common.black")}{/if}
            {#if theme === "luxury"}{$t("common.luxury")}{/if}
            {#if theme === "dracula"}{$t("common.dracula")}{/if}
            {#if theme === "autumn"}{$t("common.autumn")}{/if}
            {#if theme === "business"}{$t("common.business")}{/if}
            {#if theme === "acid"}{$t("common.acid")}{/if}
            {#if theme === "lemonade"}{$t("common.lemonade")}{/if}
            {#if theme === "night"}{$t("common.night")}{/if}
          </button>
        </li>
      {/each}
    </form>
  </ul>
</li>

<style>
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
