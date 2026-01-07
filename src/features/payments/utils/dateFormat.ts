import { getBrowserLocale } from "../../common/helpers/getBrowserLocale";

export function toDateString(date: Date | null): string {
  if (!date) return "";

  return new Intl.DateTimeFormat(getBrowserLocale(), {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

export function toLongDateString(date: Date | null): string {
  if (!date) return "";

  return new Intl.DateTimeFormat(getBrowserLocale(), {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
