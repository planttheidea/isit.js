// is obj a valid IPv6 address?

"use strict";

exports.__esModule = true;
exports["default"] = isitIpv6;

var _regexps = require("./_regexps");

function isitIpv6(obj) {
    return _regexps.ipv6.test(obj);
}

module.exports = exports["default"];