import nc from 'next-connect';
import Product from '../../../../models/Product';
import dbConnect from '../../../../utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const product = await Product.findById(req.query.id);
  res.send(product);
});

export default handler;
