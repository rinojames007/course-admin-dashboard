import {NextApiRequest, NextApiResponse} from "next";
import jwt from "jsonwebtoken";
const adminSecret: any = process.env.NEXT_PUBLIC_adminSecret;
/**
 * Middleware to authenticate a user based on JWT token from cookies.
 *
 * @param {function} handler - The Next.js API route handler function.
 * @returns {function} - Middleware that authenticates the user and calls the provided handler.
 */
export const authenticate = (handler: (req: NextApiRequest, res: NextApiResponse) => void): Function => {
    /**
     * Middleware function that verifies the JWT token and authenticates the user.
     *
     * @param {NextApiRequest} req - The Next.js API request object.
     * @param {NextApiResponse} res - The Next.js API response object.
     * @returns {Promise<void>}
     */
    return async(req: NextApiRequest, res: NextApiResponse): Promise<void> => {
        /**
         * @type {string} token - JWT token from the 'token' cookie.
         */
        const token: string  = req.cookies.token as string;
        if(!token) {
            res.status(401).json({ msg: 'Unauthorized' });
        }
        /**
         * @type {{ username: string }} verify - Decoded JWT token payload.
         */
        const verify: { username: string; } = jwt.verify(token, adminSecret) as { username: string };
        if(verify){
            /*const user = verify.username;*/
            res.status(200).json({ msg: 'verified the route successfully' });
            handler(req, res);

        }
    }
}