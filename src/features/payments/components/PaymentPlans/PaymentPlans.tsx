import type { PaymentPlan } from "../../types/Payment.types";
import type { ReactNode } from "react";
import { toLongDateString } from "../../utils/dateFormat";
import {
  PaymentPlanAmountStyled,
  PaymentPlanRowStyled,
  PaymentPlanTabStyled,
  PaymentPlanTitleStyled,
} from "./PaymentPlans.style";
import { useTranslation } from "../../../common/hooks/useTranslation";
import { Chip } from "../../../../design-system/atoms/Chip/Chip";
import { getChipColor } from "../../utils/color";

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
              <PaymentPlanAmountStyled>
                {plan.purchaseAmount} €
              </PaymentPlanAmountStyled>
              <Chip
                active
                label={t(`Payment.plan.state.${plan.state}`)}
                color={getChipColor(plan.state)}
              />

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
