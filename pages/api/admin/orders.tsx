import nc from 'next-connect';
import Order from '../../../models/Order';
import { isAuth, isAdmin } from '../../../utils/auth';
import dbConnect from '../../../utils/db';
import { onError } from '../../../utils/error';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = nc({
  onError,
});
handler.use(isAuth, isAdmin);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const orders = await Order.find({}).populate('user', 'name');
  res.send(orders);
});

export default handler;
