"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isEmail;

var _regexps = require("regexps");

function isEmail(obj) {
    return _regexps.email.test(obj);
}

module.exports = exports["default"];