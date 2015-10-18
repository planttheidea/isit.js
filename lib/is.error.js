"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isError;

var _utils = require("./utils");

function isError(obj) {
    return _utils.toString.call(obj) === "[object Error]";
}

module.exports = exports["default"];