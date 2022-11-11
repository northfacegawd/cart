import { useState } from 'react';

type UseMapStateReturn<K, V> = [
  Map<K, V>,
  {
    onAdd: (key: K, value: V) => void;
    onUpdate: (key: K, value: V) => void;
    onDelete: (key: K) => void;
    onClear: () => void;
  },
];

export const useMapState = <K, V>(): UseMapStateReturn<K, V> => {
  const [map, setMap] = useState<Map<K, V>>(new Map<K, V>());

  const onAdd = (key: K, value: V) => {
    setMap((prev) => new Map([...prev, [key, value]]));
  };

  const onUpdate = (key: K, value: V) => {
    setMap((prev) => new Map(prev).set(key, value));
  };

  const onDelete = (key: K) => {
    setMap((prev) => {
      const newMap = new Map(prev);
      newMap.delete(key);
      return newMap;
    });
  };

  const onClear = () => {
    setMap(new Map());
  };

  return [map, { onAdd, onUpdate, onDelete, onClear }];
};
