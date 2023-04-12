<script>
  import { t } from "$lib/i18n/translations";
  import { goto } from '$app/navigation'
  import avatar1 from "$lib/assets/images/home/avatar-1.png";
  import avatar2 from "$lib/assets/images/home/avatar-2.png";
  import avatar3 from "$lib/assets/images/home/avatar-3.png";
  import avatar4 from "$lib/assets/images/home/avatar-4.png";
  import avatar5 from "$lib/assets/images/home/avatar-5.png";
  import avatar6 from "$lib/assets/images/home/avatar-6.png";
  import avatar7 from "$lib/assets/images/home/avatar-7.png";
  import avatar8 from "$lib/assets/images/home/avatar-8.png";
  import avatar9 from "$lib/assets/images/home/avatar-9.png";
  import avatar10 from "$lib/assets/images/home/avatar-10.png";
  import avatar11 from "$lib/assets/images/home/avatar-11.png";
  import avatar12 from "$lib/assets/images/home/avatar-12.png";

  const avatarGallery = [
    { imgUrl: avatar1 },
    { imgUrl: avatar2 },
    { imgUrl: avatar3 },
    { imgUrl: avatar4 },
    { imgUrl: avatar5 },
    { imgUrl: avatar6 },
    { imgUrl: avatar7 },
    { imgUrl: avatar8 },
    { imgUrl: avatar9 },
    { imgUrl: avatar10 },
    { imgUrl: avatar11 },
    { imgUrl: avatar12 },
  ];

  const handleAction = () => {
    alert('hi, there !')
    goto('/dashboard')
  }
</script>

<section
  class="section6 bg-no-repeat max-[680px]:mx-[10px] max-[680px]:px-[10px] rounded-[20px] mt-[90px] mb-[80px] mx-[40px] sm:mx-[90px] border border-neutral/10 shadow shadow-lg"
>
  <div class="wrapper flex justify-center my-[80px]">
    <div
      class="avatar-gallery max-w-[768px] flex flex-wrap justify-center items-center"
    >
      {#each avatarGallery as avatar}
        <img
          src={avatar.imgUrl}
          alt=""
          class="w-[48px] sm:w-[56px] my-[8px] mx-[4px] sm:mx-[24px]"
        />
      {/each}
    </div>
  </div>
  <div class="text-center text-[30px] sm:text-[36px] md:text-[46px]">
    {$t("common.home-section6-description")}
  </div>
  <div class="flex justify-center my-[60px]">
    <!-- <button class="btn px-4 text-[16px]" on:click={handleAction}>{$t("common.btn-action")}</button> -->
    <!-- <div class="btn px-4 text-[16px]" on:keydown on:click={() => goto('/dashboard')}>{$t("common.btn-action")}</div> -->
    <a href="/dashboard" class="btn px-8 text-[16px] bg-[#3AA7AA] border-none rounded-[8px] text-white">{$t("common.btn-action")}</a>
  </div>
</section>

<style>
  .section6 {
    background-image: url('/Vector.png'), url('/Vector-1.png');
    background-position: left bottom, right bottom;
  }
</style>
