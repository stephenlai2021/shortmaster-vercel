<script>
  import { t, locale } from "$lib/i18n/translations";
  import imageI18n from "$lib/assets/images/icons/lang.png"
  
  let currentMenu = "English";
  const langs = ["English", "Español", "やまと", "한국어", "簡體中文", "繁體中文"];

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
    if (lang === "簡體中文") {
      $locale = "zh-CN";
      currentMenu = "簡體中文";
    }
    if (lang === "やまと") {
      $locale = "ja";
      currentMenu = "やまと";
    }
    if (lang === "한국어") {
      $locale = "ko";
      currentMenu = "한국어";
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
