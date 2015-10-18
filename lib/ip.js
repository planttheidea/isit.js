"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isIp;

var _regexps = require("regexps");

function _isIp(obj) {
    return _regexps.ip.test(obj);
}

module.exports = exports["default"];