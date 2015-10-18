// is obj a valid date string?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitISODateString;

var _regexps = require("./_regexps");

function isitISODateString(obj) {
    return _regexps.isoDateString.test(obj);
}

module.exports = exports["default"];