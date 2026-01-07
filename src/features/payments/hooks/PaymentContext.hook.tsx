import { useContext } from "react";
import { PaymentContext } from "../context/PaymentContext";
import type { PaymentContextValue } from "../types/Payment.types";

export function usePaymentContext(): PaymentContextValue {
  const context: PaymentContextValue | undefined = useContext(PaymentContext);

  if (!context) {
    throw new Error(
      "usePaymentContext() must be used within Payment Context Provider",
    );
  }

  return context;
}
