"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitWhitespace;

var _regexps = require("regexps");

function isitWhitespace(obj) {
    return _regexps.whitespace.test(obj);
}

module.exports = exports["default"];