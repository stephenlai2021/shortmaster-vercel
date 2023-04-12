import { w as writable, d as derived } from "./index2.js";
import { k as get_store_value } from "./index3.js";
import C from "@sveltekit-i18n/parser-default";
var q = Object.defineProperty, B = Object.defineProperties;
var G = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var j = (s2, e, t3) => e in s2 ? q(s2, e, { enumerable: true, configurable: true, writable: true, value: t3 }) : s2[e] = t3, n$1 = (s2, e) => {
  for (var t3 in e || (e = {}))
    N.call(e, t3) && j(s2, t3, e[t3]);
  if (S)
    for (var t3 of S(e))
      A.call(e, t3) && j(s2, t3, e[t3]);
  return s2;
}, d$1 = (s2, e) => B(s2, G(e));
var m$1 = (s2, e) => {
  var t3 = {};
  for (var r in s2)
    N.call(s2, r) && e.indexOf(r) < 0 && (t3[r] = s2[r]);
  if (s2 != null && S)
    for (var r of S(s2))
      e.indexOf(r) < 0 && A.call(s2, r) && (t3[r] = s2[r]);
  return t3;
};
var R = ["error", "warn", "debug"], F = ({ logger: s2 = console, level: e = R[1], prefix: t3 = "[i18n]: " }) => R.reduce((r, a, o) => d$1(n$1({}, r), { [a]: (i2) => R.indexOf(e) >= o && s2[a](`${t3}${i2}`) }), {}), l$1 = F({}), E = (s2) => {
  l$1 = s2;
};
var O = (g) => {
  var u2 = g, { parser: s2, key: e, params: t3, translations: r, locale: a, fallbackLocale: o } = u2, i2 = m$1(u2, ["parser", "key", "params", "translations", "locale", "fallbackLocale"]);
  if (!(e && a))
    return l$1.warn("No translation key or locale provided. Skipping translation..."), "";
  let p2 = (r[a] || {})[e];
  return o && p2 === void 0 && (p2 = (r[o] || {})[e]), i2.hasOwnProperty("fallbackValue") && p2 === void 0 ? i2.fallbackValue : s2.parse(p2, t3, a, e);
}, f$1 = (...s2) => s2.length ? s2.filter((e) => !!e).map((e) => {
  let t3 = `${e}`.toLowerCase();
  try {
    let [r] = Intl.Collator.supportedLocalesOf(e);
    if (!r)
      throw new Error(`'${e}' is non-standard.`);
    t3 = r;
  } catch {
    l$1.warn(`Non-standard locale provided: '${e}'. Check your 'translations' and 'loaders' in i18n config...`);
  }
  return t3;
}) : [], w = (s2, e) => Object.keys(s2 || {}).reduce((t3, r) => {
  let a = s2[r], o = e ? `${e}.${r}` : `${r}`;
  return a && typeof a == "object" ? n$1(n$1({}, t3), w(a, o)) : d$1(n$1({}, t3), { [o]: a });
}, {}), W = async (s2) => {
  try {
    return (await Promise.all(s2.map((a) => {
      var o = a, { loader: t3 } = o, r = m$1(o, ["loader"]);
      return new Promise(async (i2) => {
        let g;
        try {
          g = await t3();
        } catch (u2) {
          l$1.error(`Failed to load translation. Verify your '${r.locale}' > '${r.key}' Loader.`), l$1.error(u2);
        }
        i2(d$1(n$1({ loader: t3 }, r), { data: g }));
      });
    }))).reduce((t3, { key: r, data: a, locale: o }) => {
      if (!a)
        return t3;
      let [i2] = f$1(o);
      return d$1(n$1({}, t3), { [i2]: w(d$1(n$1({}, t3[i2] || {}), { [r]: a })) });
    }, {});
  } catch (e) {
    l$1.error(e);
  }
  return {};
}, D = (s2) => (e) => {
  try {
    if (typeof e == "string")
      return e === s2;
    if (typeof e == "object")
      return e.test(s2);
  } catch {
    l$1.error("Invalid route config!");
  }
  return false;
}, I = (s2, e) => {
  let t3 = true;
  try {
    t3 = Object.keys(s2).filter((r) => s2[r] !== void 0).every((r) => s2[r] === e[r]);
  } catch {
  }
  return t3;
};
var H = 1e3 * 60 * 60 * 24, z = class {
  constructor(e) {
    this.cachedAt = 0;
    this.loadedKeys = {};
    this.currentRoute = writable();
    this.config = writable();
    this.isLoading = writable(false);
    this.promises = /* @__PURE__ */ new Set();
    this.loading = { subscribe: this.isLoading.subscribe, toPromise: (e2, t3) => {
      let r = Array.from(this.promises).filter((a) => I({ locale: f$1(e2)[0], route: t3 }, a)).map(({ promise: a }) => a);
      return Promise.all(r);
    }, get: () => get_store_value(this.isLoading) };
    this.privateTranslations = writable({});
    this.translations = { subscribe: this.privateTranslations.subscribe, get: () => get_store_value(this.translations) };
    this.locales = d$1(n$1({}, derived([this.config, this.privateTranslations], ([e2, t3]) => {
      if (!e2)
        return [];
      let { loaders: r = [] } = e2, a = r.map(({ locale: i2 }) => i2), o = Object.keys(t3).map((i2) => i2);
      return Array.from(/* @__PURE__ */ new Set([...f$1(...a), ...f$1(...o)]));
    }, [])), { get: () => get_store_value(this.locales) });
    this.internalLocale = writable();
    this.loaderTrigger = derived([this.internalLocale, this.currentRoute], ([e2, t3], r) => {
      var a, o;
      e2 !== void 0 && t3 !== void 0 && !(e2 === ((a = get_store_value(this.loaderTrigger)) == null ? void 0 : a[0]) && t3 === ((o = get_store_value(this.loaderTrigger)) == null ? void 0 : o[1])) && (l$1.debug("Triggering translation load..."), r([e2, t3]));
    }, []);
    this.localeHelper = writable();
    this.locale = { subscribe: this.localeHelper.subscribe, forceSet: this.localeHelper.set, set: this.internalLocale.set, update: this.internalLocale.update, get: () => get_store_value(this.locale) };
    this.initialized = derived([this.locale, this.currentRoute, this.privateTranslations], ([e2, t3, r], a) => {
      get_store_value(this.initialized) || a(e2 !== void 0 && t3 !== void 0 && !!Object.keys(r).length);
    });
    this.translation = derived([this.privateTranslations, this.locale, this.isLoading], ([e2, t3, r], a) => {
      let o = e2[t3];
      o && Object.keys(o).length && !r && a(o);
    }, {});
    this.t = d$1(n$1({}, derived([this.config, this.translation], (a) => {
      var [o] = a, i2 = o, { parser: e2, fallbackLocale: t3 } = i2, r = m$1(i2, ["parser", "fallbackLocale"]);
      return (g, ...u2) => O(n$1({ parser: e2, key: g, params: u2, translations: this.translations.get(), locale: this.locale.get(), fallbackLocale: t3 }, r.hasOwnProperty("fallbackValue") ? { fallbackValue: r.fallbackValue } : {}));
    })), { get: (e2, ...t3) => get_store_value(this.t)(e2, ...t3) });
    this.l = d$1(n$1({}, derived([this.config, this.translations], (o) => {
      var [i2, ...g] = o, u2 = i2, { parser: e2, fallbackLocale: t3 } = u2, r = m$1(u2, ["parser", "fallbackLocale"]), [a] = g;
      return (p2, v2, ...k) => O(n$1({ parser: e2, key: v2, params: k, translations: a, locale: p2, fallbackLocale: t3 }, r.hasOwnProperty("fallbackValue") ? { fallbackValue: r.fallbackValue } : {}));
    })), { get: (e2, t3, ...r) => get_store_value(this.l)(e2, t3, ...r) });
    this.getLocale = (e2) => {
      let { fallbackLocale: t3 = "" } = get_store_value(this.config) || {}, r = e2 || t3;
      if (!r)
        return "";
      let a = this.locales.get();
      return a.find((i2) => f$1(r).includes(i2)) || a.find((i2) => f$1(t3).includes(i2)) || "";
    };
    this.setLocale = (e2) => {
      if (!!e2 && e2 !== get_store_value(this.internalLocale))
        return l$1.debug(`Setting '${e2}' locale.`), this.internalLocale.set(e2), this.loading.toPromise(e2, get_store_value(this.currentRoute));
    };
    this.setRoute = (e2) => {
      if (e2 !== get_store_value(this.currentRoute)) {
        l$1.debug(`Setting '${e2}' route.`), this.currentRoute.set(e2);
        let t3 = get_store_value(this.internalLocale);
        return this.loading.toPromise(t3, e2);
      }
    };
    this.loadConfig = async (e2) => {
      await this.configLoader(e2);
    };
    this.getTranslationProps = async (e2 = this.locale.get(), t3 = get_store_value(this.currentRoute)) => {
      let r = get_store_value(this.config);
      if (!r || !e2)
        return [];
      let a = this.translations.get(), { loaders: o, fallbackLocale: i2 = "", cache: g = H } = r || {}, u2 = Number.isNaN(+g) ? H : +g;
      this.cachedAt ? Date.now() > u2 + this.cachedAt && (l$1.debug("Refreshing cache."), this.loadedKeys = {}, this.cachedAt = 0) : (l$1.debug("Setting cache timestamp."), this.cachedAt = Date.now());
      let [p2, v2] = f$1(e2, i2), k = a[p2], M2 = a[v2], C2 = (o || []).map((K) => {
        var L = K, { locale: h } = L, b = m$1(L, ["locale"]);
        return d$1(n$1({}, b), { locale: f$1(h)[0] });
      }).filter(({ routes: h }) => !h || (h || []).some(D(t3))).filter(({ key: h, locale: b }) => b === p2 && (!k || !(this.loadedKeys[p2] || []).includes(h)) || i2 && b === v2 && (!M2 || !(this.loadedKeys[v2] || []).includes(h)));
      if (C2.length) {
        this.isLoading.set(true), l$1.debug("Fetching translations...");
        let h = await W(C2);
        this.isLoading.set(false);
        let b = Object.keys(h).reduce((L, y) => d$1(n$1({}, L), { [y]: Object.keys(h[y]) }), {}), K = C2.filter(({ key: L, locale: y }) => (b[y] || []).some((x) => `${x}`.startsWith(L))).reduce((L, { key: y, locale: x }) => d$1(n$1({}, L), { [x]: [...L[x] || [], y] }), {});
        return [h, K];
      }
      return [];
    };
    this.addTranslations = (e2, t3) => {
      if (!e2)
        return;
      l$1.debug("Adding translations...");
      let r = Object.keys(e2 || {});
      this.privateTranslations.update((a) => r.reduce((o, i2) => d$1(n$1({}, o), { [i2]: n$1(n$1({}, o[i2] || {}), w(e2[i2])) }), a)), r.forEach((a) => {
        let o = Object.keys(e2[a]).map((i2) => `${i2}`.split(".")[0]);
        t3 && (o = t3[a]), this.loadedKeys[a] = Array.from(/* @__PURE__ */ new Set([...this.loadedKeys[a] || [], ...o || []]));
      });
    };
    this.loader = async ([e2, t3]) => {
      let r = this.getLocale(e2);
      l$1.debug(`Adding loader promise for '${r}' locale and '${t3}' route.`);
      let a = (async () => {
        let o = await this.getTranslationProps(r, t3);
        o.length && this.addTranslations(...o);
      })();
      this.promises.add({ locale: r, route: t3, promise: a }), a.then(() => {
        r && this.locale.get() !== r && this.locale.forceSet(r);
      });
    };
    this.loadTranslations = (e2, t3 = get_store_value(this.currentRoute) || "") => {
      let r = this.getLocale(e2);
      if (!!r)
        return this.setRoute(t3), this.setLocale(r), this.loading.toPromise(r, t3);
    };
    this.loaderTrigger.subscribe(this.loader), this.isLoading.subscribe(async (t3) => {
      t3 && this.promises.size && (await this.loading.toPromise(), this.promises.clear(), l$1.debug("Loader promises have been purged."));
    }), e && this.loadConfig(e);
  }
  async configLoader(e) {
    if (!e)
      return l$1.error("No config provided!");
    let g = e, { initLocale: t3, fallbackLocale: r, translations: a, log: o } = g, i2 = m$1(g, ["initLocale", "fallbackLocale", "translations", "log"]);
    o && E(F(o)), [t3] = f$1(t3), [r] = f$1(r), l$1.debug("Setting config."), this.config.set(n$1({ initLocale: t3, fallbackLocale: r, translations: a }, i2)), a && this.addTranslations(a), await this.loadTranslations(t3);
  }
};
var n = Object.defineProperty, M = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var i = (r, o, e) => o in r ? n(r, o, { enumerable: true, configurable: true, writable: true, value: e }) : r[o] = e, p = (r, o) => {
  for (var e in o || (o = {}))
    f.call(o, e) && i(r, e, o[e]);
  if (s)
    for (var e of s(o))
      P.call(o, e) && i(r, e, o[e]);
  return r;
}, d = (r, o) => M(r, u(o));
var l = (r, o) => {
  var e = {};
  for (var a in r)
    f.call(r, a) && o.indexOf(a) < 0 && (e[a] = r[a]);
  if (r != null && s)
    for (var a of s(r))
      o.indexOf(a) < 0 && P.call(r, a) && (e[a] = r[a]);
  return e;
};
var m = (e) => {
  var a = e, { parserOptions: r = {} } = a, o = l(a, ["parserOptions"]);
  return d(p({}, o), { parser: C(r) });
}, t$1 = class t extends z {
  constructor(e) {
    super(e && m(e));
    this.loadConfig = (e2) => super.configLoader(m(e2));
  }
}, v = t$1;
const en = "English";
const zhTW = "中文";
const ja = "日本語";
const lang = {
  en,
  zhTW,
  ja
};
const config = {
  i18n: {
    en: { lang },
    zhTW: { lang },
    ja: { lang }
  },
  loaders: [
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./common.js")).default
    },
    {
      locale: "zh-TW",
      key: "common",
      loader: async () => (await import("./common2.js")).default
    },
    {
      locale: "ja",
      key: "common",
      loader: async () => (await import("./common3.js")).default
    }
  ]
};
const { t: t2, loading, locales, locale, loadTranslations } = new v(
  config
);
export {
  loadTranslations as a,
  locale as l,
  t2 as t
};
