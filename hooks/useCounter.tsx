import { useCallback, useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState<number>(0);

  const onIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const onDecrease = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return { count, onIncrease, onDecrease };
}
