import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import Admin from "@/models/Admin";
import jwt from 'jsonwebtoken';

const adminSecret = process.env["adminSecret "] as string;
export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    if(req.method === 'POST') {
        try {
            const { username, password } = req.body;
            await dbConnect();
            const admin = await Admin.findOne({ username });
            if(admin) {
                res.status(403).json({ msg: 'user already exists' });
            } else {
                const newAdmin = new Admin({ username, password });
                await newAdmin.save();
                const token = jwt.sign({username}, adminSecret, {expiresIn: '2h'});
                res.json({ msg: 'user created successfully'});
            }
        } catch (e) {
            console.log('something broke', e)
        }
}}