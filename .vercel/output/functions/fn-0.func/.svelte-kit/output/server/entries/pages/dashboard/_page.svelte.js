import { c as create_ssr_component, d as add_attribute, b as subscribe, f as escape, v as validate_component, e as each, j as set_store_value } from "../../../chunks/index3.js";
import { t } from "../../../chunks/translations.js";
import { l as linksArray, k as mobile, e as widthLessthan400 } from "../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "../../../chunks/supabase.js";
import { p as page } from "../../../chunks/stores.js";
import { C as CopyBtn } from "../../../chunks/CopyBtn.js";
const IconQuestionMark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "24" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"ionicon"}" viewBox="${"0 0 512 512"}"${add_attribute("width", width, 0)}><title>Help Circle</title><path d="${"M256 80a176 176 0 10176 176A176 176 0 00256 80z"}" fill="${"none"}" stroke="${"#CDD1D6"}" stroke-miterlimit="${"10"}" stroke-width="${"32"}"></path><path d="${"M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296"}" fill="${"none"}" stroke="${"#CDD1D6"}" stroke-linecap="${"round"}" stroke-miterlimit="${"10"}" stroke-width="${"28"}"></path><circle cx="${"250"}" cy="${"348"}" r="${"20"}" fill="${"#CDD1D6"}"></circle></svg>`;
});
const LinkForm_svelte_svelte_type_style_lang = "";
const css = {
  code: ".link-form.svelte-18nogjd{flex-direction:column}input.svelte-18nogjd{width:100%}@media(max-width: 420px){.link-form.svelte-18nogjd{padding-left:10px;padding-right:10px}.btn-submit-wrapper.svelte-18nogjd{justify-content:flex-start}}",
  map: null
};
const LinkForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_linksArray;
  let $$unsubscribe_page;
  let $$unsubscribe_mobile;
  let $t, $$unsubscribe_t;
  $$unsubscribe_linksArray = subscribe(linksArray, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_mobile = subscribe(mobile, (value) => value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  const form = { long_url: "", key: "" };
  $$result.css.add(css);
  $$unsubscribe_linksArray();
  $$unsubscribe_page();
  $$unsubscribe_mobile();
  $$unsubscribe_t();
  return `<form method="${"POST"}" action="${""}" class="${"link-form max-[420px]:rounded-none flex-column bg-neutral/20 rounded-[8px] py-6 px-5 mt-[16px] flex flex-wrap justify-between items-middle gap-5 svelte-18nogjd"}"><div class="${"form-group w-full sm:w-6/12"}"><label for="${"long_url"}" class="${"text- text-xs mb-1 block"}">${escape($t("common.long_url"))}</label>
    <input id="${"long_url"}" type="${"text"}" name="${"long_url"}" required${add_attribute("placeholder", $t("common.long_url_placeholder"), 0)} class="${"svelte-18nogjd"}"${add_attribute("value", form.long_url, 0)}></div>
  <div class="${"form-group relative w-full sm:w-4/12"}"><label for="${"key"}" class="${"text- text-xs mb-1 block"}">${escape($t("common.short_key"))}</label>
    <input id="${"key"}" type="${"text"}" name="${"key"}"${add_attribute("placeholder", $t("common.short_key_placeholder"), 0)} min="${"6"}" class="${"svelte-18nogjd"}"${add_attribute("value", form.key, 0)}>
    
    <div class="${"tooltip tooltip-bottom tooltip-neutral absolute top-[35%] translate-y-[28%] right-[4px] cursor-pointer"}" data-tip="${"You can create a meaningful name for the short url if you don't like system generated key 😉"}">${validate_component(IconQuestionMark, "IconQuestionMark").$$render($$result, {}, {}, {})}</div></div>
  <div class="${"btn-submit-wrapper w-full sm:w-2/12 flex justify-end self-end svelte-18nogjd"}"><button type="${"submit"}" class="${"btn-submit bg-primary rounded-lg py-2 px-3 flex items-center justify-center gap-2 w-full hover:shadow-xl transition-all duration-200"}">${`<span class="${"w-ful"}">${escape($t("common.shorten"))}</span>
        <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w- h-"}" width="${"20"}" height="${"20"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"}"></path></svg>`}</button></div>
</form>`;
});
const LinkCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $widthLessthan400, $$unsubscribe_widthLessthan400;
  $$unsubscribe_widthLessthan400 = subscribe(widthLessthan400, (value) => $widthLessthan400 = value);
  let { link } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$unsubscribe_widthLessthan400();
  return `<div class="${"wrapper max-[420px]:rounded-none max-[420px]:p-[10px] max-[420px]:flex-col w-full bg-neutral/10 rounded-xl p-5 mb-5 flex justify-between items-center gap-5 hover:border-secondary/50 transition-all duration-200"}"><div class="${"max-[420px]:w-full w-1/2"}"><div class="${"cursor-pointer"}"><a class="${"text-[20px]"}"${add_attribute("href", `/dashboard/${link.key}`, 0)}>/${escape(link.key)}</a></div>
    <div class="${"text-sm sm:text-base"}">${$widthLessthan400 ? `<span>${escape(link.long_url.slice(0, 30) + "...")}</span>` : `<span>${escape(link.long_url.slice(0, 20) + "...")}</span>`}</div></div>

  <div class="${"relative max-[420px]:w-full w-1/2 flex justify-end"}"><div class="${"flex flex-col items-end justify-center"}"><div class="${"flex max-[420px]:w-full"}"><span class="${"leading-none text-"}">${escape(link.total_clicks)}</span>
        <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 ml-2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"}"></path></svg></div>
      <div><span class="${"text-sm sm:text-base"}">${escape(link.created_at?.slice(0, 10))}</span></div></div>

    <div class="${"mr-[10px]"}">${validate_component(CopyBtn, "CopyBtn").$$render($$result, { key: link.key }, {}, {})}</div>

    </div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $linksArray, $$unsubscribe_linksArray;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_linksArray = subscribe(linksArray, (value) => $linksArray = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  {
    if ($page.data?.links) {
      set_store_value(linksArray, $linksArray = $page.data.links, $linksArray);
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_linksArray();
  $$unsubscribe_t();
  return `<section class="${"pt-28 mx- mx-auto bg-base-100"}"><h1 class="${"text-[22px] font-bold max-[410px]:px-[10px]"}">${escape($t("common.dashboard"))}</h1>
  ${validate_component(LinkForm, "LinkForm").$$render($$result, {}, {}, {})}
  <div class="${"links-wrapper my-10"}">${each($linksArray, (item) => {
    return `
      ${validate_component(LinkCard, "LinkCard").$$render($$result, { link: item }, {}, {})}`;
  })}</div></section>`;
});
export {
  Page as default
};
