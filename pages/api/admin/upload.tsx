import nextConnect from 'next-connect';
import { isAuth, isAdmin } from '../../../utils/auth';
import { onError } from '../../../utils/error';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import { NextApiRequest, NextApiResponse } from 'next';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
interface File {
  buffer: any;
}
interface CustomReq extends NextApiRequest {
  file: File;
}
export const config = {
  api: {
    bodyParser: false,
  },
};

const handler: any = nextConnect({ onError });
const upload = multer();

handler
  .use(isAuth, isAdmin, upload.single('file'))
  .post(async (req: CustomReq, res: NextApiResponse) => {
    const streamUpload = (req: CustomReq) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          (error: string, result: boolean) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
    const result = await streamUpload(req);
    res.send(result);
  });

export default handler;
