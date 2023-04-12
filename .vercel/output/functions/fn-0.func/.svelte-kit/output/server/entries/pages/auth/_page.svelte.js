import { c as create_ssr_component, b as subscribe, d as add_attribute, f as escape } from "../../../chunks/index3.js";
import { t } from "../../../chunks/translations.js";
import "devalue";
import "../../../chunks/supabase.js";
const IconGithub = "/_app/immutable/assets/icon-github.f3f6ed0f.png";
const IconGoogle = "/_app/immutable/assets/google-new.587d6ed7.png";
const IconNotion = "/_app/immutable/assets/icon-notion.20139908.png";
const IconDiscord = "/_app/immutable/assets/discord.6da1083c.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="${"max-w-[360px] mx-auto h-scree gri place-content-cente overflow-hidden"}"><div class="${"mt-[80px] mx-auto"}"><div class="${"p-5 w-[360px] max-[360px]:w-full"}"><div class="${"text-center flex justify-center"}"><div class="${"p-4 mt-2 borde shadow shadow-md shadow-gray-500 rounded-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-8 h-8"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"}"></path></svg></div></div>

      <form method="${"POST"}" class="${"pb-2"}"><div class="${"flex justify-center"}"><button class="${"shadow shadow-md shadow-gray-800 py-4 flex justify-center items-center rounded-[8px] w-full max-[360px]:w-[90vw] mt-5 bg-black text-white"}" formaction="${"?/login&provider=github"}"><img class="${"mr-[10px] border rounded-full"}"${add_attribute("src", IconGithub, 0)} alt="${""}" width="${"26"}">
            ${escape($t("common.btn-github"))}</button></div>

        <div class="${"flex justify-center"}"><button class="${"shadow shadow-sm py-4 flex justify-center items-center max-[360px]:w-[90vw] rounded-[8px] w-full mt-5 bg-[#EA4335] text-white font-weight-bold"}" formaction="${"?/login&provider=google"}"><img class="${"mr-[10px]"}"${add_attribute("src", IconGoogle, 0)} alt="${""}" width="${"28"}">
            ${escape($t("common.btn-google"))}</button></div>

        <div class="${"flex justify-center"}"><button class="${"shadow shadow-md py-4 flex justify-center items-center max-[360px]:w-[90vw] rounded-[8px] w-full mt-5 bg-white text-black font-weight-bold"}" formaction="${"?/login&provider=notion"}"><img class="${"mr-[10px]"}"${add_attribute("src", IconNotion, 0)} alt="${""}" width="${"24"}">
            ${escape($t("common.btn-notion"))}</button></div>

        <div class="${"flex justify-center"}"><button class="${"shadow shadow-sm py-4 pl- flex justify-center items-center max-[360px]:w-[90vw] rounded-[8px] w-full mt-5 bg-[#5865F2] text-white font-weight-bold"}" formaction="${"?/login&provider=discord"}"><img class="${"mr-[6px]"}"${add_attribute("src", IconDiscord, 0)} alt="${""}" width="${"32"}">
            ${escape($t("common.btn-discord"))}</button></div></form></div></div></div>`;
});
export {
  Page as default
};
