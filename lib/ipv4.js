"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isIpv4;

var _regexps = require("regexps");

function _isIpv4(obj) {
    return _regexps.ipv4.test(obj);
}

module.exports = exports["default"];