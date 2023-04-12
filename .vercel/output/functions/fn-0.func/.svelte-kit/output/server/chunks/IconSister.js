import { c as create_ssr_component, d as add_attribute } from "./index3.js";
const chatbot = "/_app/immutable/assets/sister.f2a2121f.png";
const IconSister = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "56" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  return `<img${add_attribute("src", chatbot, 0)} alt="${""}"${add_attribute("width", width, 0)} class="${"rounded-full"}">`;
});
export {
  IconSister as I,
  chatbot as c
};
