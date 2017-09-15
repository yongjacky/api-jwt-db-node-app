'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sessionsController;

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

var _jwtConfig = require('../utils/jwtConfig');

var jwtConfig = _interopRequireWildcard(_jwtConfig);

var _jwtDecode = require('../utils/jwtDecode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function sessionsController(api) {
    api.post('/session', function (req, res, next) {
        var _req$body = req.body,
            username = _req$body.username,
            password = _req$body.password;


        return _User2.default.where({ username: username }).fetch().then(function (user) {
            if (!user || !_bcryptNodejs2.default.compareSync(password, user.password)) {
                res.status(422).json({ code: 'Invalid Credentials!' });
            } else {
                var _ = user.password,
                    rest = _objectWithoutProperties(user, ['password']);

                var token = _jsonwebtoken2.default.sign(rest, jwtConfig.secretKey, { expiresIn: '24h' });
                res.json({ token: token, user: rest });
            }
        }).catch(function () {
            return res.status(422).end();
        });
    });

    api.get('/session', _jwtDecode2.default, function (req, res) {
        res.json({ user: req.currentUser });
    });
}