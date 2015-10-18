"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isEppPhone;

var _regexps = require("regexps");

function isEppPhone(obj) {
    return _regexps.eppPhone.test(obj);
}

module.exports = exports["default"];