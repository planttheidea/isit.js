"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isBoolean;

var _utils = require("./utils");

function _isBoolean(obj) {
    return obj === true || obj === false || _utils.toString.call(obj) === "[object Boolean]";
}

module.exports = exports["default"];