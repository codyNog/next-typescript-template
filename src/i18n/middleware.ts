// middleware.ts
import { createI18nMiddleware } from "next-international/middleware";

const LOCALES = ["en", "ja"] as const;

type Locale = (typeof LOCALES)[number];

const defaultLocale: Locale = "en";

export const I18nMiddleware = createI18nMiddleware({
  locales: LOCALES,
  defaultLocale,
  urlMappingStrategy: "rewrite",
});
