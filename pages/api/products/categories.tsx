import nc from 'next-connect';
import Product from '../../../models/Product';
import dbConnect from '../../../utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const categories = await Product.find().distinct('category');
  res.send(categories);
});

export default handler;
