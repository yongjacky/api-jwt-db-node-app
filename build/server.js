'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _sessions = require('./controllers/sessions');

var _sessions2 = _interopRequireDefault(_sessions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var api = _express2.default.Router();

app.use(_bodyParser2.default.json);
app.use('/api', api);

//sessionsController(api);

function renderClient(req, res) {
    res.send(_template2.default);
}

app.use(renderClient);

app.listen(8888);