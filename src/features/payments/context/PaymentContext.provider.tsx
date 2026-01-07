import { type ReactNode, useCallback, useEffect, useState } from "react";
import type { Payment, PaymentPage } from "../types/Payment.types";
import { fetchPaymentById, fetchPayments } from "../api/Payment.api";
import { PaymentContext } from "./PaymentContext";
import { useTranslation } from "../../common/hooks/useTranslation";

export function PaymentContextProvider({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  const [paymentPage, setPaymentPage] = useState<PaymentPage | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [loadingList, setLoadingList] = useState<boolean>(false);
  const [errorList, setErrorList] = useState<string | null>(null);
  const [loadingDetails, setLoadingDetails] = useState<boolean>(false);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  const fetchAllPayments = useCallback(async () => {
    setLoadingList(true);
    setErrorList(null);

    try {
      const response: PaymentPage = await fetchPayments();
      setPaymentPage(response);
    } catch {
      setErrorList(t("Payment.context.error.list"));
    } finally {
      setLoadingList(false);
    }
  }, []);

  const selectPayment = useCallback(async (paymentId: string) => {
    setLoadingDetails(true);
    setErrorDetails(null);

    try {
      const response: Payment = await fetchPaymentById(paymentId);
      setSelectedPayment(response);
    } catch {
      setErrorDetails(t("Payment.context.error.details", { id: paymentId }));
    } finally {
      setLoadingDetails(false);
    }
  }, []);

  useEffect(() => {
    fetchAllPayments();
  }, [fetchAllPayments]);

  return (
    <PaymentContext.Provider
      value={{
        paymentPage,
        selectedPayment,
        loadingList,
        loadingDetails,
        errorList,
        errorDetails,
        fetchPayments: fetchAllPayments,
        selectPayment,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
