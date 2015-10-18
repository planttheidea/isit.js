// is obj a valid US Zip Code?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitUsZipCode;

var _regexps = require("./_regexps");

function isitUsZipCode(obj) {
    return _regexps.usZipCode.test(obj);
}

module.exports = exports["default"];