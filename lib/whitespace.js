"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isWhitespace;

var _regexps = require("regexps");

function _isWhitespace(obj) {
    return _regexps.whitespace.test(obj);
}

module.exports = exports["default"];