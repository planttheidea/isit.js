"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isDateString;

var _regexps = require("regexps");

function isDateString(obj) {
    return _regexps.dateString.test(obj);
}

module.exports = exports["default"];