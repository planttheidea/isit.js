"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isJson;

var _utils = require("./utils");

function isJson(obj) {
    return _utils.toString.call(obj) === "[object Object]";
}

module.exports = exports["default"];