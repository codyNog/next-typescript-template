import { createI18nServer } from "next-international/server";

const { getI18n, getCurrentLocale: locale } = createI18nServer({
  en: () => import("gen/i18n/en-US"),
  ja: () => import("gen/i18n/ja-JP"),
});

const getCurrentLocale = (() => {
  return locale;
})();

export { getI18n, getCurrentLocale };
