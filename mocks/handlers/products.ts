import { PRODUCTS } from 'constant/product';
import { rest } from 'msw';

export const getProducts = rest.get('/fruits', (req, res, ctx) =>
  res(ctx.json(PRODUCTS)),
);
