"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isIpv4;

var _regexps = require("regexps");

function isIpv4(obj) {
    return _regexps.ipv4.test(obj);
}

module.exports = exports["default"];