'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decode = decode;
exports.sign = sign;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

function decode(req, res, next) {
    var token = req.get('auth-token');
    if (token) {
        _jsonwebtoken2.default.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
            if (err) {
                return res.status(403).json({ errMsg: 'Failed to authenticate token' });
            } else {
                req.currentUser = decoded;
                next();
            }
        });
    } else {
        return res.status(403).json({ errMsg: 'No token provided' });
    }
}

function sign(user) {
    var token = _jsonwebtoken2.default.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
    return token;
}

exports.decode = decode;
exports.sign = sign;