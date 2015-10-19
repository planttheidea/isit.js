// not version of ipv6.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotIpv6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _ipv6 = require("./ipv6");

var _ipv62 = _interopRequireDefault(_ipv6);

function isitNotIpv6() {
    return (0, _interfaces.not)(_ipv62["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];