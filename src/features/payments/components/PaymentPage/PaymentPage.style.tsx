import styled from "styled-components";

export const PaymentPageContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.lg};
`;

export const PaymentPageTitleStyled = styled.h2`
  color: ${({ theme }) => theme.colors.almaOrange};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
export const PaymentTotalAmountLeftToPayStyled = styled.h1`
  color: ${({ theme }) => theme.colors.text.black};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const PaymentContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
