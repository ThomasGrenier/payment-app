import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PaymentPage } from "../../components/PaymentPage/PaymentPage";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../common/styles/theme";
import { PaymentContextProvider } from "../../context/PaymentContext.provider";
import * as PaymentApi from "../../api/Payment.api";
import { useTranslation } from "../../../common/hooks/useTranslation";

const mockUseTranslation = useTranslation as jest.Mock;
const mockFetchPayments = PaymentApi.fetchPayments as jest.Mock;
const mockFetchPaymentById = PaymentApi.fetchPaymentById as jest.Mock;
jest.mock("../../api/Payment.api");
jest.mock("../../../common/hooks/useTranslation");

const paymentsMock = {
  totalAmountLeftToPay: 300,
  payments: [
    {
      id: "1",
      merchantDisplayName: "CDiscount",
      purchaseAmount: 200,
      state: "in_progress",
      logoUrl: null,
      created: new Date(),
      paymentPlan: [],
    },
    {
      id: "2",
      merchantDisplayName: "Amazon",
      purchaseAmount: 100,
      state: "completed",
      logoUrl: null,
      created: new Date(),
      paymentPlan: [],
    },
    {
      id: "3",
      merchantDisplayName: "Kiabi",
      purchaseAmount: 100,
      state: "late",
      logoUrl: null,
      created: new Date(),
      paymentPlan: [],
    },
  ],
};

const paymentDetailsMock = {
  ...paymentsMock.payments[0],
  paymentPlan: [
    {
      id: "plan-1",
      state: "paid",
      purchaseAmount: 50,
      dueDate: new Date(),
    },
    {
      id: "plan-2",
      state: "pending",
      purchaseAmount: 50,
      dueDate: new Date(),
    },
    {
      id: "plan-3",
      state: "pending",
      purchaseAmount: 50,
      dueDate: new Date(),
    },
    {
      id: "plan-4",
      state: "pending",
      purchaseAmount: 50,
      dueDate: new Date(),
    },
  ],
};

describe("PaymentPage integration", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseTranslation.mockReturnValue({
      t: (key: string) => `${key}`,
    });
  });

  it("shows payment details when clicking on a payment", async () => {
    mockFetchPayments.mockResolvedValueOnce(paymentsMock);
    mockFetchPaymentById.mockResolvedValueOnce(paymentDetailsMock);

    render(
      <ThemeProvider theme={theme}>
        <PaymentContextProvider>
          <PaymentPage />
        </PaymentContextProvider>
      </ThemeProvider>,
    );

    const paymentItem = await screen.findByText("CDiscount");
    expect(paymentItem).toBeInTheDocument();

    expect(screen.queryByText("Payment.details.title")).not.toBeInTheDocument();

    await userEvent.click(paymentItem);

    expect(screen.queryByText("Payment.details.title")).toBeInTheDocument();
  });

  it("filters payment list when clicking on a payment chip", async () => {
    mockFetchPayments.mockResolvedValueOnce(paymentsMock);
    mockFetchPaymentById.mockResolvedValueOnce(paymentDetailsMock);

    render(
      <ThemeProvider theme={theme}>
        <PaymentContextProvider>
          <PaymentPage />
        </PaymentContextProvider>
      </ThemeProvider>,
    );

    expect(await screen.findByText("Amazon")).toBeInTheDocument();
    expect(screen.getByText("CDiscount")).toBeInTheDocument();
    expect(screen.getByText("Kiabi")).toBeInTheDocument();

    const chips = screen.getAllByText("Payment.state.in_progress");
    await userEvent.click(chips[0]);

    await waitFor(() => {
      expect(screen.queryByText("Amazon")).not.toBeInTheDocument();
      expect(screen.queryByText("Kiabi")).not.toBeInTheDocument();
      expect(screen.getByText("CDiscount")).toBeInTheDocument();
    });
  });
});
