"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isAlphaNumeric;

var _regexps = require("regexps");

function _isAlphaNumeric(obj) {
    return _regexps.alphaNumeric.test(obj);
}

module.exports = exports["default"];