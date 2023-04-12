import { c as create_ssr_component, b as subscribe, h as add_styles, f as escape, d as add_attribute, v as validate_component, e as each } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
import { l as locale, t } from "../../chunks/translations.js";
import { c as chatbot, I as IconSister } from "../../chunks/IconSister.js";
const pic1 = "/_app/immutable/assets/pic1.636fb5d8.png";
const Section1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $locale, $$unsubscribe_locale;
  let $t, $$unsubscribe_t;
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale();
  $$unsubscribe_t();
  return `<section class="${"section1 border-primary max-[1000px]:pb-[0px] max-[1000px]:flex max-[1000px]:flex-col py-[60px] flex justify-between items-center"}"><div class="${"left max-[1000px]:pb-[60px] max-[1000px]:w-full w-[50%] max-[500px]:px-[20px] px-[50px]"}"><div class="${"section1-title max-[670px]:text-[40px] max-[670px]:w-full max-[768px]:text-[60px] max-[1200px]:w-[400px] max-[1000px]:w-[550px] leading-[1] text-[72px] font-normal w-[540px]"}"${add_styles({
    "line-height": $locale === "zh-TW" || $locale === "ja" ? "1.2" : ""
  })}>${escape($t("common.home-title"))}</div>
    <div class="${"section1-subtitle max-[670px]:w-full max-[1200px]:w-[460px] leading-[1.3] w-[560px] my-10 text-[22px]"}">${escape($t("common.home-subtitle"))}</div>
    <div class="${"flex"}"><div class="${"flex items-center mr-3 min-w-[56px]"}"><img${add_attribute("src", chatbot, 0)} alt="${""}" class="${"rounded-full w-[56px]"}"></div>
      <div class="${""}"><div class="${"text-[18px]"}">${escape($t("common.home-testimony"))}</div>
        <div class="${"text-[16px] mt-1"}">${escape($t("common.home-testimony-author"))}</div></div></div></div>
  <div class="${"right max-[1000px]:w-full w-[50%]"}"><img${add_attribute("src", pic1, 0)} alt="${""}" class="${""}"></div></section>`;
});
const pic2 = "/_app/immutable/assets/pic2.7733672d.png";
const Section2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `<section class="${"section2 max-[1000px]:pb-0 max-[1000px]:flex max-[1000px]:flex-col py-[60px] my-[0px] flex items-center"}"><div class="${"left max-[1000px]:order-2 max-[1000px]:w-full w-[50%]"}"><img${add_attribute("src", pic2, 0)} alt="${""}"></div>
  <div class="${"right max-[1000px]:pt-[10px] max-[1000px]:pb-[80px] max-[1000px]:w-full w-[50%] px-[20px] flex justify-center"}"><div class="${"w-[530px]"}"><div class="${"title text-[36px] mb-[10px] font-semibold px-[0px]"}">${escape($t("common.home-section2-title"))}</div>
      <div class="${"description text-[18px]"}">${escape($t("common.home-section2-subtitle"))}</div></div></div></section>`;
});
const pic3 = "/_app/immutable/assets/pic3.60c1b690.png";
const Section3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `<section class="${"section3 max-[1000px]:pb-0 max-[1000px]:flex max-[1000px]:flex-col py-[60px] my-[0px] flex items-center"}"><div class="${"left max-[1000px]:pt-[10px] max-[1000px]:pb-[80px] max-[1000px]:w-full w-[50%] px-[20px] flex justify-center"}"><div class="${"w-[530px]"}"><div class="${"title text-[36px] mb-[10px] font-bold"}">${escape($t("common.home-section3-title"))}</div>
        <div class="${"description text-[18px]"}">${escape($t("common.home-section3-subtitle"))}</div></div></div>
    <div class="${"right max-[1000px]:w-full w-[50%]"}"><img${add_attribute("src", pic3, 0)} alt="${""}"></div></section>`;
});
const pic4 = "/_app/immutable/assets/pic4.cdc2b115.png";
const Section4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `<section class="${"section4 max-[1000px]:pb-0 max-[1000px]:flex max-[1000px]:flex-col py-[60px] my-[0px] flex items-center"}"><div class="${"left max-[1000px]:mb-[60px] max-[1000px]:order-2 max-[1000px]:w-full w-[50%]"}"><img${add_attribute("src", pic4, 0)} alt="${""}"></div>
    <div class="${"right max-[1000px]:pt-[10px] max-[1000px]:pb-[80px] max-[1000px]:w-full w-[50%] px-[20px] flex justify-center"}"><div class="${"w-[530px]"}"><div class="${"title text-[36px] mb-[10px] font-bold"}">${escape($t("common.home-section4-title"))}</div>
        <div class="${"description text-[18px]"}">${escape($t("common.home-section4-subtitle"))}</div></div></div></section>`;
});
const Section5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `<section class="${"section5 py-[60px] flex justify-center items-center flex-col bg-base-300 py-[80px] mt-[40px]"}"><div class="${"text-center text-[30px] max-w-[810px] px-[30px]"}">${escape($t("common.home-section5-title"))}</div>
    <div class="${"bottom flex items-center mt-[20px]"}">${validate_component(IconSister, "IconSister").$$render($$result, {}, {}, {})}
      <span class="${"ml-[12px] text-[18px]"}">${escape($t("common.home-testimony-author"))}</span></div></section>`;
});
const avatar1 = "/_app/immutable/assets/avatar-1.9803f747.png";
const avatar2 = "/_app/immutable/assets/avatar-2.44f32194.png";
const avatar3 = "/_app/immutable/assets/avatar-3.1991fddb.png";
const avatar4 = "/_app/immutable/assets/avatar-4.4d48ff57.png";
const avatar5 = "/_app/immutable/assets/avatar-5.bb3fa2fa.png";
const avatar6 = "/_app/immutable/assets/avatar-6.29ee9cc0.png";
const avatar7 = "/_app/immutable/assets/avatar-7.ec6deb6d.png";
const avatar8 = "/_app/immutable/assets/avatar-8.ec634567.png";
const avatar9 = "/_app/immutable/assets/avatar-9.404b1de6.png";
const avatar10 = "/_app/immutable/assets/avatar-10.84f58cf8.png";
const avatar11 = "/_app/immutable/assets/avatar-11.1ce529ee.png";
const avatar12 = "/_app/immutable/assets/avatar-12.0731dc7c.png";
const Section6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
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
    { imgUrl: avatar12 }
  ];
  $$unsubscribe_t();
  return `<section class="${"section6 bg-[url('Vector.png')] bg-no-repeat bg-[bottom_left] max-[680px]:mx-[10px] max-[680px]:px-[10px] rounded-[20px] mt-[90px] mb-[80px] mx-[40px] sm:mx-[90px] border border-[2px] border-neutral/30"}"><div class="${"wrapper flex justify-center my-[80px]"}"><div class="${"avatar-gallery max-w-[768px] flex flex-wrap justify-center items-center"}">${each(avatarGallery, (avatar) => {
    return `<img${add_attribute("src", avatar.imgUrl, 0)} alt="${""}" class="${"w-[48px] sm:w-[56px] my-[8px] mx-[4px] sm:mx-[24px]"}">`;
  })}</div></div>
  <div class="${"text-center text-[30px] sm:text-[36px] md:text-[46px]"}">${escape($t("common.home-section6-description"))}</div>
  <div class="${"flex justify-center my-[60px]"}">
    
    <a href="${"/dashboard"}" class="${"btn px-8 text-[16px]"}">${escape($t("common.btn-action"))}</a></div></section>`;
});
const Section7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log("page data: ", $page.data.user);
  $$unsubscribe_page();
  return `<div class="${"page-home wrapper mt-[70px] w-full"}">${validate_component(Section1, "Section1").$$render($$result, {}, {}, {})}
  ${validate_component(Section2, "Section2").$$render($$result, {}, {}, {})}
  ${validate_component(Section3, "Section3").$$render($$result, {}, {}, {})}
  ${validate_component(Section4, "Section4").$$render($$result, {}, {}, {})}
  ${validate_component(Section5, "Section5").$$render($$result, {}, {}, {})}
  ${validate_component(Section6, "Section6").$$render($$result, {}, {}, {})}
  ${validate_component(Section7, "Section7").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
