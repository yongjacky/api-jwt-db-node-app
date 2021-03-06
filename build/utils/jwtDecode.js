'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = decode;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _jwtConfig = require('./jwtConfig');

var _jwtConfig2 = _interopRequireDefault(_jwtConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decode(req, res, next) {
    var token = req.get('auth-token');
    if (token) {
        _jsonwebtoken2.default.verify(token, (0, _jwtConfig2.default)(), function (err, decoded) {
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