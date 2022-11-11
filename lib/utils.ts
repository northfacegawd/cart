export const numberIntoPrice = (num: number): string => {
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

export const isSame = <T extends any>(...rest: T[]): boolean => {
  const criteia = rest[0];
  return rest.every((val) => val === criteia);
};
