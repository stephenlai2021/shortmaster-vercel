<script lang="ts">
  import { t } from "$lib/i18n/translations";
  import { page } from "$app/stores"
  import type { PageData } from "./$types";
  import { onMount, onDestroy } from "svelte";
  import { user } from "$lib/stores"
  import dateFormat from "dateformat";
  import CopyBtn from "$lib/components/utils/CopyBtn.svelte";
  import IconAvatar from "$lib/assets/images/icons/user-avatar-v3.png"
  import IconCenter from "$lib/assets/images/shormaster_logo-removebg.png";

  // console.log('$page.data: ', $page.data)

  // const { link, clickDetails } = $page.data;
  // const { key, long_url, created_at, total_clicks, url_shortener_clicks } =
  // link;
  // console.log('link: ', link)
  // console.log('clickDetails: ', clickDetails)

  const { clickDetails } = $page.data;
  const { key, long_url, created_at, total_clicks, url_shortener_clicks } =
  clickDetails;
  console.log(`click detatils | ${$page.params.id}: `, clickDetails)
  console.log(`path: `, $page.url.pathname)
  console.log(`host: `, $page.url.host)

  let mapElement;
  let map;
  let marker;

  onMount(async () => {
    const leaflet = await import("leaflet");

    // 設置中心點
    map = leaflet.map(mapElement).setView([51.505, -0.09], 2);

    leaflet
      .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
      .addTo(map);

    const centerIcon = leaflet.icon({
      iconUrl: IconCenter,
      iconSize: [56, 56]
    });

    const avatarIcon = leaflet.icon({
      iconUrl: IconAvatar,
      iconSize: [40, 40]
    });

    marker = leaflet
      .marker([51.505, -0.09], { icon: centerIcon })
      .addTo(map)
      .bindPopup(
        `<h1>${$t('common.logo')}</h1><span>${$t('common.latitude')}: 51.505</span><br/><span>${$t('common.longitude')}: -0.09</span>`
      )
      .openPopup();

    // url_shortener_clicks.forEach((loc) => {
    clickDetails.forEach((loc) => {
      leaflet
        .marker([loc.latitude, loc.longitude], { icon: avatarIcon })
        .addTo(map)
        .bindPopup(
          `<span>IP: ${loc.ip}</span><br/><span>${$t('common.latitude')}: ${loc.latitude}</span><br/><span>${$t('common.longitude')}: ${loc.longitude}</span>`
        )
        .openPopup();
    });
  });

  onDestroy(async () => {
    if (map) {
      console.log("Unloading Leaflet map.");
      map.remove();
    }
  });
</script>

<section class="pt-32 pb-16">
  <div class="max-[410px]:pl-[10px]">
    <div class="flex items-center">
      <h1 class="text-2xl font-bold">/{key}</h1>
      <CopyBtn {key} />
    </div>
    <div class="mt-2">
      {dateFormat(created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
    </div>
  </div>

  <div
    bind:this={mapElement}
    class="max-[410px]:rounded-none max-[410px]:w-full relative z-0 car w-full h-[400px] mt-10 bg-[url('/image-placeholder.png')] bg-cover bg-center rounded-[0.75rem]"
  />

  <div class="flex mt-10 flex-wrap md:flex-nowrap">
    <div class="max-[410px]:rounded-none rounded-[0.75rem] p-[20px] max-[410px]:w-full w-1/2 border-none bg-neutral/20">
      <div class="text-4xl font-bold">{total_clicks}</div>
      <div class="text-">{$t("common.total_clicks")}</div>
    </div>

    <div
      class="max-[410px]:rounded-none rounded-[0.75rem] p-[20px] max-[410px]:w-full border-none bg-neutral/20 mt-5 md:mt-0 md:ml-5 w-full relative"
    >
      <div class="w-full break-all">{long_url}</div>
    </div>
  </div>

  <div class="mt-10">
    <!-- {#each url_shortener_clicks as click} -->
    {#each clickDetails as click}
      <div class="max-[410px]:rounded-none rounded-[0.75rem] p-[20px] max-[410px]:w-full border-none w-full mb-5 bg-neutral/20">
        <div class="flex justify-between max-[540px]:flex-col">
          <div class="div">
            <div class="text-">IP: {click.ip}</div>
            <div class="">
              {dateFormat(click.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            </div>
          </div>
          <div class="min-w-[140px]">
            {#if click.country}
              <div>{$t("common.country")}: {click.country}</div>
            {/if}
            {#if click.city}
              <div>{$t("common.city")}: {click.city}</div>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  @import "leaflet/dist/leaflet.css";
</style>
