// is obj a valid date string?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitDateString;

var _regexps = require("regexps");

function isitDateString(obj) {
    return _regexps.dateString.test(obj);
}

module.exports = exports["default"];