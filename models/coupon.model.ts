// type의 값과 discountRate, discountAmount 속성은 둘 중 한 가지만 올 수 있음
export interface Coupon {
  type: 'rate' | 'amount';
  title: string;
  discountRate?: number;
  discountAmount?: number;
}
