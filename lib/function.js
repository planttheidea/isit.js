// is obj a function?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitFunction;

var _utils = require("./utils");

function isitFunction(obj) {
    return _utils.toString.call(obj) === "[object Function]" || typeof obj === "function";
}

module.exports = exports["default"];