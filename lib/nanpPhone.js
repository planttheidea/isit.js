"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isNanpPhone;

var _regexps = require("regexps");

function _isNanpPhone(obj) {
    return _regexps.nanpPhone.test(obj);
}

module.exports = exports["default"];