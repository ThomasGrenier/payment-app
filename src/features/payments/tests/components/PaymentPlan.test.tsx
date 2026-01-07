import { render, screen } from "@testing-library/react";
import { PaymentPlans } from "../../components/PaymentPlans/PaymentPlans";

jest.mock("../../../common/hooks/useTranslation");
import { useTranslation } from "../../../common/hooks/useTranslation";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../common/styles/theme";
const mockUseTranslation = useTranslation as jest.Mock;

describe("PaymentPlans", () => {
  beforeEach(() => {
    mockUseTranslation.mockReturnValue({
      t: (key: string) => `${key}`,
    });
  });

  it("should show all the installments", () => {
    render(
      <ThemeProvider theme={theme}>
        <PaymentPlans
          paymentPlan={[
            {
              id: "1",
              state: "paid",
              purchaseAmount: 100,
              dueDate: new Date("2024-05-01"),
              originalDueDate: null,
              datePaid: null,
              customerFee: 0,
              customerInterest: 0,
              customerCanPostponeUntil: null,
              customerCannotPostponeReason: null,
            },
            {
              id: "2",
              state: "pending",
              purchaseAmount: 200,
              dueDate: new Date("2024-05-01"),
              originalDueDate: null,
              datePaid: null,
              customerFee: 0,
              customerInterest: 0,
              customerCanPostponeUntil: null,
              customerCannotPostponeReason: null,
            },
          ]}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText("Payment.plan.title")).toBeInTheDocument();
    expect(screen.getByText("100 €")).toBeInTheDocument();
    expect(screen.getByText("Payment.plan.paid")).toBeInTheDocument();
    expect(screen.getByText("200 €")).toBeInTheDocument();
    expect(screen.getByText("Payment.plan.pending")).toBeInTheDocument();
  });
});
