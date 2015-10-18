// is obj a valid UK Postal Code?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitUkPostalCode;

var _regexps = require("./regexps");

function isitUkPostalCode(obj) {
    return _regexps.ukPostalCode.test(obj);
}

module.exports = exports["default"];