import { useMapState } from '@hooks/useMapState';
import { act, renderHook } from '@testing-library/react';

describe('useMapState hook', () => {
  it('state test', () => {
    const { result } = renderHook(() => useMapState());
    act(() => result.current[1].onAdd('test', 'This is useMapState test'));
    expect(result.current[0].get('test')).toBe('This is useMapState test');
    act(() => result.current[1].onUpdate('test', 'update!'));
    expect(result.current[0].get('test')).toBe('update!');
    act(() => result.current[1].onDelete('test'));
    expect(result.current[0].get('test')).toBeUndefined();
    act(() => result.current[1].onAdd('test1', 'test1'));
    act(() => result.current[1].onAdd('test2', 'test2'));
    act(() => result.current[1].onClear());
    expect(result.current[0].size).toBe(0);
  });
});
