import { usePaymentContext } from "../../hooks/PaymentContext.hook";
import { useTranslation } from "../../../common/hooks/useTranslation";
import { PaymentChipsContainerStyled } from "./PaymentChips.style";
import { Chip } from "../../../../design-system/atoms/Chip/Chip";
import { getChipColor } from "../../utils/color";

export const PaymentChips = () => {
  const { setPaymentState, selectedPaymentState } = usePaymentContext();
  const { t } = useTranslation();

  return (
    <PaymentChipsContainerStyled>
      <div onClick={() => setPaymentState()}>
        <Chip
          active={selectedPaymentState === null}
          label={t("Payment.state.default")}
          color={getChipColor("default")}
        />
      </div>
      <div onClick={() => setPaymentState("in_progress")}>
        <Chip
          active={selectedPaymentState === "in_progress"}
          label={t("Payment.state.in_progress")}
          color={getChipColor("in_progress")}
        />
      </div>
      <div onClick={() => setPaymentState("late")}>
        <Chip
          active={selectedPaymentState === "late"}
          label={t("Payment.state.late")}
          color={getChipColor("late")}
        />
      </div>
      <div onClick={() => setPaymentState("completed")}>
        <Chip
          active={selectedPaymentState === "completed"}
          label={t("Payment.state.completed")}
          color={getChipColor("completed")}
        />
      </div>
    </PaymentChipsContainerStyled>
  );
};
