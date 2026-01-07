import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PaymentContextProvider } from "../../context/PaymentContext.provider";
import { TestContextComponent } from "./TestContextComponent";
import * as PaymentApi from "../../api/Payment.api";
import { I18nProvider } from "../../../common/i18n/i18n.provider";

jest.mock("../../api/Payment.api.ts");

const mockFetchPayments = PaymentApi.fetchPayments as jest.Mock;
const mockFetchPaymentById = PaymentApi.fetchPaymentById as jest.Mock;

describe("PaymentContextProvider", () => {
  beforeEach(() => {
    Object.defineProperty(navigator, "languages", {
      value: ["fr-FR"],
      configurable: true,
    });
  });

  it("fetchAllPayments should have data if fetch succeeded", async () => {
    mockFetchPayments.mockResolvedValueOnce({
      totalAmountLeftToPay: 5000,
      payments: [],
    });

    render(
      <I18nProvider>
        <PaymentContextProvider>
          <TestContextComponent />
        </PaymentContextProvider>
      </I18nProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId("payment-page").textContent).toBe("HAS_DATA");
    });

    expect(screen.getByTestId("error-list").textContent).toBe("");
  });

  it("fetchAllPayments should not have data if fetch failed", async () => {
    mockFetchPayments.mockRejectedValueOnce(new Error("API error"));

    render(
      <I18nProvider>
        <PaymentContextProvider>
          <TestContextComponent />
        </PaymentContextProvider>
      </I18nProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId("error-list").textContent).toBe(
        "Impossible de fetch les paiements",
      );
    });
  });

  it("selectPayment should have data if fetch succeeded", async () => {
    mockFetchPayments.mockResolvedValueOnce({
      totalAmountLeftToPay: 5000,
      payments: [],
    });

    mockFetchPaymentById.mockResolvedValueOnce({
      id: "123",
    });

    render(
      <I18nProvider>
        <PaymentContextProvider>
          <TestContextComponent />
        </PaymentContextProvider>
      </I18nProvider>,
    );

    await userEvent.click(screen.getByText("FETCH_DETAILS"));

    await waitFor(() => {
      expect(screen.getByTestId("selected-payment").textContent).toBe(
        "HAS_DATA",
      );
    });
  });

  it("selectPayment should not have data if fetch failed", async () => {
    mockFetchPayments.mockResolvedValueOnce({
      totalAmountLeftToPay: 5000,
      payments: [],
    });

    mockFetchPaymentById.mockRejectedValueOnce(new Error("API error"));

    render(
      <I18nProvider>
        <PaymentContextProvider>
          <TestContextComponent />
        </PaymentContextProvider>
      </I18nProvider>,
    );

    await userEvent.click(screen.getByText("FETCH_DETAILS"));

    await waitFor(() => {
      expect(screen.getByTestId("error-details").textContent).toBe(
        "Impossible de fetch le paiement avec l'id 123",
      );
    });
  });
});
