"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isDate;

var _utils = require("./utils");

function _isDate(obj) {
    return _utils.toString.call(obj) === "[object Date]";
}

module.exports = exports["default"];