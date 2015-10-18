"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isHexColor;

var _regexps = require("regexps");

function isHexColor(obj) {
    return _regexps.hexColor.test(obj);
}

module.exports = exports["default"];