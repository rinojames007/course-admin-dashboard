// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  msg: string
}

export default function handler ( req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if(req.method === 'GET') {
    res.status(200).json({ msg: 'hello world' });
  } else {
    res.status(403).json({ msg: 'not allowed bro' });
  }
}