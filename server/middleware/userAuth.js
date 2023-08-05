const jwt = require("jsonwebtoken");
require('dotenv').config();
const userSecret= process.env.userSecret;
const userAuthentication = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token, userSecret, (err, user) => {
            if(err) {
                res.sendStatus(403)
            }
            req.user = user;
            next();
        })
    } else {
        res.sendStatus(401);
    }
}

module.exports = {
    userAuthentication,
    userSecret
}