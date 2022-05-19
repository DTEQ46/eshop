import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import Product from '../../../../models/Product';
import dbConnect from '../../../../utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const products = await Product.find({});
  res.send(products);
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const newProduct = new Product({
    name: 'sample name',
    slug: 'sample-slug-' + Math.random(),
    image_url: '/images/shirt1.jpg',
    price: 0,
    category: 'sample category',
    countInStock: 0,
    description: 'sample description',
    rating: 0,
    numReviews: 0,
  });

  const product = await newProduct.save();
  res.send({ message: 'Product Created', product });
});

export default handler;
