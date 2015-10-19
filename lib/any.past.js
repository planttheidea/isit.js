// any version of past.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyPast;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _past = require("./past");

var _past2 = _interopRequireDefault(_past);

function isitAnyPast() {
    return _interfaces.any(_past2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];