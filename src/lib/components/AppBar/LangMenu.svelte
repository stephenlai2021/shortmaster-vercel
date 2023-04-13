<script>
  import { t, locale } from "$lib/i18n/translations";
  import imageI18n from "$lib/assets/images/icons/lang.png"
  
  let currentMenu = "English";
  const langs = ["English", "Español", "やまと", "繁體中文"];

  const handleLocale = (lang) => {
    if (lang === "English") {
      $locale = "en";
      currentMenu = "English";
    }
    if (lang === "Español") {
      $locale = "es";
      currentMenu = "Español";
    }    
    if (lang === "繁體中文") {
      $locale = "zh-TW";
      currentMenu = "繁體中文";
    }
    if (lang === "日本語") {
      $locale = "ja";
      currentMenu = "日本語";
    }
  };
</script>

<!-- <li class="relative cursor-pointer tooltip tooltip-bottom tooltip-neutral" data-tip={$t('common.language')}> -->
<li class="relative cursor-pointer">
    <span class="pl-0 hover:bg-base-100">
      <img src={imageI18n} width="24" alt="">
    </span>
  <ul class="dropdown-menu">
    {#each langs as lang}
      <li>
        <button
          style:font-weight={currentMenu === lang ? "bold": ""}
          on:click={() => handleLocale(lang)}
        >
          {lang}
        </button>
      </li>
    {/each}
  </ul>
</li>
