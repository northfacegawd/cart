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

export const Count = styled.span`
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

export const CartTooltip = styled.div`
  position: absolute;
  background: white;
  border-radius: 6px;
  padding: 1em;
  display: flex;
  align-items: center;
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  width: 300px;
  height: 95px;
  bottom: -112px;
  left: -260px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::after {
    z-index: 1;
    background-color: white;
    content: '';
    position: absolute;
    top: 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    border-right: 0;
    border-bottom: 0;
    margin-left: 243px;
    margin-top: -11px;
  }
`;

export const Notification = styled.p`
  margin: 0 0 0 1em;
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  & span {
    font-size: 1.2em;
    margin-bottom: 2em;
  }
`;
