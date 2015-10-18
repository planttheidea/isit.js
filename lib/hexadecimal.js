// is obj a hexadecimal value?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitHexadecimal;

var _regexps = require("regexps");

function isitHexadecimal(obj) {
    return _regexps.hexadecimal.test(obj);
}

module.exports = exports["default"];