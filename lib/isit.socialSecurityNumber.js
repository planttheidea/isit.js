"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isSocialSecurityNumber;

var _regexps = require("regexps");

function isSocialSecurityNumber(obj) {
    return _regexps.socialSecurityNumber.test(obj);
}

module.exports = exports["default"];