import type { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';
import Admin, {adminInterface} from "@/models/Admin";
const dbConnect = require('@/utils/dbConnect');
const adminSecret = process.env["adminSecret "] as string;
export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    if(req.method === 'POST') {
        const { username, password } = req.body;
        try {
            const admin = await Admin.findOne({ username });
            if(admin) {
                res.status(403).json('user already exists');
            } else {
                const newAdmin: adminInterface = new Admin({ username, password });
                await newAdmin.save();
                const token = jwt.sign({username}, adminSecret, {expiresIn: '2h'});
                res.json({ msg: 'user created successfully ' + token});
            }
        } catch (e) {
            res.json(e);
            /*console.log(e);*/
        }
}}

/*
try {
            await dbConnect();
            const admin = await Admin.findOne({ username });
            if(admin) {
                res.status(403).json({ msg: 'user already exists' });
            } else {
                const newAdmin: adminInterface = new Admin({ username, password });
                await newAdmin.save();
                const token = jwt.sign({username}, adminSecret, {expiresIn: '2h'});
                res.json({ msg: 'user created successfully'});
            }
        } catch (e) {
            console.log('something broke', e)
        }
*/