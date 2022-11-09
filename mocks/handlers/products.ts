import { rest } from 'msw';

import { PRODUCTS } from '@constant/product';

export const getProducts = (type?: 'error') => {
  return rest.get('/api/products', (req, res, ctx) => {
    if (type === 'error') {
      return res(ctx.status(400));
    }
    return res(ctx.json({ data: PRODUCTS }));
  });
};

export default [getProducts()];
