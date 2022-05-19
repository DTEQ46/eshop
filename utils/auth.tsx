import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../models/User';
interface CustomReq extends NextApiRequest {
  user: {
    isAdmin: boolean;
  };
}
const SignToken = (user: User) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },

    JSON.parse(JSON.stringify(process.env.JWT_SECRET)),
    {
      expiresIn: '30d',
    }
  );
};
const isAuth = async (req: CustomReq, res: NextApiResponse, next: any) => {
  const { authorization } = req.headers;
  if (authorization) {
    // Bearer xxx => xxx
    const token = authorization.slice(7, authorization.length);
    jwt.verify(
      token,
      JSON.parse(JSON.stringify(process.env.JWT_SECRET)),
      (err: any, decode: any) => {
        if (err) {
          res.status(401).send({ message: 'Token is not valid' });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: 'Token is not suppiled' });
  }
};
const isAdmin = async (req: CustomReq, res: NextApiResponse, next: any) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'User is not admin' });
  }
};

export { SignToken, isAuth, isAdmin };
