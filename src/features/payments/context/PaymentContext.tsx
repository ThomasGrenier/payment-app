import { createContext } from "react";
import type { PaymentContextValue } from "../types/Payment.types";

export const PaymentContext = createContext<PaymentContextValue | undefined>(
  undefined,
);
