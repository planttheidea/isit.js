// any version of ipv6.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyIpv6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _ipv6 = require("./ipv6");

var _ipv62 = _interopRequireDefault(_ipv6);

function isitAnyIpv6() {
    return _interfaces.any(_ipv62["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];