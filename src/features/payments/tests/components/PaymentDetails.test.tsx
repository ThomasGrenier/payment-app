import { render, screen } from "@testing-library/react";
import { PaymentDetails } from "../../components/PaymentDetails/PaymentDetails";

jest.mock("../../hooks/PaymentContext.hook");
import { usePaymentContext } from "../../hooks/PaymentContext.hook";
const mockUsePaymentContext = usePaymentContext as jest.Mock;
jest.mock("../../../common/hooks/useTranslation");
import { useTranslation } from "../../../common/hooks/useTranslation";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../common/styles/theme";
const mockUseTranslation = useTranslation as jest.Mock;

describe("PaymentDetails", () => {
  beforeEach(() => {
    mockUseTranslation.mockReturnValue({
      t: (key: string) => `${key}`,
    });
  });

  it("should show loading while fetching payment", () => {
    mockUsePaymentContext.mockReturnValue({
      loadingDetails: true,
      selectedPayment: null,
    });

    render(
      <ThemeProvider theme={theme}>
        <PaymentDetails />
      </ThemeProvider>,
    );

    expect(screen.getByText("Payment.details.loading")).toBeInTheDocument();
  });

  it("should show payment details and installments", () => {
    mockUsePaymentContext.mockReturnValue({
      loadingDetails: false,
      selectedPayment: {
        merchantDisplayName: "Amazon",
        purchaseAmount: 300,
        paymentPlan: [],
      },
    });

    render(
      <ThemeProvider theme={theme}>
        <PaymentDetails />
      </ThemeProvider>,
    );

    expect(screen.getByText("Amazon")).toBeInTheDocument();
  });
});
