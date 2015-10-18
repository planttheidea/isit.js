"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isIp;

var _regexps = require("regexps");

function isIp(obj) {
    return _regexps.ip.test(obj);
}

module.exports = exports["default"];