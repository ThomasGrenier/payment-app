import type { TranslationKey } from "../i18n.types";

export const fr: Record<TranslationKey, string> = {
  "Payment.card.paidCount": "Paiement en {{amount}}X",
  "Payment.card.totalAmount": "Montant total : {{amount}} €",
  "Payment.context.error.details":
    "Impossible de fetch le paiement avec l'id {{id}}",
  "Payment.context.error.list": "Impossible de fetch les paiements",
  "Payment.details.amountLeftToPay": "Reste à payer : {{amount}} €",
  "Payment.details.created": "Achat du {{date}}",
  "Payment.details.loading": "Chargement du détail...",
  "Payment.details.title": "Détail du paiement",
  "Payment.list.loading": "Chargement de vos paiements...",
  "Payment.page.title": "Mes Paiements",
  "Payment.page.totalAmountLeftToPay": "Total à régler {{amount}} €",
  "Payment.plan.late": "En retard depuis le {{date}}",
  "Payment.plan.paid": "Payé le {{date}}",
  "Payment.plan.pending": "Prélèvement prévu le {{date}}",
  "Payment.plan.state.late": "Retard",
  "Payment.plan.state.paid": "Payé",
  "Payment.plan.state.pending": "Prévu",
  "Payment.plan.title": "Echéancier des paiements",
  "Payment.state.completed": "Payé",
  "Payment.state.default": "Tous",
  "Payment.state.in_progress": "En cours",
  "Payment.state.late": "En retard",
};
