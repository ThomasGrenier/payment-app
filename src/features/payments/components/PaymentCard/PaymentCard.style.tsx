import styled from "styled-components";
import type { PaymentState } from "../../types/Payment.types";

export const PaymentCardStyled = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.black};

  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.backgroundSelected : theme.colors.background};

  //box-shadow: 0 0.375rem 1rem -0.1875rem rgba(107, 134, 177, 0.25);
  border: 2px solid ${({ theme }) => theme.colors.almaOrange};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundHover};
  }
`;

export const PaymentCardInfosStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const PaymentMerchantStyled = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const PaymentCreatedDateStyled = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const PaymentPurchaseAmountStyled = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
export const LogoCardContentStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "logoUrl",
})<{ logoUrl: string }>`
  border: 2px solid ${({ theme }) => theme.colors.almaOrange};

  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing.sm};
  width: 50px;
  height: 50px;
  background-size: contain;
  background-image: ${({ logoUrl }) => `url(${logoUrl})`};
`;

export const PaymentStateStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "status",
})<{ status: PaymentState }>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: fit-content;
  color: ${({ theme }) => theme.colors.text.white};
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme, status }) => {
    switch (status) {
      case "in_progress":
        return theme.colors.warning;
      case "late":
        return theme.colors.error;
      case "completed":
        return theme.colors.success;
    }
  }};
`;
