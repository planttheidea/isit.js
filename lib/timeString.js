// is obj a valid time string?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitTimeString;

var _regexps = require("regexps");

function isitTimeString(obj) {
    return _regexps.timeString.test(obj);
}

module.exports = exports["default"];