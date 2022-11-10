import { useCounter } from '@hooks/useCounter';
import { act, renderHook } from '@testing-library/react';

describe('useCounter hook', () => {
  it('increase decrease', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    act(() => result.current.onIncrease());
    expect(result.current.count).toBe(1);
    act(() => result.current.onDecrease());
    act(() => result.current.onDecrease());
    expect(result.current.count).toBe(-1);
  });
});
