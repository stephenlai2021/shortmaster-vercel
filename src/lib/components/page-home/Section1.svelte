<script>
  import { t, locale } from "$lib/i18n/translations";
  import chatbot from "$lib/assets/images/sister.png";
  import pic1 from "$lib/assets/images/home/pic1.png";
</script>

<section
  class="section1 border-primary max-[1000px]:pb-[0px] max-[1000px]:flex max-[1000px]:flex-col py-[60px] flex justify-between items-center"
>
  <div
    class="left max-[1000px]:pb-[60px] max-[1000px]:w-full w-[50%] max-[500px]:px-[20px] px-[50px]"
  >
    <div
      class="section1-title max-[670px]:text-[40px] max-[670px]:w-full max-[768px]:text-[60px] max-[1200px]:w-[400px] max-[1000px]:w-[550px] leading-[1] text-[72px] font-normal w-[540px]"
      style:line-height={$locale === 'zh-TW' || $locale === 'ja' ? "1.2" : ""}
    >
      {$t("common.home-title")}
    </div>
    <div
      class="section1-subtitle max-[670px]:w-full max-[1200px]:w-[460px] leading-[1.3] w-[560px] my-10 text-[22px]"
    >
      {$t("common.home-subtitle")}
    </div>
    <div class="flex">
      <div class="flex items-center mr-3 min-w-[56px]">
        <img src={chatbot} alt="" class="rounded-full w-[56px]" />
      </div>
      <div class="">
        <div class="text-[18px]">
          {$t("common.home-testimony")}
        </div>
        <div class="text-[16px] mt-1">
          {$t("common.home-testimony-author")}
        </div>
      </div>
    </div>
  </div>
  <div class="right max-[1000px]:w-full w-[50%]">
    <img src={pic1} alt="" class="" />
  </div>
</section>
