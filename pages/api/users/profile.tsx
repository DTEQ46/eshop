import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import dbConnect from '../../../utils/db';
import { SignToken, isAuth } from '../../../utils/auth';
import { NextApiRequest, NextApiResponse } from 'next';
interface Users {
  _id: string;
}
interface CustomReq extends NextApiRequest {
  user: Users;
}

const handler = nc();
handler.use(isAuth);

handler.put(async (req: CustomReq, res: NextApiResponse) => {
  await dbConnect();
  const user = await User.findById(req.user._id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password
    ? bcrypt.hashSync(req.body.password)
    : user.password;
  await user.save();

  const token = SignToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

export default handler;
