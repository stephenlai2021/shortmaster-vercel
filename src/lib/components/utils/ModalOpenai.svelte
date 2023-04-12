<script>
  import { openaiKey, doneConfirm, menuOpen } from '$lib/stores'

  const handleConfirm = () => {
    if (!$openaiKey) return

    $menuOpen = false
    $doneConfirm = true
    alert('hi, there !')
  }
</script>

<div class="modal-openai">
  <div class="modal-box">
    <h3 class="font-bold text-lg">
      If you don't have openAI account yet, please following the instructios
      below
    </h3>
    <p class="py-4">
      <a href="https://platform.openai.com">1. Register openAI</a>
    </p>
    <p class="pb-4">
      <a href="https://platform.openai.com/account/api-keys"
        >2. Create a new key</a
      >
    </p>
    <p class="pb-4">3. Copy and paste your API key down below</p>
    <input
      type="text"
      bind:value={$openaiKey}
      placeholder="Please enter your Openai API key here"
      class="w-full max-w-xs bg-base-300"
    />
    <!-- <div class="modal-action">
      <a href="#" class="btn rounded-[8px]">Confirm</a>
    </div> -->
    <button class="btn" on:click={handleConfirm}>Confirm</button>
  </div>
</div>

<style>
  .modal-openai {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
