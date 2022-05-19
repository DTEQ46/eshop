import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import User from '../../../../models/User';
import dbConnect from '../../../../utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const users = await User.find({});

  res.send(users);
});

export default handler;
