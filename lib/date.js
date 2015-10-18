// is obj a date value?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitDate;

var _utils = require("./_utils");

function isitDate(obj) {
    return _utils.toString.call(obj) === "[object Date]";
}

module.exports = exports["default"];