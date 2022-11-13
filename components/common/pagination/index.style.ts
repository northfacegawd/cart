import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface PageProps {
  active?: boolean;
}

export const PageList = styled.ul`
  display: flex;
  margin: 0 auto;
`;

export const Page = styled.li<PageProps>`
  transition: background-color 200ms ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border: 1px solid rgb(221, 221, 221);
  border-right: none;
  color: rgb(0, 0, 0, 0.8);
  font-size: 0.9rem;
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
    border-right: 1px solid rgb(221, 221, 221);
  }
  &:hover {
    background-color: rgb(247, 247, 247);
  }
  ${({ active }) =>
    active &&
    css`
      background-color: rgb(247, 247, 247);
      color: var(--primary);
    `}
`;
