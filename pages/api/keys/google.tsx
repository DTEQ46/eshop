import nc from 'next-connect';
import { isAuth } from '../../../utils/auth';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = nc();
handler.use(isAuth);
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  res.send(process.env.GOOGLE_API_KEY || 'nokey');
});

export default handler;
