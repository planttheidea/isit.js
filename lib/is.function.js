"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isFunction;

var _utils = require("./utils");

function isFunction(obj) {
    return _utils.toString.call(obj) === "[object Function]" || typeof obj === "function";
}

module.exports = exports["default"];