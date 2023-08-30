import Admin from '@/models/Admin';
import jwt from 'jsonwebtoken';
import connectToDatabase from "@/lib/dbConnect";

import type { NextApiRequest, NextApiResponse } from "next";

const adminSecret: any = process.env.NEXT_PUBLIC_adminSecret;

connectToDatabase();

export default function handler( req: NextApiRequest, res: NextApiResponse ){
    console.log(req.body);
    const { username, password } = req.body;
    Admin.findOne({ username })
        .then((admin: any) => {
        if(admin){
            res.status(403).json({ message: 'user already exists'})
        } else {
            const data = { username: username, password: password }
            const newAdmin = new Admin(data);
            newAdmin.save();
            const token = jwt.sign({username}, adminSecret, {expiresIn: '2h'});
            res.status(200).json({ msg: 'user created successfully ', token: token});
        }
    })
}