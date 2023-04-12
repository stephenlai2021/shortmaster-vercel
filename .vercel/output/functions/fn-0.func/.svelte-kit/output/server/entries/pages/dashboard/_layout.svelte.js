import { c as create_ssr_component } from "../../../chunks/index3.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-[800px] mx-auto py-0 px-[20px] max-[410px]:px-0"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
