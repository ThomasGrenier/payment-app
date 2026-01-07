import type { PaymentPlan } from "../types/Payment.types";

export function getAmountLeftToPay(
  totalAmount: number,
  paymentPlan: PaymentPlan[],
): number {
  return paymentPlan.reduce((total, plan) => {
    if (plan.state === "paid") {
      return total - plan.purchaseAmount;
    }
    return total;
  }, totalAmount);
}
