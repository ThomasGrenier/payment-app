import { render, screen } from "@testing-library/react";
import { PaymentPage } from "../../components/PaymentPage/PaymentPage";

jest.mock("../../hooks/PaymentContext.hook");
import { usePaymentContext } from "../../hooks/PaymentContext.hook";
const mockUsePaymentContext = usePaymentContext as jest.Mock;
jest.mock("../../../common/hooks/useTranslation");
import { useTranslation } from "../../../common/hooks/useTranslation";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../common/styles/theme";
const mockUseTranslation = useTranslation as jest.Mock;

describe("PaymentPage", () => {
  beforeEach(() => {
    mockUseTranslation.mockReturnValue({
      t: (key: string) => `${key}`,
    });
  });

  it("should show title and total amount", () => {
    mockUsePaymentContext.mockReturnValue({
      paymentPage: { totalAmountLeftToPay: 500, payments: [] },
    });

    render(
      <ThemeProvider theme={theme}>
        <PaymentPage />
      </ThemeProvider>,
    );

    expect(screen.getByText("Payment.page.title")).toBeInTheDocument();
    expect(
      screen.getByText("Payment.page.totalAmountLeftToPay"),
    ).toBeInTheDocument();
  });
});
