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

export const CartActionButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: inherit;
  font-size: 1rem;
  font-weight: 500;
  vertical-align: baseline;
  &:disabled {
    cursor: default;
  }
`;

export const CartListEmpty = styled.li`
  width: 100%;
  height: 100px;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(244, 244, 244);
  font-size: 1rem;
  font-weight: 600;
`;

export const ButtonDivision = styled.span`
  width: 2px;
  height: 16px;
  background-color: var(--primary);
  margin: 0 1em;
`;
