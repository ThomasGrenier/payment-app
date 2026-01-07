import { render, screen } from "@testing-library/react";
import { PaymentList } from "../../components/PaymentList/PaymentList";

jest.mock("../../hooks/PaymentContext.hook");
import { usePaymentContext } from "../../hooks/PaymentContext.hook";
const mockUsePaymentContext = usePaymentContext as jest.Mock;
jest.mock("../../../common/hooks/useTranslation");
import { useTranslation } from "../../../common/hooks/useTranslation";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../common/styles/theme";
const mockUseTranslation = useTranslation as jest.Mock;

describe("PaymentList", () => {
  beforeEach(() => {
    mockUseTranslation.mockReturnValue({
      t: (key: string) => `${key}`,
    });
  });

  it("should show loading while waiting fetch", () => {
    mockUsePaymentContext.mockReturnValue({
      loadingList: true,
      paymentPage: null,
    });

    render(
      <ThemeProvider theme={theme}>
        <PaymentList />
      </ThemeProvider>,
    );

    expect(screen.getByText("Payment.list.loading")).toBeInTheDocument();
  });

  it("should show a card for each payment", () => {
    mockUsePaymentContext.mockReturnValue({
      loadingList: false,
      paymentPage: {
        payments: [
          { id: "1", merchantDisplayName: "Amazon", paymentPlan: [] },
          { id: "2", merchantDisplayName: "CDiscount", paymentPlan: [] },
        ],
      },
      filteredPayments: [
        { id: "1", merchantDisplayName: "Amazon", paymentPlan: [] },
        { id: "2", merchantDisplayName: "CDiscount", paymentPlan: [] },
      ],
    });

    render(
      <ThemeProvider theme={theme}>
        <PaymentList />
      </ThemeProvider>,
    );

    expect(screen.getByText("Amazon")).toBeInTheDocument();
    expect(screen.getByText("CDiscount")).toBeInTheDocument();
  });

  it("should only show filtered payment", () => {
    mockUsePaymentContext.mockReturnValue({
      loadingList: false,
      paymentPage: {
        payments: [
          { id: "1", merchantDisplayName: "Amazon", paymentPlan: [] },
          { id: "2", merchantDisplayName: "CDiscount", paymentPlan: [] },
        ],
      },
      filteredPayments: [
        { id: "1", merchantDisplayName: "Amazon", paymentPlan: [] },
      ],
    });

    render(
      <ThemeProvider theme={theme}>
        <PaymentList />
      </ThemeProvider>,
    );

    expect(screen.getByText("Amazon")).toBeInTheDocument();
    expect(screen.queryByText("CDiscount")).not.toBeInTheDocument();
  });
});
