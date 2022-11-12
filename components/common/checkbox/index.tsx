/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { HtmlHTMLAttributes } from 'react';

import { CheckBoxWrapper } from './index.style';

interface CheckBoxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
}

export default function CheckBox({
  name,
  style,
  checked,
  disabled,
  ...rest
}: CheckBoxProps) {
  return (
    <CheckBoxWrapper name={name} style={style}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        disabled={disabled}
        {...rest}
      />
      <label htmlFor={name} />
    </CheckBoxWrapper>
  );
}
