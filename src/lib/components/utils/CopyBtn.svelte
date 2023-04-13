<script>
  import { toast } from "@zerodevx/svelte-toast";
  import { PUBLIC_APP_BASE_URL } from "$env/static/public"

  // export let isCopied = false;
  export let key;

  // const handleCopy = () => {
  //   alert("url copied !");
  // };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${PUBLIC_APP_BASE_URL}/${key}`);

    //  toast.push("Copied to clipboard", {
    //   theme: {
    //     "--toastBorderRadius": "8px",
    //     "--toastBarBackground": "",
    //     "--toastBackground": "#3175D3",
    //     "--toastBtnWidth": "0",
    //     "--toastBtnHeight": "0",
    //     "--toastBtnContent" : " ",
    //     "--toastMsgPadding": "0.35rem 1rem",
    //     "--toastMinHeight": "3.0rem",
    //     "--toastWidth": "174px",
    //     "--toastBtnFont": "14px"
    //   }
    // });
  };
</script>

<button
  class="bg-secondary/30 hover:border-white/20 transition-all duration-200 py-3 px-4 bg rounded-xl ml-5"
  on:click={handleCopy}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-5 h-5"
  >
    <!-- {#if isCopied}
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    {:else} -->
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
      />
    <!-- {/if} -->
  </svg>
</button>
