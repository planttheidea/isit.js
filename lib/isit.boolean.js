"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isBoolean;

var _utils = require("./utils");

function isBoolean(obj) {
    return obj === true || obj === false || _utils.toString.call(obj) === "[object Boolean]";
}

module.exports = exports["default"];