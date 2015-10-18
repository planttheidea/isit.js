"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isError;

var _utils = require("./utils");

function _isError(obj) {
    return _utils.toString.call(obj) === "[object Error]";
}

module.exports = exports["default"];