// any version of integer.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyInteger;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _integer = require("./integer");

var _integer2 = _interopRequireDefault(_integer);

function isitAnyInteger() {
    return _interfaces.any(_integer2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];