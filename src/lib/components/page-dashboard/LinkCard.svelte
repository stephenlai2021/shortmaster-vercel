<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { PUBLIC_APP_BASE_URL } from "$env/static/public";
  import { goto } from "$app/navigation";
  import { toast } from "@zerodevx/svelte-toast";
  import { widthLessthan400 } from "$lib/stores";
  import { supabaseClient } from "$lib/supabase";
  import { linksArray } from "$lib/stores";
  import CopyBtn from "$lib/components/utils/CopyBtn.svelte";
  import IconTrashcan from "$lib/components/icon/IconTrashcan.svelte";

  export let link: Link;
  // console.log("link | dashboard: ", link);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${PUBLIC_APP_BASE_URL}/${link.key}`);

    toast.push("Copied to clipboard", {
      theme: {
        "--toastBorderRadius": "8px",
        "--toastBarBackground": "",
        "--toastBackground": "#10754E",
        "--toastBtnWidth": "0",
        "--toastBtnHeight": "0",
        "--toastBtnContent": " ",
        "--toastMsgPadding": "0.5rem 1rem",
        "--toastMinHeight": "3.0rem",
        "--toastWidth": "13rem",
      },
    });
  };

  const handleDelete = async (key) => {
    alert(`Are you sure to delete key "${key}" ?`);

    /* Step 1: Get key link id from links table */
    const { data: linkKey, error: getLinkKeyErr } = await supabaseClient
      .from("url_shortener_links")
      .select("*")
      .eq("key", key)
      .single()

    if (linkKey) console.log('key: ', linkKey?.key)

    if (getLinkKeyErr)
      console.log("Getting key error: ", getLinkKeyErr.message);

    /* Step 2: Delete clicks whose link_id relates to key link id from clicks table */
    const { data: deletClicks, error: deleteClicksErr } = await supabaseClient
      .from("url_shortener_clicks")
      .delete()
      .eq("link_id", linkKey?.id);

    if (deleteClicksErr)
      console.log("Delete clicks error: ", deleteClicksErr.message);

    /* Step 3: Delete key link from links table*/
    const { data: deletedKey, error: deletedKeyErr } = await supabaseClient
      .from("url_shortener_links")
      .delete()
      .eq("key", linkKey?.key);

    if (deletedKeyErr) console.log("Delete key error: ", deletedKeyErr.message);

    // $linksArray = $linksArray.filter((link) => link.key !== key);
    $linksArray = $linksArray.filter((link) => link.key !== linkKey?.key);
  };
</script>

<div
  class="wrapper max-[420px]:rounded-none max-[420px]:p-[10px] max-[420px]:flex-col w-full bg-neutral/10 rounded-xl p-5 mb-5 flex justify-between items-center gap-5 hover:border-secondary/50 transition-all duration-200"
>
  <div class="max-[420px]:w-full w-1/2">
    <div class="cursor-pointer">
      <a class="text-[20px]" href={`/dashboard/${link.key}`}>/{link.key}</a>
    </div>
    <div class="text-sm sm:text-base">
      {#if $widthLessthan400}
        <span>{link.long_url.slice(0, 30) + "..."}</span>
      {:else}
        <span>{link.long_url.slice(0, 20) + "..."}</span>
      {/if}
    </div>
  </div>

  <div class="relative max-[420px]:w-full w-1/2 flex justify-end">
    <div class="flex flex-col items-end justify-center">
      <div class="flex max-[420px]:w-full">
        <span class="leading-none text-">
          {link.total_clicks}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      </div>
      <div>
        <span class="text-sm sm:text-base">
          {link.created_at?.slice(0, 10)}
        </span>
      </div>
    </div>

    <div class="mr-[10px]">
      <CopyBtn key={link.key} />
    </div>

    <div class="borde flex items-center">
      <button on:click={() => handleDelete(link.key)}>
        <IconTrashcan width="18" />
      </button>
    </div>
  </div>
</div>
