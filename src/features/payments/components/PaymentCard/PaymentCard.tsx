import { usePaymentContext } from "../../hooks/PaymentContext.hook";
import type { Payment } from "../../types/Payment.types";
import { toLongDateString } from "../../utils/dateFormat";
import {
  PaymentCardStyled,
  PaymentCardInfosStyled,
  PaymentMerchantStyled,
  PaymentPurchaseAmountStyled,
  LogoCardContentStyled,
  PaymentCreatedDateStyled,
  PaymentPlanStyled,
} from "./PaymentCard.style";
import { useTranslation } from "../../../common/hooks/useTranslation";
import { Chip } from "../../../../design-system/atoms/Chip/Chip";
import { getChipColor } from "../../utils/color";

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
        <PaymentMerchantStyled>
          {payment.merchantDisplayName}
        </PaymentMerchantStyled>
        <PaymentPurchaseAmountStyled>
          {t("Payment.card.totalAmount", { amount: payment.purchaseAmount })}
        </PaymentPurchaseAmountStyled>
        <PaymentPlanStyled>
          {t("Payment.card.paidCount", { amount: payment.paymentPlan.length })}
        </PaymentPlanStyled>
        <PaymentCreatedDateStyled>
          {t("Payment.details.created", {
            date: toLongDateString(payment.created),
          })}
        </PaymentCreatedDateStyled>
      </PaymentCardInfosStyled>
      <Chip
        active
        color={getChipColor(payment.state)}
        label={t(`Payment.state.${payment.state}`)}
      />
    </PaymentCardStyled>
  );
};
