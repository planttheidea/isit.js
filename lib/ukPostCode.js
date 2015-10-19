// is obj a valid UK Postal Code?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitUKPostCode;

var _regexps = require("./_regexps");

function isitUKPostCode(obj) {
    return _regexps.ukPostCode.test(obj);
}

module.exports = exports["default"];