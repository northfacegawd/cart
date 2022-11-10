import React from 'react';

import { CountInput, CounterButton, CounterWrapper } from './index.style';

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
      <CounterButton
        onClick={onDecrease}
        disabled={count <= 0}
        type="button"
        aria-label="decrease-button"
      >
        -
      </CounterButton>
      <CountInput aria-label="count" readOnly value={count} />
      <CounterButton
        onClick={onIncrease}
        type="button"
        aria-label="increase-button"
      >
        +
      </CounterButton>
    </CounterWrapper>
  );
}
