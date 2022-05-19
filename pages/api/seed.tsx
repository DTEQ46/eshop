import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/db';
import data from '../../utils/data';
import Product from '../../models/Product';
import User from '../../models/User';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  res.json('Seeded successfully');
};
export default handler;
