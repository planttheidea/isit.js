"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isFunction;

var _utils = require("./utils");

function _isFunction(obj) {
    return _utils.toString.call(obj) === "[object Function]" || typeof obj === "function";
}

module.exports = exports["default"];