export type Locale = "fr" | "en";

export interface I18nContextValue {
  locale: Locale;
  t: (
    key: TranslationKey,
    variables?: Record<string, string | number>,
  ) => string;
  setLocale: (locale: Locale) => void;
}

export type TranslationKey =
  | "Payment.card.paidCount"
  | "Payment.card.totalAmount"
  | "Payment.context.error.details"
  | "Payment.context.error.list"
  | "Payment.details.amountLeftToPay"
  | "Payment.details.created"
  | "Payment.details.loading"
  | "Payment.details.title"
  | "Payment.list.loading"
  | "Payment.page.title"
  | "Payment.page.totalAmountLeftToPay"
  | "Payment.plan.title"
  | "Payment.plan.late"
  | "Payment.plan.paid"
  | "Payment.plan.pending"
  | "Payment.plan.state.late"
  | "Payment.plan.state.paid"
  | "Payment.plan.state.pending"
  | "Payment.state.default"
  | "Payment.state.in_progress"
  | "Payment.state.late"
  | "Payment.state.completed";
