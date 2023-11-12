"use client";
import { createI18nClient } from "next-international/client";

export const { useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
  en: () => import("@gen/i18n/en-US"),
  ja: () => import("@gen/i18n/ja-JP"),
});
