"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isString;

var _utils = require("utils");

function isString(obj) {
    return _utils.toString.call(obj) === "[object String]";
}

module.exports = exports["default"];