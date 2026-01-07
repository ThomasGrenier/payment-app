import type { I18nContextValue } from "./i18n.types";
import { createContext } from "react";

export const I18nContext = createContext<I18nContextValue | undefined>(
  undefined,
);
