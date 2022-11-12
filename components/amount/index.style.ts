import styled from '@emotion/styled';

interface AmountBoxProps {
  width?: `${number}%`;
}

interface PriceProps {
  total?: boolean;
}

export const AmountWrapper = styled.div`
  width: 100%;
  display: table;
  margin: 0 auto;
  border-top: 3px solid var(--primary);
  border-bottom: 1px solid var(--primary);
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AmountBox = styled.div<AmountBoxProps>`
  display: table-cell;
  width: ${({ width }) => width ?? 'unset'};
  @media (max-width: 650px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Subject = styled.div`
  padding: 1.3em 0;
  font-weight: 600;
  font-size: 1.1rem;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgb(244, 244, 244);
  @media (max-width: 650px) {
    display: flex;
    align-items: center;
    border-bottom: none;
    padding: 0.7em;
    font-size: 1rem;
    font-weight: 500;
    width: unset;
  }
`;

export const Price = styled(Subject)<PriceProps>`
  border-bottom: none;
  color: ${({ total }) => (total ? 'var(--primary)' : 'initial')};
  @media (max-width: 650px) {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

export const OrderCountBox = styled(AmountBox)`
  display: none;
`;

export const OrderCount = styled(Price)``;
