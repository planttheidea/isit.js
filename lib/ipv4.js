// is obj a valid IPv4 address?

"use strict";

exports.__esModule = true;
exports["default"] = isitIpv4;

var _regexps = require("./_regexps");

function isitIpv4(obj) {
    return _regexps.ipv4.test(obj);
}

module.exports = exports["default"];