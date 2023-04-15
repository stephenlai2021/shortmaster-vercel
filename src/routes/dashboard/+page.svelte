<script lang="ts">
  import LinkForm from "$lib/components/page-dashboard/LinkForm.svelte";
  import LinkCard from "$lib/components/page-dashboard/LinkCard.svelte";
  import { t } from "$lib/i18n/translations";
  import { linksArray } from "$lib/stores";
  import { page } from "$app/stores";

  $: if ($page.data?.links) {
    $linksArray = $page.data.links;
  }
</script>

<section class="pt-28 mx- mx-auto bg-base-100 max-[420px]:overflow-x-hidden">
  <h1 class="text-[22px] font-bold max-[410px]:px-[10px]">
    {$t("common.dashboard")}
  </h1>
  <LinkForm />
  <div class="links-wrapper my-10">
    {#each $linksArray as item}
      <LinkCard link={item} />
    {/each}
  </div>
</section>
