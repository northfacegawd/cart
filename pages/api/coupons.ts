import { NextApiRequest, NextApiResponse } from 'next';

import { COUPONS } from '@constant/coupons';
import withHandler from '@lib/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ data: COUPONS });
}

export default withHandler({ methods: ['GET'], handler });
