"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isHexadecimal;

var _regexps = require("regexps");

function _isHexadecimal(obj) {
    return _regexps.hexadecimal.test(obj);
}

module.exports = exports["default"];