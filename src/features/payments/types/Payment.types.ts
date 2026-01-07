export type PaymentState = "in_progress" | "late" | "completed";

export type PaymentPlanState = "paid" | "pending" | "late";

export interface PaymentPlan {
  id: string;
  purchaseAmount: number;
  dueDate: Date | null;
  originalDueDate: Date | null;
  datePaid: Date | null;
  state: PaymentPlanState;
  customerFee: number;
  customerInterest: number;
  customerCanPostponeUntil: Date | null;
  customerCannotPostponeReason: string | null;
}

export interface Payment {
  id: string;
  created: Date | null;
  state: PaymentState;
  merchantDisplayName: string;
  purchaseAmount: number;
  paymentPlan: PaymentPlan[];
  recovery: number | null;
  deferredTrigger: boolean;
  deferredTriggerApplied: Date | null;
  deferredTriggerDescription: string | null;
  isDeferredCapture: boolean;
  logoUrl: string | null;
  refunds: number[];
}

export interface PaymentPage {
  totalAmountLeftToPay: number;
  payments: Payment[];
}

export interface PaymentContextValue {
  paymentPage: PaymentPage | null;
  selectedPayment: Payment | null;
  loadingList: boolean;
  errorList: string | null;
  loadingDetails: boolean;
  errorDetails: string | null;
  fetchPayments: () => Promise<void>;
  selectPayment: (paymentId: string) => Promise<void>;
}
