import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/db';
import Product from '../../../models/Product';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const userdb = await Product.find({});
  res.json(userdb);
};
export default handler;
