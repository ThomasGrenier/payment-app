import styled from "styled-components";
import type { PaymentPlanState } from "../../types/Payment.types.ts";

export const PaymentPlanTitleStyled = styled.h3`
  text-decoration: underline;
`;

export const PaymentPlanTabStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaymentPlanRowStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

export const PaymentPlanCircleStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "status",
})<{ status: PaymentPlanState }>`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme, status }) => {
    switch (status) {
      case "pending":
        return theme.colors.warning;
      case "late":
        return theme.colors.error;
      case "paid":
        return theme.colors.success;
    }
  }};
`;
