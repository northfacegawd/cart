import { CheckBoxWrapper } from '@components/common/checkbox/index.style';
import styled from '@emotion/styled';

export const CartItemListWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const CartActionBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5em 0;
  border-bottom: 2px solid var(--primary);
  ${CheckBoxWrapper} {
    margin-right: 1.5em;
  }
`;
