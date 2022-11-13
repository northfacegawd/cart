import { NextApiRequest, NextApiResponse } from 'next';

import { PRODUCTS } from '@constant/product';
import withHandler from '@lib/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ data: PRODUCTS });
}

export default withHandler({ methods: ['GET'], handler });
