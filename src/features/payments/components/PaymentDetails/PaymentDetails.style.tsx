import styled from "styled-components";

export const PaymentDetailsContainerStyled = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.text.black};
  border: 2px solid ${({ theme }) => theme.colors.almaOrange};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const PaymentDetailsMerchantStyled = styled.div`
  display: flex;
`;

export const LogoMerchantStyled = styled.img`
  width: 2rem;
  height: 2rem;
`;
