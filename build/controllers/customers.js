'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = customersController;

var _Customer = require('../models/Customer');

var _Customer2 = _interopRequireDefault(_Customer);

var _jwtUtil = require('../utils/jwtUtil');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function customersController(api) {
    api.post('/customers', _jwtUtil.decode, function (req, res, next) {
        var newCustomer = req.body;
        newCustomer["user_id"] = req.currentUser.id;

        return _Customer2.default.forge(newCustomer).save().then(function (customer) {
            return res.json({ customer: customer });
        }).catch(function () {
            return res.status(422).end();
        });
    });

    api.get('/customers', _jwtUtil.decode, function (req, res) {
        var user = req.currentUser;
        var user_id = user.id;

        return _Customer2.default.findAll({ user_id: user_id }).then(function (customers) {
            res.json({ customers: customers });
        }).catch(function () {
            return res.status(422).end();
        });
    });

    api.delete('/customers/:id', _jwtUtil.decode, function (req, res) {
        var id = req.params.id;
        return _Customer2.default.delete(id).then(function () {
            return res.status(200).end();
        }).catch(function () {
            return res.status(422).end();
        });
    });
}