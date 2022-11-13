import styled from '@emotion/styled';

/**
 * TODO - 그리드로 구현해놓은 레이아웃 퍼센트로 수정 후 반응형 지원
 */
export const ProductUList = styled.ul`
  margin: 0 auto;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProducstWrapper = styled.div`
  margin: 0 auto;
`;

export const PaginatinWrapper = styled.div`
  margin-top: 3rem;
`;

export const ErrorMesasge = styled.p`
  margin: 5em auto 0 auto;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
`;
