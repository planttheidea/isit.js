"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isJSON;

var _utils = require("./utils");

function _isJSON(obj) {
    return _utils.toString.call(obj) === "[object Object]";
}

module.exports = exports["default"];