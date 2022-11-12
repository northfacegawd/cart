import axios from 'axios';

import { Coupon } from '@models/coupon.model';

export const fetchCoupons = async () => {
  const {
    data: { data },
  } = await axios.get<{ data: Coupon[] }>('/api/coupons');

  return data;
};
