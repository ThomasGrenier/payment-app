import styled from "styled-components";

export const PaymentPageContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.lg};
`;

export const PaymentPageTitleStyled = styled.h2`
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: ${({ theme }) => theme.typography.size.xl};
`;

export const PaymentTotalAmountLeftToPayStyled = styled.h1`
  color: ${({ theme }) => theme.colors.text.black};
  font-size: ${({ theme }) => theme.typography.size.lg};
`;

export const PaymentContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
