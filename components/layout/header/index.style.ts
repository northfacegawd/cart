import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface HeaderLinkProps {
  active?: boolean;
}

export const GlobalHeader = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
`;

export const HeaderWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
`;

export const HeaderTopNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const HeaderLink = styled.a<HeaderLinkProps>`
  cursor: pointer;
  transition: all 200ms ease-out;
  font-size: 1.1rem;
  font-weight: 500;
  &:hover {
    font-weight: 600;
    color: var(--primary);
  }
  ${({ active }) =>
    active &&
    css`
      color: var(--primary);
    `}
`;

export const HeaderLogo = styled(HeaderLink)`
  margin-right: 1.5em;
`;
