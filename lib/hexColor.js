"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitHexColor;

var _regexps = require("regexps");

function isitHexColor(obj) {
    return _regexps.hexColor.test(obj);
}

module.exports = exports["default"];