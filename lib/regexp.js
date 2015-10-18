"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitRegExp;

var _utils = require("utils");

function isitRegExp(obj) {
    return _utils.toString.call(obj) === "[object RegExp]";
}

module.exports = exports["default"];