import { a as assign, n as now, l as loop, i as identity, c as create_ssr_component, b as subscribe, o as onDestroy, v as validate_component, m as missing_component, d as add_attribute, e as each, f as escape, g as null_to_empty, h as add_styles } from "../../chunks/index3.js";
import { w as widthLessthan320, m as menuOpen, b as btnChat, a as widthLessthan530, c as widthLessthan360, d as widthLessthan382, e as widthLessthan400, f as widthLessthan425, g as widthLessthan480, h as widthLessthan490, i as widthLessthan560, j as widthLessthan680 } from "../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "../../chunks/supabase.js";
import { w as writable } from "../../chunks/index2.js";
import "js-cookie";
import { p as page } from "../../chunks/stores.js";
import { t, l as locale } from "../../chunks/translations.js";
import "devalue";
import "sse.js";
import { I as IconSister } from "../../chunks/IconSister.js";
const app = "";
const toast$1 = "";
const defaults = {
  duration: 4e3,
  initial: 1,
  next: 0,
  pausable: false,
  dismissable: true,
  reversed: false,
  intro: { x: 256 }
};
const createToast = () => {
  const { subscribe: subscribe2, update } = writable([]);
  const options = {};
  let count = 0;
  function _obj(obj) {
    return obj instanceof Object;
  }
  function _init(target = "default", opts = {}) {
    options[target] = opts;
    return options;
  }
  function push(msg, opts) {
    const param = {
      target: "default",
      ..._obj(msg) ? (
        /** @type {SvelteToastOptions} */
        msg
      ) : { ...opts, msg }
    };
    const conf = options[param.target] || {};
    const entry = {
      ...defaults,
      ...conf,
      ...param,
      theme: { ...conf.theme, ...param.theme },
      classes: [...conf.classes || [], ...param.classes || []],
      id: ++count
    };
    update((n) => entry.reversed ? [...n, entry] : [entry, ...n]);
    return count;
  }
  function pop(id) {
    update((n) => {
      if (!n.length || id === 0)
        return [];
      if (typeof id === "function")
        return n.filter((i) => id(i));
      if (_obj(id))
        return n.filter((i) => i.target !== id.target);
      const found = id || Math.max(...n.map((i) => i.id));
      return n.filter((i) => i.id !== found);
    });
  }
  function set(id, opts) {
    const param = _obj(id) ? id : { ...opts, id };
    update((n) => {
      const idx = n.findIndex((i) => i.id === param.id);
      if (idx > -1) {
        n[idx] = { ...n[idx], ...param };
      }
      return n;
    });
  }
  return { subscribe: subscribe2, push, pop, set, _init };
};
const toast = createToast();
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t2) => arr.map((fn) => fn(t2));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t2) => new Date(a + t2 * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t2) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t2);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t2) => a + t2 * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults2 = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults2), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const css$4 = {
  code: "._toastItem.svelte-95rq8t{width:var(--toastWidth, 16rem);height:var(--toastHeight, auto);min-height:var(--toastMinHeight, 3.5rem);margin:var(--toastMargin, 0 0 0.5rem 0);padding:var(--toastPadding, 0);background:var(--toastBackground, rgba(66, 66, 66, 0.9));color:var(--toastColor, #fff);box-shadow:var(\n    --toastBoxShadow,\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  );border:var(--toastBorder, none);border-radius:var(--toastBorderRadius, 0.125rem);position:relative;display:flex;flex-direction:row;align-items:center;overflow:hidden;will-change:transform, opacity;-webkit-tap-highlight-color:transparent}._toastMsg.svelte-95rq8t{padding:var(--toastMsgPadding, 0.75rem 0.5rem);flex:1 1 0%}.pe.svelte-95rq8t,._toastMsg.svelte-95rq8t a{pointer-events:auto}._toastBtn.svelte-95rq8t{width:var(--toastBtnWidth, 2rem);height:var(--toastBtnHeight, 100%);cursor:pointer;outline:none}._toastBtn.svelte-95rq8t::after{content:var(--toastBtnContent, '✕');font:var(--toastBtnFont, 1rem sans-serif);display:flex;align-items:center;justify-content:center}._toastBar.svelte-95rq8t{top:var(--toastBarTop, auto);right:var(--toastBarRight, auto);bottom:var(--toastBarBottom, 0);left:var(--toastBarLeft, 0);height:var(--toastBarHeight, 6px);width:var(--toastBarWidth, 100%);position:absolute;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;pointer-events:none}._toastBar.svelte-95rq8t::-webkit-progress-bar{background:transparent}._toastBar.svelte-95rq8t::-webkit-progress-value{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}._toastBar.svelte-95rq8t::-moz-progress-bar{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}",
  map: null
};
function check(prop, kind = "undefined") {
  return typeof prop === kind;
}
const ToastItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  let { item } = $$props;
  let next = item.initial;
  let cprops = {};
  const progress = tweened(item.initial, { duration: item.duration, easing: identity });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  function close() {
    toast.pop(item.id);
  }
  function autoclose() {
    if ($progress === 1 || $progress === 0)
      close();
  }
  onDestroy(() => {
    if (check(item.onpop, "function")) {
      item.onpop(item.id);
    }
  });
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$4);
  {
    if (!check(item.progress)) {
      item.next = item.progress;
    }
  }
  {
    if (next !== item.next) {
      next = item.next;
      progress.set(next).then(autoclose);
    }
  }
  {
    if (item.component) {
      const { props = {}, sendIdTo } = item.component;
      cprops = {
        ...props,
        ...sendIdTo && { [sendIdTo]: item.id }
      };
    }
  }
  $$unsubscribe_progress();
  return `<div class="${["_toastItem svelte-95rq8t", item.pausable ? "pe" : ""].join(" ").trim()}"><div role="${"status"}" class="${["_toastMsg svelte-95rq8t", item.component ? "pe" : ""].join(" ").trim()}">${item.component ? `${validate_component(item.component.src || missing_component, "svelte:component").$$render($$result, Object.assign({}, cprops), {}, {})}` : `<!-- HTML_TAG_START -->${item.msg}<!-- HTML_TAG_END -->`}</div>
  ${item.dismissable ? `<div class="${"_toastBtn pe svelte-95rq8t"}" role="${"button"}" tabindex="${"0"}"></div>` : ``}
  <progress class="${"_toastBar svelte-95rq8t"}"${add_attribute("value", $progress, 0)}></progress>
</div>`;
});
const css$3 = {
  code: "._toastContainer.svelte-1u812xz{top:var(--toastContainerTop, 1.5rem);right:var(--toastContainerRight, 2rem);bottom:var(--toastContainerBottom, auto);left:var(--toastContainerLeft, auto);position:fixed;margin:0;padding:0;list-style-type:none;pointer-events:none;z-index:var(--toastContainerZIndex, 9999)}",
  map: null
};
function getCss(theme) {
  return Object.keys(theme).reduce((a, c) => `${a}${c}:${theme[c]};`, "");
}
const SvelteToast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toast, $$unsubscribe_toast;
  $$unsubscribe_toast = subscribe(toast, (value) => $toast = value);
  let { options = {} } = $$props;
  let { target = "default" } = $$props;
  let items = [];
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  $$result.css.add(css$3);
  {
    toast._init(target, options);
  }
  items = $toast.filter((i) => i.target === target);
  $$unsubscribe_toast();
  return `<ul class="${"_toastContainer svelte-1u812xz"}">${each(items, (item) => {
    return `<li class="${escape(null_to_empty(item.classes.join(" ")), true) + " svelte-1u812xz"}"${add_attribute("style", getCss(item.theme), 0)}>${validate_component(ToastItem, "ToastItem").$$render($$result, { item }, {}, {})}
    </li>`;
  })}
</ul>`;
});
const chatbot = "/_app/immutable/assets/chat.68b8a2e5.png";
const IconChatbot_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".icon-chatbot.svelte-1x95bcc{border-radius:50%}",
  map: null
};
const IconChatbot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "40" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  $$result.css.add(css$2);
  return `<img${add_attribute("src", chatbot, 0)} alt="${""}"${add_attribute("width", width, 0)} class="${"icon-chatbot svelte-1x95bcc"}">

`;
});
const IconCenter = "/_app/immutable/assets/shormaster_logo-removebg.95131531.png";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $widthLessthan320, $$unsubscribe_widthLessthan320;
  let $t, $$unsubscribe_t;
  $$unsubscribe_widthLessthan320 = subscribe(widthLessthan320, (value) => $widthLessthan320 = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_widthLessthan320();
  $$unsubscribe_t();
  return `<a href="${"/"}" data-sveltekit-reload class="${"ml-[10px] flex items-center relative navbar-brand text-2xl font-bold"}"><div class="${""}"><img${add_attribute("src", IconCenter, 0)} alt="${""}" width="${"50"}"></div>

  
  
  <span class="${"text-[18px]"}"${add_styles({
    "display": $widthLessthan320 ? "none" : "block"
  })}>${escape($t("common.logo"))}</span></a>`;
});
const imagePalette = "/_app/immutable/assets/palette.bdd91657.png";
const ThemeMenu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-1daulzm::-webkit-scrollbar{width:10px}.svelte-1daulzm::-webkit-scrollbar-track{box-shadow:inset 0 0 5px grey;border-radius:10px}.svelte-1daulzm::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.svelte-1daulzm::-webkit-scrollbar-thumb:hover{background:#555}",
  map: null
};
const ThemeMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  const themes = [
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "pastel",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night"
  ];
  $$result.css.add(css$1);
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `<li class="${"relative cursor-pointer svelte-1daulzm"}"><span class="${"pl-0 hover:bg-base-100 svelte-1daulzm"}"><img${add_attribute("src", imagePalette, 0)} width="${"20"}" alt="${""}" class="${"svelte-1daulzm"}"></span>
  <ul class="${"dropdown-menu max-h-96 overflow-y-scroll svelte-1daulzm"}"><form method="${"POST"}" class="${"svelte-1daulzm"}">${each(themes, (theme) => {
    return `<li class="${"svelte-1daulzm"}"><button formaction="${"/?/setTheme&theme=" + escape(theme, true) + "&redirectTo=" + escape($page.url.pathname, true)}" class="${"svelte-1daulzm"}">
            
            ${theme === "dark" ? `${escape($t("common.dark"))}` : ``}
            ${theme === "cupcake" ? `${escape($t("common.cupcake"))}` : ``}
            ${theme === "bumblebee" ? `${escape($t("common.bumblebee"))}` : ``}
            ${theme === "emerald" ? `${escape($t("common.emerald"))}` : ``}
            ${theme === "synthwave" ? `${escape($t("common.synthwave"))}` : ``}
            ${theme === "retro" ? `${escape($t("common.retro"))}` : ``}
            ${theme === "cyberpunk" ? `${escape($t("common.cyberpunk"))}` : ``}
            ${theme === "valentine" ? `${escape($t("common.valentine"))}` : ``}
            ${theme === "halloween" ? `${escape($t("common.halloween"))}` : ``}
            ${theme === "garden" ? `${escape($t("common.garden"))}` : ``}
            ${theme === "forest" ? `${escape($t("common.forest"))}` : ``}
            ${theme === "pastel" ? `${escape($t("common.pastel"))}` : ``}
            ${theme === "wireframe" ? `${escape($t("common.wireframe"))}` : ``}
            ${theme === "black" ? `${escape($t("common.black"))}` : ``}
            ${theme === "luxury" ? `${escape($t("common.luxury"))}` : ``}
            ${theme === "dracula" ? `${escape($t("common.dracula"))}` : ``}
            ${theme === "autumn" ? `${escape($t("common.autumn"))}` : ``}
            ${theme === "business" ? `${escape($t("common.business"))}` : ``}
            ${theme === "acid" ? `${escape($t("common.acid"))}` : ``}
            ${theme === "lemonade" ? `${escape($t("common.lemonade"))}` : ``}
            ${theme === "night" ? `${escape($t("common.night"))}` : ``}</button>
        </li>`;
  })}</form></ul>
</li>`;
});
const imageI18n = "/_app/immutable/assets/lang.d5478ce5.png";
const LangMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_locale;
  $$unsubscribe_locale = subscribe(locale, (value) => value);
  let currentMenu = "English";
  const langs = ["English", "日本語", "繁體中文"];
  $$unsubscribe_locale();
  return `<li class="${"relative cursor-pointer"}"><span class="${"pl-0 hover:bg-base-100"}"><img${add_attribute("src", imageI18n, 0)} width="${"24"}" alt="${""}"></span>
  <ul class="${"dropdown-menu"}">${each(langs, (lang) => {
    return `<li><button${add_styles({
      "font-weight": currentMenu === lang ? "bold" : ""
    })}>${escape(lang)}</button>
      </li>`;
  })}</ul></li>`;
});
const imageAvatar = "/_app/immutable/assets/avatar.a95d545a.png";
const UserMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_menuOpen;
  let $btnChat, $$unsubscribe_btnChat;
  let $page, $$unsubscribe_page;
  let $widthLessthan530, $$unsubscribe_widthLessthan530;
  let $t, $$unsubscribe_t;
  $$unsubscribe_menuOpen = subscribe(menuOpen, (value) => value);
  $$unsubscribe_btnChat = subscribe(btnChat, (value) => $btnChat = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_widthLessthan530 = subscribe(widthLessthan530, (value) => $widthLessthan530 = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_menuOpen();
  $$unsubscribe_btnChat();
  $$unsubscribe_page();
  $$unsubscribe_widthLessthan530();
  $$unsubscribe_t();
  return `<li class="${""}"><span class="${"pl-0 hover:bg-base-100"}">
    <img${add_attribute(
    "src",
    $page.data.user?.user.user_metadata.avatar_url ? $page.data.user.user.user_metadata.avatar_url : imageAvatar,
    0
  )} alt="${""}" width="${"30"}" height="${"30"}" class="${"rounded-full"}">
      </span>
  <ul class="${"dropdown-menu"}">
    ${$page.data.user?.user.email ? `<li><button class="${"cursor-default"}"${add_styles({ "background": `none` })}>
          ${escape($page.data.user?.user.email.substring(0, $page.data.user?.user.email.indexOf("@")))}</button></li>` : ``}

    ${$widthLessthan530 ? `
      ${$page.data.user?.user.email && $page.url.pathname !== "/dashboard" && $page.url.pathname !== "/auth" ? `<li><button>${escape($t("common.dashboard"))}</button></li>` : ``}

      
      ${!$page.data.user?.user.email && $page.url.pathname !== "/auth" ? `<li><button>${escape($t("common.login"))}</button></li>` : ``}` : ``}

    <li><button${add_styles({ "font-weight": $btnChat ? "bold" : "" })}>${escape($t("common.chat"))}</button></li>

    
    ${$page.data.user?.user.email ? `<li><form action="${"/logout"}" method="${"POST"}"><button type="${"submit"}" class="${""}">${escape($t("common.logout"))}</button></form></li>` : ``}</ul></li>`;
});
const imagePanel = "/_app/immutable/assets/panel.e05604fa.png";
const imageLogin = "/_app/immutable/assets/enter.53101733.png";
const MenuBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"bg-base/30 backdrop-blur-2xl fixed top-0 left-0 right-0 z-50"}"><nav class="${"py-2 relative flex justify-between items-center"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}

    <ul class="${"flex items-center"}"><div class="${"side-men"}"><ul class="${"menu menu-horizontal px-1 z-50 flex items-center"}">${validate_component(ThemeMenu, "ThemeMenu").$$render($$result, {}, {}, {})}
          ${validate_component(LangMenu, "LangMenu").$$render($$result, {}, {}, {})}

          
          ${$page.url.pathname === "/" && !$page.data.user?.user.email ? `<a href="${"/auth"}" class="${"mr-4 borde max-[530px]:hidden"}"><img${add_attribute("src", imageLogin, 0)} width="${"24"}" alt="${""}"></a>` : ``}

          
          ${$page.data.user?.user.email && $page.url.pathname !== "/dashboard" && $page.url.pathname !== "/auth" ? `<li><a href="${"/dashboard"}" class="${"max-[530px]:hidden pl-0 mr-1 hover:bg-base-100"}"><img${add_attribute("src", imagePanel, 0)} width="${"24"}" alt="${""}"></a></li>` : ``}

          

          ${validate_component(UserMenu, "UserMenu").$$render($$result, {}, {}, {})}</ul></div></ul></nav></div>`;
});
const ChatMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { message } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  return `<div class="${"chat " + escape(type === "user" ? "chat-end" : "chat-start", true) + " justify-end"}"><div class="${"chat-bubble text-[14px] flex items-center rounded-[8px] " + escape(
    type === "user" ? "chat-bubble-primary" : "chat-bubble-secondary",
    true
  )}">${escape(message)}</div></div>`;
});
const IconClose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "24", height = "24" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"ionicon"}" viewBox="${"0 0 512 512"}"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}><title>Close</title><path fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"32"}" d="${"M368 368L144 144M368 144L144 368"}"></path></svg>`;
});
const ChatWindow_svelte_svelte_type_style_lang = "";
const css = {
  code: 'input[type="text"].svelte-13v7yfo{border-radius:0;border-bottom-left-radius:8px}@media(max-width: 400px){.inner-wrapper.svelte-13v7yfo{height:calc(100vh - 50px)}input[type="text"].svelte-13v7yfo{border-radius:0}}',
  map: null
};
const ChatWindow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $$unsubscribe_menuOpen;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_menuOpen = subscribe(menuOpen, (value) => value);
  let query = "";
  let chatMessages = [];
  let scrollToDiv;
  $$result.css.add(css);
  $$unsubscribe_t();
  $$unsubscribe_menuOpen();
  return `<div class="${"pt-[0px] flex flex-col pt-4 w- px-0 items-center gap-"}"><div class="${"inner-wrapper max-[400px]:w-full shadow-neutral/50 shadow-md h-[300px] w-[350px] pt-[0px] bg-base-200 backdrop-blur-2xl max-[400px]:rounded-t-[0px] rounded-t-[8px] overflow-y-auto flex flex-col gap-4 svelte-13v7yfo"}"><div class="${"chat-window-header w-full px-4 bg-base-100 backdrop-blur-2xl py-3 flex items-center shadow-neutral/10 shadow-md"}">${validate_component(IconSister, "IconSister").$$render($$result, { width: "46" }, {}, {})}
      <div class="${"description ml-[10px] flex flex-col"}"><span class="${"text-[18px]"}">${escape($t("common.logo_long"))}</span>
        <span class="${"text-[14px]"}">${escape($t("common.chatbot_description"))}</span></div>
      <div class="${"icon-close-wrapper ml-auto cursor-pointer"}">${validate_component(IconClose, "IconClose").$$render($$result, {}, {}, {})}</div></div>
    <div class="${"mt-[0px] overflow-y-aut flex flex-col gap-2 pt-[0px] px-4"}">${validate_component(ChatMessage, "ChatMessage").$$render(
    $$result,
    {
      type: "assistant",
      message: $t("common.chatbot_initial_prompt")
    },
    {},
    {}
  )}
      ${each(chatMessages, (message) => {
    return `${validate_component(ChatMessage, "ChatMessage").$$render(
      $$result,
      {
        type: message.role,
        message: message.content
      },
      {},
      {}
    )}`;
  })}
      ${``}
      ${``}</div>
    <div class="${""}"${add_attribute("this", scrollToDiv, 0)}></div></div>
  <form class="${"max-[400px]:h-[50px] relative flex w-full max-[400px]:rounded-none rounded-b-[8px] shadow-neutral/20 shadow-md bg-base-300"}"><input type="${"text"}" class="${"w-[70%] border-none rounded-none outline-none svelte-13v7yfo"}"${add_attribute("value", query, 0)}>
    <button type="${"submit"}" class="${"text-[14px] rounded-[04px] px-[10px] w-[30%]"}"><span>${escape($t("common.send"))}</span></button></form>
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_widthLessthan320;
  let $$unsubscribe_widthLessthan360;
  let $$unsubscribe_widthLessthan382;
  let $widthLessthan400, $$unsubscribe_widthLessthan400;
  let $$unsubscribe_widthLessthan425;
  let $$unsubscribe_widthLessthan480;
  let $$unsubscribe_widthLessthan490;
  let $$unsubscribe_widthLessthan530;
  let $$unsubscribe_widthLessthan560;
  let $$unsubscribe_widthLessthan680;
  let $menuOpen, $$unsubscribe_menuOpen;
  let $btnChat, $$unsubscribe_btnChat;
  $$unsubscribe_widthLessthan320 = subscribe(widthLessthan320, (value) => value);
  $$unsubscribe_widthLessthan360 = subscribe(widthLessthan360, (value) => value);
  $$unsubscribe_widthLessthan382 = subscribe(widthLessthan382, (value) => value);
  $$unsubscribe_widthLessthan400 = subscribe(widthLessthan400, (value) => $widthLessthan400 = value);
  $$unsubscribe_widthLessthan425 = subscribe(widthLessthan425, (value) => value);
  $$unsubscribe_widthLessthan480 = subscribe(widthLessthan480, (value) => value);
  $$unsubscribe_widthLessthan490 = subscribe(widthLessthan490, (value) => value);
  $$unsubscribe_widthLessthan530 = subscribe(widthLessthan530, (value) => value);
  $$unsubscribe_widthLessthan560 = subscribe(widthLessthan560, (value) => value);
  $$unsubscribe_widthLessthan680 = subscribe(widthLessthan680, (value) => value);
  $$unsubscribe_menuOpen = subscribe(menuOpen, (value) => $menuOpen = value);
  $$unsubscribe_btnChat = subscribe(btnChat, (value) => $btnChat = value);
  $$unsubscribe_widthLessthan320();
  $$unsubscribe_widthLessthan360();
  $$unsubscribe_widthLessthan382();
  $$unsubscribe_widthLessthan400();
  $$unsubscribe_widthLessthan425();
  $$unsubscribe_widthLessthan480();
  $$unsubscribe_widthLessthan490();
  $$unsubscribe_widthLessthan530();
  $$unsubscribe_widthLessthan560();
  $$unsubscribe_widthLessthan680();
  $$unsubscribe_menuOpen();
  $$unsubscribe_btnChat();
  return `${$$result.head += `<!-- HEAD_svelte-sxcpqc_START -->${$$result.title = `<title>ShortMaster</title>`, ""}<!-- HEAD_svelte-sxcpqc_END -->`, ""}

${validate_component(SvelteToast, "SvelteToast").$$render($$result, {}, {}, {})}
<div class="${"max-w-[1600px] mx-auto relative overflow-auto"}"${add_styles({
    "height": $widthLessthan400 && $menuOpen ? "100vh" : "auto",
    "overflow-y": $widthLessthan400 && $menuOpen ? "hidden" : "auto"
  })}>

  ${validate_component(MenuBar, "MenuBar").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}

  ${$btnChat ? `<div class="${"fixed bottom-[20px] right-[20px] cursor-pointer"}">${validate_component(IconChatbot, "IconChatbot").$$render($$result, { width: "50" }, {}, {})}</div>` : ``}
  
  ${$menuOpen && $btnChat ? `<div class="${"fixed bottom-[70px] right-[10px] max-[400px]:top-0 max-[400px]:right-0 z-[51] max-[400px]:w-full max-[400px]:h-full max-[400px]:rounded-0"}">${validate_component(ChatWindow, "ChatWindow").$$render($$result, {}, {}, {})}</div>` : ``}</div>`;
});
export {
  Layout as default
};
