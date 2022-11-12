import styled from '@emotion/styled';

export const CartNotifiCationWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
  transition: 200ms ease-out;
  transition-property: color;
  &:hover {
    color: var(--primary);
  }
`;

export const Notification = styled.span`
  position: absolute;
  right: -6px;
  top: -4px;
  min-width: 20px;
  height: 20px;
  padding: 0px 5px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 10px;
  background-color: var(--primary);
  font-size: 9px;
  color: white;
  line-height: 15px;
  text-align: center;
  white-space: nowrap;
`;
