// is obj a valid US Zip Code?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitUSZipCode;

var _regexps = require("./_regexps");

function isitUSZipCode(obj) {
    return _regexps.usZipCode.test(obj);
}

module.exports = exports["default"];