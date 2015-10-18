// is obj an array value?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitArray;

var _utils = require("./utils");

function isitArray(obj) {
    return _utils.toString.call(obj) === "[object Array]";
}

;
module.exports = exports["default"];