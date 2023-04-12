import { c as create_ssr_component, b as subscribe, o as onDestroy, f as escape, v as validate_component, d as add_attribute, e as each } from "../../../../chunks/index3.js";
import { t } from "../../../../chunks/translations.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import dateFormat from "dateformat";
import { C as CopyBtn } from "../../../../chunks/CopyBtn.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import "leaflet/dist/leaflet.css";',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  console.log("$page.data: ", $page.data);
  const { clickDetails } = $page.data;
  const { key, long_url, created_at, total_clicks, url_shortener_clicks } = clickDetails;
  let mapElement;
  onDestroy(async () => {
  });
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `<section class="${"pt-32 pb-16"}"><div class="${"max-[410px]:pl-[10px]"}"><div class="${"flex items-center"}"><h1 class="${"text-2xl font-bold"}">/${escape(key)}</h1>
      ${validate_component(CopyBtn, "CopyBtn").$$render($$result, { key }, {}, {})}</div>
    <div class="${"mt-2"}">${escape(dateFormat(created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT"))}</div></div>

  <div class="${"max-[410px]:rounded-none max-[410px]:w-full relative z-0 car w-full h-[400px] mt-10 bg-[url('/image-placeholder.png')] bg-cover bg-center rounded-[0.75rem]"}"${add_attribute("this", mapElement, 0)}></div>

  <div class="${"flex mt-10 flex-wrap md:flex-nowrap"}"><div class="${"max-[410px]:rounded-none rounded-[0.75rem] p-[20px] max-[410px]:w-full w-1/2 border-none bg-neutral/20"}"><div class="${"text-4xl font-bold"}">${escape(total_clicks)}</div>
      <div class="${"text-"}">${escape($t("common.total_clicks"))}</div></div>

    <div class="${"max-[410px]:rounded-none rounded-[0.75rem] p-[20px] max-[410px]:w-full border-none bg-neutral/20 mt-5 md:mt-0 md:ml-5 w-full relative"}"><div class="${"w-full break-all"}">${escape(long_url)}</div></div></div>

  <div class="${"mt-10"}">${each(url_shortener_clicks, (click) => {
    return `<div class="${"max-[410px]:rounded-none rounded-[0.75rem] p-[20px] max-[410px]:w-full border-none w-full mb-5 bg-neutral/20"}"><div class="${"flex justify-between max-[540px]:flex-col"}"><div class="${"div"}"><div class="${"text-"}">IP: ${escape(click.ip)}</div>
            <div class="${""}">${escape(dateFormat(click.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT"))}
            </div></div>
          <div class="${"min-w-[140px]"}">${click.country ? `<div>${escape($t("common.country"))}: ${escape(click.country)}</div>` : ``}
            ${click.city ? `<div>${escape($t("common.city"))}: ${escape(click.city)}</div>` : ``}
          </div></div>
      </div>`;
  })}</div>
</section>`;
});
export {
  Page as default
};
