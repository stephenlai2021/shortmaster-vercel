import i18n from "sveltekit-i18n";
import lang from "./lang.json";

export const config = {
  i18n: {
    en: { lang },
    zhTW: { lang },
    ja: { lang },
    es: { lang },
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
      locale: "zh-CN",
      key: "common",
      loader: async () => (await import("./zhCN/common.json")).default,
    },
    {
      locale: "ja",
      key: "common",
      loader: async () => (await import("./ja/common.json")).default,
    },
    {
      locale: "es",
      key: "common",
      loader: async () => (await import("./es/common.json")).default,
    },
    {
      locale: "ko",
      key: "common",
      loader: async () => (await import("./ko/common.json")).default,
    },
  ],
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(
  config
);
