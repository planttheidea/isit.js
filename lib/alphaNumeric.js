// is obj alphanumeric?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAlphaNumeric;

var _regexps = require("regexps");

function isitAlphaNumeric(obj) {
    return _regexps.alphaNumeric.test(obj);
}

module.exports = exports["default"];