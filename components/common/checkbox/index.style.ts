import styled from '@emotion/styled';

export const CheckBoxWrapper = styled.span<{ name: string }>`
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] + label {
    border-radius: 100%;
    display: inline-block;
    width: 28px;
    height: 28px;
    border: 1px solid rgb(212, 212, 212);
    position: relative;
    transition: background-color 200ms ease-out;
  }
  input[id=${({ name }) => `'${name}'`}] + label::after {
    position: absolute;
    content: '';
    top: 4px;
    left: 9px;
    width: 6px;
    height: 12px;
    border-style: solid;
    border-color: rgb(212, 212, 212);
    border-width: 0px 1px 1px 0px;
    transform: rotate(45deg);
  }
  input[id=${({ name }) => `'${name}'`}]:checked + label {
    border: 1px solid var(--primary);
    background-color: var(--primary);
  }
  input[id=${({ name }) => `'${name}'`}]:checked + label::after {
    border-color: white;
  }
`;
