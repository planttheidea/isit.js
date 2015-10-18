"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isUkPostalCode;

var _regexps = require("regexps");

function _isUkPostalCode(obj) {
    return _regexps.ukPostalCode.test(obj);
}

module.exports = exports["default"];