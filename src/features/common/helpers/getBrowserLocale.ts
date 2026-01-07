import type { Locale } from "../i18n/i18n.types.ts";

const SUPPORTED_LOCALES: Locale[] = ["fr", "en"];

export function getBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "en";

  const browserLocales = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const locale of browserLocales) {
    const prefix = locale.split("-")[0] as Locale;
    if (SUPPORTED_LOCALES.includes(prefix)) {
      return prefix;
    }
  }

  return "en";
}
