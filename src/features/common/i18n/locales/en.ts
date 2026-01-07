import type { TranslationKey } from "../i18n.types";

export const en: Record<TranslationKey, string> = {
  "Payment.card.paidCount": "Pay in {{amount}} times",
  "Payment.card.totalAmount": "Total amount: {{amount}} €",
  "Payment.context.error.details":
    "Error while fetching payment with id {{id}}",
  "Payment.context.error.list": "Error while fetching payments",
  "Payment.details.amountLeftToPay": "Remaining : {{amount}} €",
  "Payment.details.loading": "Loading details...",
  "Payment.list.loading": "Loading payments...",
  "Payment.page.title": "My Payments",
  "Payment.page.totalAmountLeftToPay": "Remaining {{amount}} € to pay",
  "Payment.plan.late": "Late since {{date}}",
  "Payment.plan.paid": "Paid on {{date}}",
  "Payment.plan.pending": "Due on {{date}}",
  "Payment.plan.title": "Installments",
  "Payment.state.completed": "Completed",
  "Payment.state.in_progress": "In progress",
  "Payment.state.late": "Late",
};
