import { CheckBoxWrapper } from '@components/common/checkbox/index.style';
import styled from '@emotion/styled';

export const CartItemWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 1.5em 1em 1.5em 0;
  border-bottom: 1px solid rgb(244, 244, 244);
  ${CheckBoxWrapper} {
    margin-right: 1.5em;
  }
`;

export const CartItemName = styled.p`
  margin: 0;
  max-width: 300px;
  margin-left: 2em;
  font-size: 1rem;
  font-weight: 600;
  max-height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CounterBox = styled.div`
  margin-left: auto;
`;

export const CartItemPrice = styled.span`
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 600;
  width: 100px;
  text-align: right;
`;
