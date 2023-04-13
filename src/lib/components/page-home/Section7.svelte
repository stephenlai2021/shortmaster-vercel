<script lang="ts">
  import myAvatar from "$lib/assets/images/icons/myAvatar.png"
  import githubIcon from "$lib/assets/images/icons/github.png"
  import { t } from "$lib/i18n/translations";
</script>

<div class="section7 flex flex-col items-center mb-[80px] rounded-[8px] bg-base-300">
  <h1 class="text-center text-[36px] font-thin my-[40px]">{$t('common.about')}</h1>
  <div class="rounded-[8px] border border-neutral/10 shadow shadow-lg max-[800px]:w-full w-[800px] bg-base-100 flex flex-col items-center py-[40px]">
    <img src={myAvatar} alt="" width="120" height="120" class="border rounded-full">
    <div class="name font-bol font-normal mt-2 text-[20px]">{$t('common.authorName')}</div>
    <div class="title text-[15px] mt-2">{$t('common.authorTitle')}</div>
    <a href="https://github.com/stephenlai2021/shortmaster-vercel" target="_blank" rel="noreferrer">
      <!-- <img src={githubIcon} alt="" width="24" height="24" class="mt-4 mb-2 cursor-pointer" on:click={() => goto('https://github.com/stephenlai2021')}> -->
      <img src={githubIcon} alt="" width="24" height="24" class="mt-4 mb-2 cursor-pointer">
    </a>
    <div class="description mt-2 mx-6 text-center">
      <div>
        {$t('common.authorDescription')}
      </div>
      <div class="text-[20px] mt-1">
        🥰🤗😘😉🤩😀😎👍
      </div>
      <!-- <div>
        Contact me at stephenlai2015@gmail.com
      </div> -->
    </div>
  </div>
  <button class="btn rounded-[8px] mt-[40px] mb-[60px] bg-[#3AA7AA] text-white border-none text-[16px]">
    <a href="mailto: stephenlai2015@gmail.com">{$t('common.contact')}</a>
    <!-- {$t('common.contact')} -->
  </button>
</div>