// is obj a valid IPv6 address?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitIpv6;

var _regexps = require("regexps");

function isitIpv6(obj) {
    return _regexps.ipv6.test(obj);
}

module.exports = exports["default"];