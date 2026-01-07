import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PaymentCard } from "../../components/PaymentCard/PaymentCard";

jest.mock("../../hooks/PaymentContext.hook");
import { usePaymentContext } from "../../hooks/PaymentContext.hook";
const mockUsePaymentContext = usePaymentContext as jest.Mock;
jest.mock("../../../common/hooks/useTranslation");
import { useTranslation } from "../../../common/hooks/useTranslation";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../common/styles/theme";
const mockUseTranslation = useTranslation as jest.Mock;

describe("PaymentCard", () => {
  beforeEach(() => {
    mockUseTranslation.mockReturnValue({
      t: (key: string) => `${key}`,
    });
  });

  it("should select a payment when clicking on it", async () => {
    const selectPayment = jest.fn();

    mockUsePaymentContext.mockReturnValue({
      selectPayment,
      selectedPayment: null,
    });

    render(
      <ThemeProvider theme={theme}>
        <PaymentCard
          payment={{
            id: "1",
            merchantDisplayName: "Amazon",
            purchaseAmount: 100,
            paymentPlan: [],
            state: "completed",
            created: new Date(),
            recovery: 0,
            deferredTrigger: false,
            deferredTriggerApplied: null,
            deferredTriggerDescription: null,
            isDeferredCapture: false,
            logoUrl: "",
            refunds: [],
          }}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText("Amazon")).toBeInTheDocument();

    expect(screen.getByText("Payment.state.completed")).toBeInTheDocument();

    await userEvent.click(screen.getByText("Amazon"));

    expect(selectPayment).toHaveBeenCalledWith("1");
  });
});
