import type { PaymentPlan } from "../../types/Payment.types";
import type { ReactNode } from "react";
import { toLongDateString } from "../../utils/dateFormat";
import {
  PaymentPlanCircleStyled,
  PaymentPlanRowStyled,
  PaymentPlanTabStyled,
  PaymentPlanTitleStyled,
} from "./PaymentPlans.style";
import { useTranslation } from "../../../common/hooks/useTranslation";

export const PaymentPlans = ({
  paymentPlan,
}: {
  paymentPlan: PaymentPlan[];
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <PaymentPlanTitleStyled>{t("Payment.plan.title")}</PaymentPlanTitleStyled>
      <PaymentPlanTabStyled>
        {paymentPlan.map((plan: PaymentPlan): ReactNode => {
          return (
            <PaymentPlanRowStyled key={plan.id}>
              <PaymentPlanCircleStyled status={plan.state} />
              <div>{plan.purchaseAmount} €</div>
              <div>
                {t(`Payment.plan.${plan.state}`, {
                  date: toLongDateString(plan.dueDate),
                })}
              </div>
            </PaymentPlanRowStyled>
          );
        })}
      </PaymentPlanTabStyled>
    </div>
  );
};
