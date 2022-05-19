// /api/products/:id/reviews
import mongoose from 'mongoose';
import nextConnect from 'next-connect';
import { onError } from '../../../../utils/error';
import dbConnect from '../../../../utils/db';
import Product from '../../../../models/Product';
import { isAuth } from '../../../../utils/auth';
import { NextApiRequest, NextApiResponse } from 'next';
interface IUser {
  user: string;
  rating: number;
}
interface User {
  _id: string;
  name: string;
}
interface CustomReq extends NextApiRequest {
  user: User;
}
const handler = nextConnect({
  onError,
});

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  dbConnect();
  const product = await Product.findById(req.query.id);
  if (product) {
    res.send(product.reviews);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

handler.use(isAuth).post(async (req: CustomReq, res: NextApiResponse) => {
  const product = await Product.findById(req.query.id);
  if (product) {
    const existReview = product.reviews.find(
      (x: IUser) => x.user == req.user._id
    );
    if (existReview) {
      await Product.updateOne(
        { _id: req.query.id, 'reviews._id': existReview._id },
        {
          $set: {
            'reviews.$.comment': req.body.comment,
            'reviews.$.rating': Number(req.body.rating),
          },
        }
      );

      const updatedProduct = await Product.findById(req.query.id);
      updatedProduct.numReviews = updatedProduct.reviews.length;
      updatedProduct.rating =
        updatedProduct.reviews.reduce(
          (a: number, c: IUser) => c.rating + a,
          0
        ) / updatedProduct.reviews.length;
      await updatedProduct.save();
      return res.send({ message: 'Review updated' });
    } else {
      const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((a: number, c: IUser) => c.rating + a, 0) /
        product.reviews.length;
      await product.save();
      res.status(201).send({
        message: 'Review submitted',
      });
    }
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default handler;
