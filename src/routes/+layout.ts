import { locale, loadTranslations } from "$lib/i18n/translations";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ url, locals }) => {
  const { pathname } = url;

  // const defaultLocale = "zh-TW";
  const defaultLocale = "en";
  const initLocale = locale.get() || defaultLocale;

  await loadTranslations(initLocale, pathname);
  
  return { }; 
};