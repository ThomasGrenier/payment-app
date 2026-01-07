import { usePaymentContext } from "../../hooks/PaymentContext.hook";
import type { Payment } from "../../types/Payment.types";
import { toLongDateString } from "../../utils/dateFormat";
import {
  PaymentCardStyled,
  PaymentStateStyled,
  PaymentCardInfosStyled,
  PaymentMerchantStyled,
  PaymentPurchaseAmountStyled,
  LogoCardContentStyled,
  PaymentCreatedDateStyled,
} from "./PaymentCard.style";
import { useTranslation } from "../../../common/hooks/useTranslation";

export const PaymentCard = ({ payment }: { payment: Payment }) => {
  const { selectPayment, selectedPayment } = usePaymentContext();
  const { t } = useTranslation();

  return (
    <PaymentCardStyled
      onClick={() => selectPayment(payment.id)}
      selected={selectedPayment?.id === payment.id}
    >
      <LogoCardContentStyled logoUrl={payment.logoUrl ? payment.logoUrl : ""} />
      <PaymentCardInfosStyled>
        <PaymentCreatedDateStyled>
          {toLongDateString(payment.created)}
        </PaymentCreatedDateStyled>

        <PaymentMerchantStyled>
          {payment.merchantDisplayName}
        </PaymentMerchantStyled>
        <PaymentPurchaseAmountStyled>
          {t("Payment.card.totalAmount", { amount: payment.purchaseAmount })}
        </PaymentPurchaseAmountStyled>
        <div>
          {t("Payment.card.paidCount", { amount: payment.paymentPlan.length })}
        </div>
        <PaymentStateStyled status={payment.state}>
          {t(`Payment.state.${payment.state}`)}
        </PaymentStateStyled>
      </PaymentCardInfosStyled>
    </PaymentCardStyled>
  );
};
