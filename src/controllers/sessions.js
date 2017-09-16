import jwt from 'jsonwebtoken';
import User from '../models/User';
import { decode, sign } from '../utils/jwtUtil';

export default function sessionsController(api) {
    api.post('/session', (req, res) => {
        const { username, password } = req.body;
        
        return User.byUserName(username).then(dbUser => {
            let user = dbUser.toJSON();
            
            if (!user || !User.verifyPassword(password,user.password)){
                res.status(422).json({ code: 'Invalid Credentials!'});
            }else {
                let { password: _, ...rest } = user;
                const token = sign(rest);
                res.json({ token, user: rest});
            }
        }).catch((err) => {
            console.log(err);
            res.status(422).end()
        });
    });

    api.get('/session',decode, (req, res) => {
        res.json({ user: req.currentUser });
    })
}