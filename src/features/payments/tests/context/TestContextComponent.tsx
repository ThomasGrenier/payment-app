import { usePaymentContext } from "../../hooks/PaymentContext.hook";

export function TestContextComponent() {
  const {
    paymentPage,
    selectedPayment,
    loadingList,
    loadingDetails,
    errorList,
    errorDetails,
    selectPayment,
  } = usePaymentContext();

  return (
    <div>
      <div data-testid="loading-list">{String(loadingList)}</div>
      <div data-testid="error-list">{errorList}</div>
      <div data-testid="payment-page">
        {paymentPage ? "HAS_DATA" : "NO_DATA"}
      </div>

      <div data-testid="loading-details">{String(loadingDetails)}</div>
      <div data-testid="error-details">{errorDetails}</div>
      <div data-testid="selected-payment">
        {selectedPayment ? "HAS_DATA" : "NO_DATA"}
      </div>

      <button onClick={() => selectPayment("123")}>FETCH_DETAILS</button>
    </div>
  );
}
