import { useI18n } from "./useI18n";

export function useTranslation() {
  const { t, locale, setLocale } = useI18n();

  return {
    t,
    locale,
    setLocale,
  };
}
