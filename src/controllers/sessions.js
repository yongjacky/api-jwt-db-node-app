import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import * as jwtConfig from '../utils/jwtConfig';
import decode from '../utils/jwtDecode';

export default function sessionsController(api) {
    api.post('/session', (req, res) => {
        const { username, password } = req.body;
        
        return User.where({username}).fetch().then(user => {
            if (!user || !bcrypt.compareSync(password,user.password)){
                res.status(422).json({ code: 'Invalid Credentials!'});
            }else {
                const { password: _, ...rest} = user;
                const token = jwt.sign(rest, jwtConfig.secretKey, { expiresIn: '24h'});
                res.json({ token, user: rest});
            }
        }).catch(() => res.status(422).end());
    });

    api.get('/session',decode, (req, res) => {
        res.json({ user: req.currentUser });
    })
}