"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isIpv6;

var _regexps = require("regexps");

function _isIpv6(obj) {
    return _regexps.ipv6.test(obj);
}

module.exports = exports["default"];