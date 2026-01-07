import styled from "styled-components";

export const PaymentListContainerStyled = styled.div`
  max-height: 75vh;
  overflow: auto;
  flex: 0 0 24rem;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
