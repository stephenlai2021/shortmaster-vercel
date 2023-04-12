<script>
  import IconSetting from "$lib/components/icon/IconSetting.svelte";
</script>

<li class="icon-setting hidden">
  <button>
    <IconSetting width="24px" height="24px" />
  </button>
</li>

<style>
  @media (max-width: 540px) {
    .icon-setting {
      display: block;
    }
  }
</style>
