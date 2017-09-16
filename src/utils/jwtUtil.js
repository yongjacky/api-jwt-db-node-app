import jwt from 'jsonwebtoken';
require('dotenv').config();

export function decode(req, res, next) {
    const token = req.get('auth-token');
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded)=>{
            if (err) {
                return res.status(403).json({ errMsg: 'Failed to authenticate token'});
            }else {
                req.currentUser = decoded;
                next();
            }
        });
    } else {
        return res.status(403).json({ errMsg: 'No token provided'});
    }
}

export function sign(user) {
    const token = jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: '24h'});
    return token;
}

exports.decode=decode;
exports.sign=sign;