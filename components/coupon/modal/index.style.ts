import styled from '@emotion/styled';

export const ModalTitle = styled.p`
  color: rgb(51, 51, 51);
  font-size: 1.1rem;
  padding-bottom: 0.6em;
  border-bottom: 1px solid rgb(51, 51, 51);
  margin: 0;
`;

export const CouponInfoList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const CouponInfo = styled.li`
  cursor: pointer;
  display: inline;
  margin-top: 1em;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 200ms ease-out;
  width: fit-content;
  &:hover {
    color: var(--primary);
  }
`;

export const CloseButton = styled.button`
  margin-top: 1em;
  height: 50px;
  width: 100%;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  background-color: white;
  border: 1px solid rgb(215, 215, 215);
  outline: none;
  text-align: center;
  cursor: pointer;
`;

export const SelectedCouponTitle = styled.span`
  margin-top: 0.3em;
  display: block;
  font-weight: 600;
  color: var(--primary);
`;

export const CouponEmpty = styled.li`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
`;
