import nc from 'next-connect';
import Order from '../../../models/Order';
import { isAuth } from '../../../utils/auth';
import dbConnect from '../../../utils/db';
import { onError } from '../../../utils/error';
import { NextApiRequest, NextApiResponse } from 'next';
interface User {
  _id: string;
}
interface CustomReq extends NextApiRequest {
  user: User;
}
const handler = nc({
  onError,
});
handler.use(isAuth);

handler.get(async (req: CustomReq, res: NextApiResponse) => {
  await dbConnect();
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
});

export default handler;
