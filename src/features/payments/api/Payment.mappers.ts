import type { Payment, PaymentPage, PaymentPlan } from "../types/Payment.types";
import type {
  PaymentApi,
  PaymentPageApi,
  PaymentPlanApi,
} from "../types/Payment.api.types";

export function mapApiToPaymentPlan(api: PaymentPlanApi): PaymentPlan {
  return {
    id: api.id,
    purchaseAmount: api.purchase_amount,
    dueDate: api.due_date ? new Date(api.due_date * 1000) : null,
    originalDueDate: api.original_due_date
      ? new Date(api.original_due_date * 1000)
      : null,
    datePaid: api.date_paid ? new Date(api.date_paid * 1000) : null,
    state: api.state,
    customerFee: api.customer_fee,
    customerInterest: api.customer_interest,
    customerCanPostponeUntil: api.customer_can_postpone_until
      ? new Date(api.customer_can_postpone_until)
      : null,
    customerCannotPostponeReason: api.customer_cannot_postpone_reason,
  };
}

export function mapApiToPayment(api: PaymentApi): Payment {
  return {
    id: api.id,
    created: api.created ? new Date(api.created * 1000) : null,
    state: api.state,
    merchantDisplayName: api.merchant_display_name,
    purchaseAmount: api.purchase_amount,
    paymentPlan: api.payment_plan.map(mapApiToPaymentPlan),
    recovery: api.recovery,
    deferredTrigger: api.deferred_trigger,
    deferredTriggerApplied: api.deferred_trigger_applied
      ? new Date(api.deferred_trigger_applied)
      : null,
    deferredTriggerDescription: api.deferred_trigger_description,
    isDeferredCapture: api.is_deferred_capture,
    logoUrl: api.logo_url,
    refunds: api.refunds,
  };
}

export function mapApiResponseToPaymentPage(
  response: PaymentPageApi,
): PaymentPage {
  return {
    totalAmountLeftToPay: response.total_amount_left_to_pay,
    payments: response.payments.map(mapApiToPayment),
  };
}
