"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isCaPostalCode;

var _regexps = require("regexps");

function _isCaPostalCode(obj) {
    return _regexps.caPostalCode.test(obj);
}

module.exports = exports["default"];