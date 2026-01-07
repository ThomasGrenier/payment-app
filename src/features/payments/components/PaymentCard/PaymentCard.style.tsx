import styled from "styled-components";
import type { PaymentState } from "../../types/Payment.types";

export const PaymentCardStyled = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.black};

  background-color: ${({ selected, theme }) =>
    selected
      ? theme.colors.backgroundColor.selected
      : theme.colors.backgroundColor.card};

  border: 2px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.border.selected : theme.colors.border.default};

  border-radius: ${({ theme }) => theme.radius.xs};
  padding: ${({ theme }) => theme.spacing.md};

  &:hover {
    background-color: ${({ selected, theme }) =>
      selected
        ? theme.colors.backgroundColor.selected
        : theme.colors.backgroundColor.hover};
  }
`;

export const PaymentCardInfosStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const PaymentMerchantStyled = styled.div`
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const PaymentCreatedDateStyled = styled.div`
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const PaymentPlanStyled = styled.div`
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const PaymentPurchaseAmountStyled = styled.div`
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const LogoCardContentStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "logoUrl",
})<{ logoUrl: string }>`
  border: 2px solid ${({ theme }) => theme.colors.border.default};

  border-radius: ${({ theme }) => theme.radius.xs};
  padding: ${({ theme }) => theme.spacing.sm};
  width: 50px;
  height: 50px;
  background-size: contain;
  background-image: ${({ logoUrl }) => `url(${logoUrl})`};
`;

export const PaymentStateStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "status",
})<{ status: PaymentState }>`
  font-size: ${({ theme }) => theme.typography.size.xs};
  border-radius: ${({ theme }) => theme.radius.md};
  width: 5rem;
  height: fit-content;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.white};
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme, status }) => {
    switch (status) {
      case "in_progress":
        return theme.colors.info.warning;
      case "late":
        return theme.colors.info.error;
      case "completed":
        return theme.colors.info.success;
    }
  }};
`;
