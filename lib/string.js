// is obj a string value?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitString;

var _utils = require("./_utils");

function isitString(obj) {
    return _utils.toString.call(obj) === "[object String]";
}

module.exports = exports["default"];