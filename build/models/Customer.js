'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dbConnection = require('../utils/dbConnection');

var _dbConnection2 = _interopRequireDefault(_dbConnection);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Customer = function (_bookshelf$Model) {
    _inherits(Customer, _bookshelf$Model);

    function Customer() {
        _classCallCheck(this, Customer);

        return _possibleConstructorReturn(this, (Customer.__proto__ || Object.getPrototypeOf(Customer)).apply(this, arguments));
    }

    _createClass(Customer, [{
        key: 'tableName',
        get: function get() {
            return 'customers';
        }
    }, {
        key: 'user',
        get: function get() {
            return this.belongsTo(_User2.default, 'user_id');
        }
    }], [{
        key: 'findAll',
        value: function findAll(filter, options) {
            return this.forge().where(filter).fetchAll(options);
        }
    }, {
        key: 'delete',
        value: function _delete(id) {
            return this.forge().where({ id: id }).fetch().then(function (item) {
                return item.destroy();
            });
        }
    }]);

    return Customer;
}(_dbConnection2.default.Model);

exports.default = Customer;