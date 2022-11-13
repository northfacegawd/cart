import { rest } from 'msw';

import { COUPONS } from '@constant/coupons';

export const getCoupons = (type?: 'error') => {
  return rest.get('/api/coupons', (req, res, ctx) => {
    if (type === 'error') {
      return res(ctx.status(400));
    }
    return res(ctx.json({ data: COUPONS }));
  });
};

export default [getCoupons()];
