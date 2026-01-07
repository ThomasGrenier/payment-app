import type { PaymentPlan } from "../../types/Payment.types";
import { getAmountLeftToPay } from "../../utils/paymentUtils";

describe("getAmountLeftToPay", () => {
  it("should return the correct left amount to be paid", () => {
    const paymentPlan: PaymentPlan[] = [
      {
        state: "paid",
        purchaseAmount: 200,
        id: "",
        dueDate: null,
        originalDueDate: null,
        datePaid: null,
        customerFee: 0,
        customerInterest: 0,
        customerCanPostponeUntil: null,
        customerCannotPostponeReason: null,
      },
      {
        state: "pending",
        purchaseAmount: 150,
        id: "",
        dueDate: null,
        originalDueDate: null,
        datePaid: null,
        customerFee: 0,
        customerInterest: 0,
        customerCanPostponeUntil: null,
        customerCannotPostponeReason: null,
      },
      {
        state: "paid",
        purchaseAmount: 100,
        id: "",
        dueDate: null,
        originalDueDate: null,
        datePaid: null,
        customerFee: 0,
        customerInterest: 0,
        customerCanPostponeUntil: null,
        customerCannotPostponeReason: null,
      },
    ];

    const result = getAmountLeftToPay(1000, paymentPlan);

    expect(result).toBe(700);
  });

  it("should return the total if plan is empty", () => {
    const result = getAmountLeftToPay(500, []);

    expect(result).toBe(500);
  });

  it("should not change the total if nothing is paid", () => {
    const paymentPlan: PaymentPlan[] = [
      {
        state: "pending",
        purchaseAmount: 200,
        id: "",
        dueDate: null,
        originalDueDate: null,
        datePaid: null,
        customerFee: 0,
        customerInterest: 0,
        customerCanPostponeUntil: null,
        customerCannotPostponeReason: null,
      },
      {
        state: "pending",
        purchaseAmount: 300,
        id: "",
        dueDate: null,
        originalDueDate: null,
        datePaid: null,
        customerFee: 0,
        customerInterest: 0,
        customerCanPostponeUntil: null,
        customerCannotPostponeReason: null,
      },
    ];

    const result = getAmountLeftToPay(1000, paymentPlan);

    expect(result).toBe(1000);
  });
});
