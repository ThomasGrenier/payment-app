import { usePaymentContext } from "../../hooks/PaymentContext.hook";
import type { Payment } from "../../types/Payment.types";
import { PaymentCard } from "../PaymentCard/PaymentCard";
import type { ReactNode } from "react";
import { PaymentListContainerStyled } from "./PaymentList.style";
import { useTranslation } from "../../../common/hooks/useTranslation";

export const PaymentList = () => {
  const { paymentPage, loadingList } = usePaymentContext();
  const { t } = useTranslation();

  if (loadingList) return <div>{t("Payment.list.loading")}</div>;

  if (!paymentPage) return null;

  return (
    <PaymentListContainerStyled>
      {paymentPage.payments.map(
        (payment: Payment): ReactNode => (
          <div key={payment.id}>
            <PaymentCard payment={payment} />
          </div>
        ),
      )}
    </PaymentListContainerStyled>
  );
};
