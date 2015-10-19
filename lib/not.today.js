// not version of today.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotToday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _today = require("./today");

var _today2 = _interopRequireDefault(_today);

function isitNotToday() {
    return _interfaces.not(_today2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];