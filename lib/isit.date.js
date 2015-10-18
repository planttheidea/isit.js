"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isDate;

var _utils = require("./utils");

function isDate(obj) {
    return _utils.toString.call(obj) === "[object Date]";
}

module.exports = exports["default"];