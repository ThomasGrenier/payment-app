import { type ReactNode, useState } from "react";
import type { Locale, TranslationKey } from "./i18n.types";
import { I18nContext } from "./i18n.context";
import { fr } from "./locales/fr";
import { en } from "./locales/en";
import { getBrowserLocale } from "../helpers/getBrowserLocale";

const dictionaries = { fr, en };

function interpolate(
  template: string,
  variables?: Record<string, string | number>,
) {
  if (!variables) return template;

  return Object.entries(variables).reduce(
    (result, [key, value]) => result.replaceAll(`{{${key}}}`, String(value)),
    template,
  );
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => getBrowserLocale());

  const t = (
    key: TranslationKey,
    variables?: Record<string, string | number>,
  ) => {
    const template = dictionaries[locale][key];
    return interpolate(template, variables);
  };

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        t,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}
