"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitCaPostalCode;

var _regexps = require("regexps");

function isitCaPostalCode(obj) {
    return _regexps.caPostalCode.test(obj);
}

module.exports = exports["default"];