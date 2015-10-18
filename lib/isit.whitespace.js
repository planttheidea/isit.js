"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isWhitespace;

var _regexps = require("regexps");

function isWhitespace(obj) {
    return _regexps.whitespace.test(obj);
}

module.exports = exports["default"];