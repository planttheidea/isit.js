// is obj a boolean value?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitBoolean;

var _utils = require("./_utils");

function isitBoolean(obj) {
    return obj === true || obj === false || _utils.toString.call(obj) === "[object Boolean]";
}

module.exports = exports["default"];