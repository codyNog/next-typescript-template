import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import("@gen/i18n/en-US"),
  jp: () => import("@gen/i18n/ja-JP"),
});
