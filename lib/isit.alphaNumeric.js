"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isAlphaNumeric;

var _regexps = require("regexps");

function isAlphaNumeric(obj) {
    return _regexps.alphaNumeric.test(obj);
}

module.exports = exports["default"];