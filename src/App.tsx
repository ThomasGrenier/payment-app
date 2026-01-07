import { PaymentPage } from "./features/payments/components/PaymentPage/PaymentPage";
import { PaymentContextProvider } from "./features/payments/context/PaymentContext.provider";

function App() {
  return (
    <>
      <PaymentContextProvider>
        <PaymentPage />
      </PaymentContextProvider>
    </>
  );
}

export default App;
