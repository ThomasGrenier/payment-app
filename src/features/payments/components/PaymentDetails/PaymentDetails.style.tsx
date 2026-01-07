import styled from "styled-components";

export const PaymentDetailsContainerStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  width: 40rem;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text.black};
  border: 2px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.radius.xs};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const PaymentDetailsMerchantStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const PaymentCreatedDateStyled = styled.div`
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const PaymentAmountStyled = styled.div`
  flex: 1 1 auto;
  text-align: right;
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const PaymentDetailsTitleStyled = styled.div`
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const LogoMerchantStyled = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
