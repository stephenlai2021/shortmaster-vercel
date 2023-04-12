<script>
  import { t } from "$lib/i18n/translations";
  import IconSister from "$lib/components/icon/IconSister.svelte";
</script>

<section
    class="section5 py-[60px] flex justify-center items-center flex-col bg-base-300 py-[80px] mt-[40px]"
  >
    <div class="text-center text-[30px] max-w-[810px] px-[30px]">
      {$t("common.home-section5-title")}
    </div>
    <div class="bottom flex items-center mt-[20px]">
      <IconSister />
      <span class="ml-[12px] text-[18px]"
        >{$t("common.home-testimony-author")}</span
      >
    </div>
  </section>