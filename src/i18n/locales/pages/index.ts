import { createI18n } from "next-international";

export const { useI18n, useScopedI18n, I18nProvider } = createI18n({
  en: () => import("@gen/i18n/en-US"),
  ja: () => import("@gen/i18n/ja-JP"),
});
