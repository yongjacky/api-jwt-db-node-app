'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _sessions = require('./controllers/sessions');

var _sessions2 = _interopRequireDefault(_sessions);

var _customers = require('./controllers/customers');

var _customers2 = _interopRequireDefault(_customers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var app = (0, _express2.default)();
var homeRoute = _express2.default.Router();
var api = _express2.default.Router();

app.use(_bodyParser2.default.json());
app.use('/api', api);

app.use('/', homeRoute);
homeRoute.get('/', function (req, res) {
    res.status(200).json({});
});

(0, _sessions2.default)(api);
(0, _customers2.default)(api);

app.listen(process.env.APP_LISTEN_PORT, function () {
    console.log('API JWT DB NODE APP Started and Listened at port ' + process.env.APP_LISTEN_PORT);
});