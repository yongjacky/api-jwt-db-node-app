'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = decode;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _jwtConfig = require('./jwtConfig');

var jwtConfig = _interopRequireWildcard(_jwtConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decode(req, res, next) {
    var token = req.get('auth-token');
    if (token) {
        _jsonwebtoken2.default.verify(token, jwtConfig.secretKey(), function (err, decoded) {
            if (err) {
                return res.status(403).json({ message: 'Failed to authenticate token' });
            } else {
                req.currentUser = decoded;
                next();
            }
        });
    } else {
        return res.status(403).json({ message: 'No token provided' });
    }
}