import Admin from '@/models/Admin';
import jwt from 'jsonwebtoken';
import connectToDatabase from "@/lib/dbConnect";

import type { NextApiRequest, NextApiResponse } from "next";

const adminSecret: any = process.env.NEXT_PUBLIC_adminSecret;

connectToDatabase();

export default function handler( req: NextApiRequest, res: NextApiResponse ){
    console.log(req.body);
    const { username, password } = req.body;
    Admin.findOne({ username, password })
        .then(admin => {
            if(admin) {
                const token = jwt.sign({ username }, adminSecret, { expiresIn: '2h' })
                res.status(200).json({ msg: 'logged in successfully', token: token});
            } else {
                res.status(401).json({ message: "invalid credentials" });
            }
        })
}