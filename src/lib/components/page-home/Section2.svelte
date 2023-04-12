<script>
  import { t } from "$lib/i18n/translations";
  import pic2 from "$lib/assets/images/home/pic2.png";
</script>

<section
  class="section2 max-[1000px]:pb-0 max-[1000px]:flex max-[1000px]:flex-col py-[60px] my-[0px] flex items-center"
>
  <div class="left max-[1000px]:order-2 max-[1000px]:w-full w-[50%]">
    <img src={pic2} alt="" />
  </div>
  <div
    class="right max-[1000px]:pt-[10px] max-[1000px]:pb-[80px] max-[1000px]:w-full w-[50%] px-[20px] flex justify-center"
  >
    <div class="w-[530px]">
      <div class="title text-[36px] mb-[10px] font-semibold px-[0px]">
        {$t("common.home-section2-title")}
      </div>
      <div class="description text-[18px]">
        {$t("common.home-section2-subtitle")}
      </div>
    </div>
  </div>
</section>
