"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isString;

var _utils = require("utils");

function _isString(obj) {
    return _utils.toString.call(obj) === "[object String]";
}

module.exports = exports["default"];