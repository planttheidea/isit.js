"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isTimeString;

var _regexps = require("regexps");

function _isTimeString(obj) {
    return _regexps.timeString.test(obj);
}

module.exports = exports["default"];