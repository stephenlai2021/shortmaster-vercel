import i18n from "sveltekit-i18n";
import lang from "./lang.json";

export const config = {
  i18n: {
    en: { lang },
    zhTW: { lang },
    ja: { lang }
  },
  loaders: [
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./en/common.json")).default,
    },
    {
      locale: "zh-TW",
      key: "common",
      loader: async () => (await import("./zhTW/common.json")).default,
    },
    {
      locale: "ja",
      key: "common",
      loader: async () => (await import("./ja/common.json")).default,
    },
  ],
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(
  config
);
