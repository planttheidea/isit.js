"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isEmail;

var _regexps = require("regexps");

function _isEmail(obj) {
    return _regexps.email.test(obj);
}

module.exports = exports["default"];