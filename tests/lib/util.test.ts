import { numberIntoPrice } from '@lib/utils';

const numbers: [number, string][] = [
  [1294000, '1,294,000'],
  [-449920.123, '-449,920.123'],
  [992899189283.4408, '992,899,189,283.4408'],
];

describe('util function test', () => {
  numbers.forEach(([num, result]) => {
    it('numberIntoPrice ', () => {
      expect(numberIntoPrice(num)).toBe(result);
    });
  });
});
