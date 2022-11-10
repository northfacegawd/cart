import { useCallback, useState } from 'react';

export interface UserCounterOptions {
  min?: number;
  max?: number;
}

export function useCounter(
  defaultValue = 0,
  options: UserCounterOptions = { max: 100, min: 0 },
) {
  const [count, setCount] = useState<number>(defaultValue);

  const onIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const onDecrease = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return { count, onIncrease, onDecrease, ...options };
}
