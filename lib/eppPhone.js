"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isEppPhone;

var _regexps = require("regexps");

function _isEppPhone(obj) {
    return _regexps.eppPhone.test(obj);
}

module.exports = exports["default"];