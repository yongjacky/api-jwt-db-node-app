'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kx = undefined;

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _bookshelf = require('bookshelf');

var _bookshelf2 = _interopRequireDefault(_bookshelf);

var _knexfile = require('../../knexfile');

var _knexfile2 = _interopRequireDefault(_knexfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var kx = exports.kx = (0, _knex2.default)(_knexfile2.default);
exports.default = (0, _bookshelf2.default)(kx);