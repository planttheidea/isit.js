"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isSocialSecurityNumber;

var _regexps = require("regexps");

function _isSocialSecurityNumber(obj) {
    return _regexps.socialSecurityNumber.test(obj);
}

module.exports = exports["default"];