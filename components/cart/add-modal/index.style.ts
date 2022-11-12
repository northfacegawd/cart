import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ActionButtonProps {
  primary?: boolean;
}

export const ProductName = styled.p`
  color: rgb(51, 51, 51);
  font-size: 1.1rem;
  padding-bottom: 1em;
  border-bottom: 1px solid rgb(51, 51, 51);
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ProductAmountBox = styled(ProductInfo)`
  margin-top: 2em;
`;

export const ProductAmount = styled(ProductPrice)``;

export const ActionButtonBox = styled.div`
  position: relative;
  margin-top: 2em;
  display: flex;
`;

export const ActionButton = styled.button<ActionButtonProps>`
  flex: 1;
  height: 50px;
  margin: 0 0.2em;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  background-color: white;
  border: 1px solid rgb(215, 215, 215);
  outline: none;
  text-align: center;
  cursor: pointer;
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  &:disabled {
    cursor: default;
    background-color: rgba(225, 225, 225, 1);
    color: rgba(0, 0, 0, 0.5);
    &:hover {
      background-color: rgba(225, 225, 225, 1);
    }
  }
  ${({ primary }) =>
    primary &&
    css`
      transition: all 200ms ease-out;
      border: none;
      color: white;
      background-color: black;
      &:hover {
        background-color: var(--primary);
      }
    `}
`;

export const Message = styled.span`
  position: absolute;
  top: -23px;
  right: 0;
  font-weight: 500;
  font-size: 0.9rem;
`;
