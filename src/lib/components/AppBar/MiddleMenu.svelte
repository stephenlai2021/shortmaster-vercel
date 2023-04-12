<script>
  import { page } from "$app/stores";
  import { t } from "$lib/i18n/translations";

  const links = [
    {
      url: "/pricing",
      title: "Pricing",
    },
    {
      url: "/help",
      title: "Help",
    },
  ];
</script>

<ul class="flex">
  {#each links as link}
    {#if link.title === "Pricing"}
      <li class="px-4 text-1xl">
        <a href={`${link.url}`}>{$t("common.pricing")}</a>
      </li>
    {/if}

    {#if link.title === "Help"}
      <li class="px-4 text-1xl">
        <a href={`${link.url}`}>{$t("common.help")}</a>
      </li>
    {/if}
  {/each}
</ul>