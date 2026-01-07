import styled from "styled-components";

export const PaymentPlanTitleStyled = styled.h3`
  font-size: ${({ theme }) => theme.typography.size.md};
`;

export const PaymentPlanTabStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const PaymentPlanRowStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs};
  border: 2px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.radius.xs};
`;

export const PaymentPlanAmountStyled = styled.div`
  font-size: ${({ theme }) => theme.typography.size.md};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;
