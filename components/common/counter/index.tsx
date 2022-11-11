import React from 'react';

import { CountInput, CounterButton, CounterWrapper } from './index.style';

interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

export default function Counter({
  count,
  onDecrease,
  onIncrease,
  min,
  max,
}: CounterProps) {
  return (
    <CounterWrapper>
      <CounterButton
        onClick={onDecrease}
        disabled={count <= min!}
        type="button"
        aria-label="decrease-button"
      >
        -
      </CounterButton>
      <CountInput aria-label="count" readOnly value={count} />
      <CounterButton
        disabled={count >= max!}
        onClick={onIncrease}
        type="button"
        aria-label="increase-button"
      >
        +
      </CounterButton>
    </CounterWrapper>
  );
}
