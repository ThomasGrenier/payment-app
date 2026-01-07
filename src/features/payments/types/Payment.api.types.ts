export type PaymentStateApi = "in_progress" | "late" | "completed";
export type PaymentPlanStateApi = "paid" | "pending" | "late";

export interface PaymentPlanApi {
  id: string;
  purchase_amount: number;
  due_date: number | null;
  original_due_date: number | null;
  date_paid: number | null;
  state: PaymentPlanStateApi;
  customer_fee: number;
  customer_interest: number;
  customer_can_postpone_until: string | null;
  customer_cannot_postpone_reason: string | null;
}

export interface PaymentApi {
  id: string;
  created: number | null;
  state: PaymentStateApi;
  merchant_display_name: string;
  purchase_amount: number;
  payment_plan: PaymentPlanApi[];
  recovery: number | null;
  deferred_trigger: boolean;
  deferred_trigger_applied: string | null;
  deferred_trigger_description: string | null;
  is_deferred_capture: boolean;
  logo_url: string | null;
  refunds: number[];
}

export interface PaymentPageApi {
  total_amount_left_to_pay: number;
  payments: PaymentApi[];
}
