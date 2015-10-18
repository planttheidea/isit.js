"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isUkPostalCode;

var _regexps = require("regexps");

function isUkPostalCode(obj) {
    return _regexps.ukPostalCode.test(obj);
}

module.exports = exports["default"];