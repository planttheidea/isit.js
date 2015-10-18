"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isTimeString;

var _regexps = require("regexps");

function isTimeString(obj) {
    return _regexps.timeString.test(obj);
}

module.exports = exports["default"];