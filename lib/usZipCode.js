"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isUsZipCode;

var _regexps = require("regexps");

function _isUsZipCode(obj) {
    return _regexps.usZipCode.test(obj);
}

module.exports = exports["default"];