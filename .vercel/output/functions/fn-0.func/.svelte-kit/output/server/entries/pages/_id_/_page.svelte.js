import { c as create_ssr_component, b as subscribe, f as escape } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.params.id);
  $$unsubscribe_page();
  return `<h1 class="${"mt-[100px]"}">${escape($page.params.id)}</h1>`;
});
export {
  Page as default
};
