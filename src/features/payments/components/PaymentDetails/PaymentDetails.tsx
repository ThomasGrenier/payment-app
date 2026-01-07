import { usePaymentContext } from "../../hooks/PaymentContext.hook";
import { getAmountLeftToPay } from "../../utils/paymentUtils";
import {
  LogoMerchantStyled,
  PaymentAmountStyled,
  PaymentCreatedDateStyled,
  PaymentDetailsContainerStyled,
  PaymentDetailsMerchantStyled,
  PaymentDetailsTitleStyled,
} from "./PaymentDetails.style";
import { PaymentPlans } from "../PaymentPlans/PaymentPlans";
import { PaymentMerchantStyled } from "../PaymentCard/PaymentCard.style";
import { useTranslation } from "../../../common/hooks/useTranslation";
import { toLongDateString } from "../../utils/dateFormat";

export const PaymentDetails = () => {
  const { selectedPayment, loadingDetails } = usePaymentContext();
  const { t } = useTranslation();

  if (loadingDetails) return <div>{t("Payment.details.loading")}</div>;

  if (!selectedPayment) return null;

  return (
    <PaymentDetailsContainerStyled>
      <PaymentDetailsTitleStyled>
        {t("Payment.details.title")}
      </PaymentDetailsTitleStyled>
      <PaymentDetailsMerchantStyled>
        {selectedPayment.logoUrl ? (
          <LogoMerchantStyled
            src={selectedPayment.logoUrl || undefined}
            alt={selectedPayment.merchantDisplayName}
          />
        ) : null}
        <div>
          <PaymentMerchantStyled>
            {selectedPayment.merchantDisplayName}
          </PaymentMerchantStyled>
          <PaymentCreatedDateStyled>
            {t("Payment.details.created", {
              date: toLongDateString(selectedPayment.created),
            })}
          </PaymentCreatedDateStyled>
        </div>
        <PaymentAmountStyled>
          {selectedPayment.purchaseAmount} €
        </PaymentAmountStyled>
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
