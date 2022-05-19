import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/db';
import Order from '../../../models/Order';
import nc from 'next-connect';
import { onError } from '../../../utils/error';
import { isAuth } from '../../../utils/auth';
interface CustomReq extends NextApiRequest {
  user: { _id: string };
}
const handler = nc({
  onError,
});
handler.use(isAuth);
handler.post(async (req: CustomReq, res: NextApiResponse) => {
  await dbConnect();
  const newOrder = new Order({
    ...req.body,
    user: req.user._id,
  });
  const order = await newOrder.save();
  res.status(201).send(order);
});
export default handler;
