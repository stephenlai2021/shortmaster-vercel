import { l as locale, a as loadTranslations } from "../../chunks/translations.js";
const load = async ({ url, locals }) => {
  const { pathname } = url;
  const defaultLocale = "en";
  const initLocale = locale.get() || defaultLocale;
  await loadTranslations(initLocale, pathname);
  return {};
};
export {
  load
};
