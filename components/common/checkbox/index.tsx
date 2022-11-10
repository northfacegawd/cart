/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { HtmlHTMLAttributes } from 'react';

import { CheckBoxWrapper } from './index.style';

interface CheckBoxProps extends HtmlHTMLAttributes<HTMLInputElement> {
  name: string;
}

export default function CheckBox({ name, style, ...rest }: CheckBoxProps) {
  return (
    <CheckBoxWrapper name={name} style={style}>
      <input type="checkbox" name={name} id={name} {...rest} />
      <label htmlFor={name} />
    </CheckBoxWrapper>
  );
}
