import mongoose from 'mongoose';

export interface IUser {
  _id: string;
  createdAt: string;
  user: mongoose.Schema.Types.ObjectId;
  name: string;
  rating: number;
  comment: string;
}

interface IProduct {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  category: string;
  image_url: string;
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  reviews: IUser;
  isFeatured: boolean;
}

const reviewSchema = new mongoose.Schema<IUser>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image_url: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    isFeatured: { type: Boolean, required: false, default: false },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

export default Product;
