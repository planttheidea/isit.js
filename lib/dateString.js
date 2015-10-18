"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isDateString;

var _regexps = require("regexps");

function _isDateString(obj) {
    return _regexps.dateString.test(obj);
}

module.exports = exports["default"];