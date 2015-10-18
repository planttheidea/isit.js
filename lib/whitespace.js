// is obj only whitespace?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitWhitespace;

var _regexps = require("./_regexps");

function isitWhitespace(obj) {
    return _regexps.whitespace.test(obj);
}

module.exports = exports["default"];