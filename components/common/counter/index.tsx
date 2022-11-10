import React from 'react';

import { CountTextBox, CounterButton, CounterWrapper } from './index.style';

interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function Counter({
  count,
  onDecrease,
  onIncrease,
}: CounterProps) {
  return (
    <CounterWrapper>
      <CounterButton onClick={onDecrease} disabled={count <= 0} type="button">
        -
      </CounterButton>
      <CountTextBox>{count}</CountTextBox>
      <CounterButton onClick={onIncrease} type="button">
        +
      </CounterButton>
    </CounterWrapper>
  );
}
