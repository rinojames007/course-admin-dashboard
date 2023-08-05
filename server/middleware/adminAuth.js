const jwt = require("jsonwebtoken");
require('dotenv').config();
const adminSecret = process.env.adminSecret;

const adminAuthentication = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, adminSecret, (err, user)=> {
            if(err) {
                res.sendStatus(403)
            }
            next();
        })
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    adminAuthentication,
    adminSecret
}