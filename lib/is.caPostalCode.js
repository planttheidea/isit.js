"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isCaPostalCode;

var _regexps = require("regexps");

function isCaPostalCode(obj) {
    return _regexps.caPostalCode.test(obj);
}

module.exports = exports["default"];