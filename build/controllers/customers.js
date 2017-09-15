'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = customersController;

var _Customer = require('../models/Customer');

var _Customer2 = _interopRequireDefault(_Customer);

var _jwtDecode = require('../utils/jwtDecode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function customersController(api) {
    api.post('/customers', _jwtDecode2.default, function (req, res, next) {
        return _Customer2.default.forge(req.body.customer).save().then(function (customer) {
            return res.json({ customer: customer });
        }).catch(function () {
            return res.status(422).end();
        });
    });
}