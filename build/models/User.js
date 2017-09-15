'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbConnection = require('../utils/dbConnection');

var _dbConnection2 = _interopRequireDefault(_dbConnection);

var _Customer = require('./Customer');

var _Customer2 = _interopRequireDefault(_Customer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dbConnection2.default.Model.extend({
    tableName: 'users',
    customers: function customers() {
        return this.hasMany(_Customer2.default);
    }
});