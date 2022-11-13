export const numberIntoPrice = (num: number, ceil?: boolean): string => {
  if (ceil) Math.ceil(num);
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

export const isSame = <T extends any>(...rest: T[]): boolean => {
  const criteia = rest[0];
  return rest.every((val) => val === criteia);
};

export const convertMapIntoArray = <K, V>(target: Map<K, V>) => {
  return [...target].map(([, value]) => value);
};

export const getTotal = (target: Array<number>): number => {
  return target.reduce((a, b) => a + b, 0);
};
