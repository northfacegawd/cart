/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { HtmlHTMLAttributes } from 'react';

import { CheckBoxWrapper } from './index.style';

interface CheckBoxProps extends HtmlHTMLAttributes<HTMLInputElement> {
  name: string;
  checked?: boolean;
}

export default function CheckBox({
  name,
  style,
  checked,
  ...rest
}: CheckBoxProps) {
  return (
    <CheckBoxWrapper name={name} style={style}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        {...rest}
      />
      <label htmlFor={name} />
    </CheckBoxWrapper>
  );
}
