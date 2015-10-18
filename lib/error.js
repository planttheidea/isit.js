"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitError;

var _utils = require("./utils");

function isitError(obj) {
    return _utils.toString.call(obj) === "[object Error]";
}

module.exports = exports["default"];