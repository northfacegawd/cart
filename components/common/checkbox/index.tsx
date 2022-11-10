/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { HtmlHTMLAttributes } from 'react';

import { CheckBoxWrapper } from './index.style';

interface CheckBoxProps extends HtmlHTMLAttributes<HTMLInputElement> {
  name: string;
}

export default function CheckBox({ name, ...rest }: CheckBoxProps) {
  return (
    <CheckBoxWrapper name={name}>
      <input type="checkbox" name={name} {...rest} id={name} />
      <label htmlFor={name} />
    </CheckBoxWrapper>
  );
}
