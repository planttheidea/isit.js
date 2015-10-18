"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isUsZipCode;

var _regexps = require("regexps");

function isUsZipCode(obj) {
    return _regexps.usZipCode.test(obj);
}

module.exports = exports["default"];