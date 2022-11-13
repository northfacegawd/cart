import { useQuery } from 'react-query';
import { fetchCoupons } from 'requests/coupon';

export const useCoupons = () => {
  const queryFn = () => fetchCoupons();
  return useQuery('coupons', queryFn);
};
