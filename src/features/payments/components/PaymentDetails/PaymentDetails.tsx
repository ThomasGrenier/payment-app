import { usePaymentContext } from "../../hooks/PaymentContext.hook";
import { getAmountLeftToPay } from "../../utils/paymentUtils";
import {
  LogoMerchantStyled,
  PaymentDetailsContainerStyled,
  PaymentDetailsMerchantStyled,
} from "./PaymentDetails.style";
import { PaymentPlans } from "../PaymentPlans/PaymentPlans";
import { PaymentMerchantStyled } from "../PaymentCard/PaymentCard.style";
import { useTranslation } from "../../../common/hooks/useTranslation";

export const PaymentDetails = () => {
  const { selectedPayment, loadingDetails } = usePaymentContext();
  const { t } = useTranslation();

  if (loadingDetails) return <div>{t("Payment.details.loading")}</div>;

  if (!selectedPayment) return null;

  return (
    <PaymentDetailsContainerStyled>
      <PaymentDetailsMerchantStyled>
        {selectedPayment.logoUrl ? (
          <LogoMerchantStyled
            src={selectedPayment.logoUrl || undefined}
            alt={selectedPayment.merchantDisplayName}
          />
        ) : null}
        <PaymentMerchantStyled>
          {selectedPayment.merchantDisplayName}
        </PaymentMerchantStyled>
      </PaymentDetailsMerchantStyled>
      <div>
        {t("Payment.details.amountLeftToPay", {
          amount: getAmountLeftToPay(
            selectedPayment.purchaseAmount,
            selectedPayment.paymentPlan,
          ),
        })}
      </div>
      <PaymentPlans paymentPlan={selectedPayment.paymentPlan} />
    </PaymentDetailsContainerStyled>
  );
};
