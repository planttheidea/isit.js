"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isHexColor;

var _regexps = require("regexps");

function _isHexColor(obj) {
    return _regexps.hexColor.test(obj);
}

module.exports = exports["default"];