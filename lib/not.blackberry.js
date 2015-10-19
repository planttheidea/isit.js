// not version of blackberry.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotBlackberry;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _blackberry = require("./blackberry");

var _blackberry2 = _interopRequireDefault(_blackberry);

function isitNotBlackberry() {
    return _interfaces.not(_blackberry2["default"]).apply(null, _utils.arraySlice.call(blackberry));
}

module.exports = exports["default"];