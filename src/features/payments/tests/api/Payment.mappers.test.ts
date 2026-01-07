import type {
  PaymentApi,
  PaymentPageApi,
  PaymentPlanApi,
} from "../../types/Payment.api.types";
import type {
  Payment,
  PaymentPage,
  PaymentPlan,
} from "../../types/Payment.types";
import {
  mapApiResponseToPaymentPage,
  mapApiToPayment,
  mapApiToPaymentPlan,
} from "../../api/Payment.mappers";

describe("Payment mapper", () => {
  it("mapApiResponseToPaymentPage transform given response PaymentPageApi object to PaymentPage object", () => {
    const paymentPageApi: PaymentPageApi = {
      total_amount_left_to_pay: 40750,
      payments: [
        {
          id: "payment_121IopV7OU4kX5pMradVJfGAQzSJz7MGy2",
          created: 1751527297,
          state: "in_progress",
          merchant_display_name: "France_merchant",
          purchase_amount: 21000,
          payment_plan: [
            {
              id: "installment_121IopV7jNAHBV9kfHX66XiKbH88Z7K6Vh",
              purchase_amount: 5250,
              due_date: 1751527297,
              original_due_date: null,
              date_paid: 1751527335,
              state: "paid",
              customer_fee: 378,
              customer_interest: 0,
              customer_can_postpone_until: null,
              customer_cannot_postpone_reason: null,
            },
          ],
          recovery: null,
          deferred_trigger: false,
          deferred_trigger_applied: null,
          deferred_trigger_description: null,
          is_deferred_capture: false,
          logo_url: "https://cdn-icons-png.freepik.com/512/8312/8312956.png",
          refunds: [],
        },
      ],
    };

    const result: PaymentPage = mapApiResponseToPaymentPage(paymentPageApi);

    expect(result).toEqual({
      totalAmountLeftToPay: 40750,
      payments: [
        {
          id: "payment_121IopV7OU4kX5pMradVJfGAQzSJz7MGy2",
          created: new Date(1751527297000),
          state: "in_progress",
          merchantDisplayName: "France_merchant",
          purchaseAmount: 21000,
          paymentPlan: [
            {
              id: "installment_121IopV7jNAHBV9kfHX66XiKbH88Z7K6Vh",
              purchaseAmount: 5250,
              dueDate: new Date(1751527297000),
              originalDueDate: null,
              datePaid: new Date(1751527335000),
              state: "paid",
              customerFee: 378,
              customerInterest: 0,
              customerCanPostponeUntil: null,
              customerCannotPostponeReason: null,
            },
          ],
          recovery: null,
          deferredTrigger: false,
          deferredTriggerApplied: null,
          deferredTriggerDescription: null,
          isDeferredCapture: false,
          logoUrl: "https://cdn-icons-png.freepik.com/512/8312/8312956.png",
          refunds: [],
        },
      ],
    });
  });

  it("mapApiToPayment transform given PaymentApi object to Payment object", () => {
    const paymentApi: PaymentApi = {
      id: "payment_121IopV7OU4kX5pMradVJfGAQzSJz7MGy2",
      created: 1751527297,
      state: "in_progress",
      merchant_display_name: "France_merchant",
      purchase_amount: 21000,
      payment_plan: [
        {
          id: "installment_121IopV7jNAHBV9kfHX66XiKbH88Z7K6Vh",
          purchase_amount: 5250,
          due_date: 1751527297,
          original_due_date: null,
          date_paid: 1751527335,
          state: "paid",
          customer_fee: 378,
          customer_interest: 0,
          customer_can_postpone_until: null,
          customer_cannot_postpone_reason: null,
        },
      ],
      recovery: null,
      deferred_trigger: false,
      deferred_trigger_applied: null,
      deferred_trigger_description: null,
      is_deferred_capture: false,
      logo_url: "https://cdn-icons-png.freepik.com/512/8312/8312956.png",
      refunds: [],
    };

    const result: Payment = mapApiToPayment(paymentApi);

    expect(result).toEqual({
      id: "payment_121IopV7OU4kX5pMradVJfGAQzSJz7MGy2",
      created: new Date(1751527297000),
      state: "in_progress",
      merchantDisplayName: "France_merchant",
      purchaseAmount: 21000,
      paymentPlan: [
        {
          id: "installment_121IopV7jNAHBV9kfHX66XiKbH88Z7K6Vh",
          purchaseAmount: 5250,
          dueDate: new Date(1751527297000),
          originalDueDate: null,
          datePaid: new Date(1751527335000),
          state: "paid",
          customerFee: 378,
          customerInterest: 0,
          customerCanPostponeUntil: null,
          customerCannotPostponeReason: null,
        },
      ],
      recovery: null,
      deferredTrigger: false,
      deferredTriggerApplied: null,
      deferredTriggerDescription: null,
      isDeferredCapture: false,
      logoUrl: "https://cdn-icons-png.freepik.com/512/8312/8312956.png",
      refunds: [],
    });
  });

  it("mapApiToPaymentPlan transform given PaymentPlanApi object to PaymentPlan object", () => {
    const paymentPlanApi: PaymentPlanApi = {
      id: "installment_121IopV7jNAHBV9kfHX66XiKbH88Z7K6Vh",
      purchase_amount: 5250,
      due_date: 1751527297,
      original_due_date: null,
      date_paid: 1751527335,
      state: "paid",
      customer_fee: 378,
      customer_interest: 0,
      customer_can_postpone_until: null,
      customer_cannot_postpone_reason: null,
    };

    const result: PaymentPlan = mapApiToPaymentPlan(paymentPlanApi);

    expect(result).toEqual({
      id: "installment_121IopV7jNAHBV9kfHX66XiKbH88Z7K6Vh",
      purchaseAmount: 5250,
      dueDate: new Date(1751527297000),
      originalDueDate: null,
      datePaid: new Date(1751527335000),
      state: "paid",
      customerFee: 378,
      customerInterest: 0,
      customerCanPostponeUntil: null,
      customerCannotPostponeReason: null,
    });
  });
});
