"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isRegExp;

var _utils = require("utils");

function isRegExp(obj) {
    return _utils.toString.call(obj) === "[object RegExp]";
}

module.exports = exports["default"];