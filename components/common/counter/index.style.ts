import styled from '@emotion/styled';

export const CounterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid rgb(221, 223, 225);
`;

export const CounterButton = styled.button`
  font-size: 1.1rem;
  background-color: inherit;
  outline: none;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`;

export const CountTextBox = styled.span`
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-weight: 500;
`;
