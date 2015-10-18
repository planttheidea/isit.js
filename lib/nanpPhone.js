"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNanpPhone;

var _regexps = require("./regexps");

function isitNanpPhone(obj) {
    return _regexps.nanpPhone.test(obj);
}

module.exports = exports["default"];