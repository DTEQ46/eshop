import nc from 'next-connect';
import Order from '../../../../models/Order';
import dbConnect from '../../../../utils/db';
import { isAuth } from '../../../../utils/auth';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = nc();
handler.use(isAuth);
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const order = await Order.findById(req.query.id);
  res.send(order);
});

export default handler;
