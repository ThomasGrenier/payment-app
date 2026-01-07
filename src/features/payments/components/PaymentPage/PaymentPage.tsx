import { usePaymentContext } from "../../hooks/PaymentContext.hook";
import { PaymentList } from "../PaymentList/PaymentList";
import { PaymentDetails } from "../PaymentDetails/PaymentDetails";
import {
  PaymentContainer,
  PaymentPageContainer,
  PaymentPageTitleStyled,
  PaymentTotalAmountLeftToPayStyled,
} from "./PaymentPage.style";
import { useTranslation } from "../../../common/hooks/useTranslation";
import { PaymentChips } from "../PaymentsChips/PaymentChips";

export const PaymentPage = () => {
  const paymentContext = usePaymentContext();
  const { t } = useTranslation();
  return (
    <PaymentPageContainer>
      <PaymentPageTitleStyled>{t("Payment.page.title")}</PaymentPageTitleStyled>
      <PaymentTotalAmountLeftToPayStyled>
        {t("Payment.page.totalAmountLeftToPay", {
          amount: paymentContext.paymentPage?.totalAmountLeftToPay || 0,
        })}
      </PaymentTotalAmountLeftToPayStyled>
      <PaymentChips />
      <PaymentContainer>
        <PaymentList />
        <PaymentDetails />
      </PaymentContainer>
    </PaymentPageContainer>
  );
};
