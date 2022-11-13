import { NextApiRequest, NextApiResponse } from 'next';

import { PRODUCTS } from '@constant/product';
import withHandler from '@lib/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const limit = Number(req.query.limit ?? 5);
    const page = Number(req.query.page ?? 1);
    if (Number.isNaN(page) || Number.isNaN(limit)) throw Error('invalid_query');
    const products = PRODUCTS.slice(page - 1, limit);
    return res
      .status(200)
      .json({ data: products, totalCount: PRODUCTS.length, limit });
  } catch (error) {
    return res
      .status(400)
      .json({ message: error instanceof Error ? error.message : 'invalid' });
  }
}

export default withHandler({ methods: ['GET'], handler });
