import jwt from 'jsonwebtoken';
import * as jwtConfig from './jwtConfig'

export default function decode(req, res, next) {
    const token = req.get('auth-token');
    if (token) {
        jwt.verify(token, jwtConfig.secretKey(), (err, decoded)=>{
            if (err) {
                res.invalidToken = true;
                next();
                //return res.status(403).json({ message: 'Failed to authenticate token'});
            }else {
                req.currentUser = decoded;
                next();
            }
        });
    } else {
        //return res.status(403).json({ message: 'No token provided'});
        res.invalidToken = true;
        next();
    }
}