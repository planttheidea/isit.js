"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isHexadecimal;

var _regexps = require("regexps");

function isHexadecimal(obj) {
    return _regexps.hexadecimal.test(obj);
}

module.exports = exports["default"];