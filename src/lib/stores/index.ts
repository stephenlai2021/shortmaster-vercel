import { writable } from "svelte/store";
import { browser } from "$app/environment";

const defaultValue = ''
const initialValue = browser
  ? window.localStorage.getItem("openai key") ?? defaultValue
  : defaultValue;

export const user = writable({})
export const auth = writable(false)
export const mobile = writable(false);
export const btnChat = writable(true);
export const menuOpen = writable(false);
export const linksArray = writable([]);
export const doneConfirm = writable(false)
export const widthLessthan680 = writable(false)
export const widthLessthan560 = writable(false)
export const widthLessthan530 = writable(false)
export const widthLessthan480 = writable(false)
export const widthLessthan490 = writable(false)
export const widthLessthan425 = writable(false)
export const widthLessthan400 = writable(false)
export const widthLessthan382 = writable(false)
export const widthLessthan360 = writable(false)
export const widthLessthan320 = writable(false)

export const openaiKey = writable<string>(initialValue)
openaiKey.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("openai key", value);
  }
});