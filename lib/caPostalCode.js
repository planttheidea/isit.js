// is obj a valid Canada Postal Code?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitCaPostalCode;

var _regexps = require("./_regexps");

function isitCaPostalCode(obj) {
    return _regexps.caPostalCode.test(obj);
}

module.exports = exports["default"];