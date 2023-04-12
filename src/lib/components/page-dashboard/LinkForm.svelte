<script>
  import { t } from "$lib/i18n/translations";
  import { onMount } from "svelte";
  import { mobile, user, linksArray } from "$lib/stores";
  import { nanoid } from "nanoid";
  import { supabaseClient } from "$lib/supabase";
  import { toast } from "@zerodevx/svelte-toast";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores"
  import IconQuestionMark from "$lib/components/icon/IconQuestionMark.svelte";

  // console.log('user email | link form: ', $page.data.user?.user.email)

  let isLoading = false;
  let link = {};

  const form = {
    long_url: "",
    key: "",
  };

  const getRWD = () => {
    if (window.innerWidth <= 420) $mobile = true;
    if (window.innerWidth > 420) $mobile = false;
  };

  const createShortKey = (len = 6) => {
    return (form.key = nanoid(len));
  };

  const isValidUrl = (urlString) => {
    let urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  const handleSubmit = async () => {
    if (!isValidUrl(form.long_url)) {
      toast.push("Invalid URL", {
        theme: {
          "--toastBorderRadius": "8px",
          "--toastBarBackground": "#FA193F",
          "--toastMsgPadding": "0.5rem 1rem",
          "--toastMinHeight": "3.0rem",
        },
      });
      form.long_url = "";
      return;
    } else {
      link = {
        long_url: form.long_url,
        key: form.key === "" ? createShortKey() : form.key,
        // user_id: $user?.email,
        user_id: $page.data.user?.user.email,
      };

      try {
        const { data, error: err } = await supabaseClient
          .from("url_shortener_links")
          .insert(link);

        console.log('inserted link row: ', data);
        
        if (err) {
          // alert(err.message);
          console.log('error message: ', err.message);
          return;
        }

        createShortKey();
        form.long_url = "";
        form.key = "";
        $linksArray = [
          {
            ...link,
            total_clicks: 0,
            created_at: new Date().toLocaleDateString(),
          },
          ...$linksArray,
        ];
      } catch (error) {
        console.log('error message: ', error);
      }
    }
  };

  onMount(() => {
    getRWD();

    window.addEventListener("resize", () => {
      getRWD();
    });
  });
</script>

<form
  method="POST"
  action=""
  on:submit|preventDefault={handleSubmit}
  class="link-form max-[420px]:rounded-none flex-column bg-neutral/20 rounded-[8px] py-6 px-5 mt-[16px] flex flex-wrap justify-between items-middle gap-5"
>
  <div class="form-group w-full sm:w-6/12">
    <label for="long_url" class="text- text-xs mb-1 block"
      >{$t("common.long_url")}</label
    >
    <input
      id="long_url"
      type="text"
      name="long_url"
      required
      bind:value={form.long_url}
      placeholder={$t("common.long_url_placeholder")}
    />
  </div>
  <div class="form-group relative w-full sm:w-4/12">
    <label for="key" class="text- text-xs mb-1 block">
      {$t("common.short_key")}
    </label>
    <input
      id="key"
      type="text"
      name="key"
      bind:value={form.key}
      placeholder={$t("common.short_key_placeholder")}
      min="6"
    />
    <!-- <div on:keydown on:click={() => goto('/help')} class="tooltip tooltip-bottom tooltip-neutral absolute top-[35%] translate-y-[28%] right-[4px] cursor-pointer" data-tip="You can create a meaningful name for the short url if you don't like system generated key 😉"> -->
    <div class="tooltip tooltip-bottom tooltip-neutral absolute top-[35%] translate-y-[28%] right-[4px] cursor-pointer" data-tip="You can create a meaningful name for the short url if you don't like system generated key 😉">
      <IconQuestionMark />
    </div>
  </div>
  <div class="btn-submit-wrapper w-full sm:w-2/12 flex justify-end self-end">
    <button
      type="submit"
      class="btn-submit bg-primary rounded-lg py-2 px-3 flex items-center justify-center gap-2 w-full hover:shadow-xl transition-all duration-200"
    >
      {#if isLoading}
        <svg
          class="animate-spin h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      {:else}
        <span class="w-ful">{$t("common.shorten")}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w- h-"
          width="20"
          height="20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      {/if}
    </button>
  </div>
</form>

<style>
  .link-form {
    flex-direction: column;
  }

  input {
    width: 100%;
  }

  @media (max-width: 420px) {
    .link-form {
      padding-left: 10px;
      padding-right: 10px;
    }

    .btn-submit-wrapper {
      justify-content: flex-start;
    }
  }
</style>
