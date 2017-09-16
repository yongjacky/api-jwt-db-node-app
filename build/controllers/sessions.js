'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sessionsController;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

var _jwtUtil = require('../utils/jwtUtil');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function sessionsController(api) {
    api.post('/session', function (req, res) {
        var _req$body = req.body,
            username = _req$body.username,
            password = _req$body.password;


        return _User2.default.byUserName(username).then(function (dbUser) {
            var user = dbUser.toJSON();

            if (!user || !_User2.default.verifyPassword(password, user.password)) {
                res.status(422).json({ code: 'Invalid Credentials!' });
            } else {
                var _ = user.password,
                    rest = _objectWithoutProperties(user, ['password']);

                var token = (0, _jwtUtil.sign)(rest);
                res.json({ token: token, user: rest });
            }
        }).catch(function (err) {
            console.log(err);
            res.status(422).end();
        });
    });

    api.get('/session', _jwtUtil.decode, function (req, res) {
        res.json({ user: req.currentUser });
    });
}