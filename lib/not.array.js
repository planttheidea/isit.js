// not version of array.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotArray;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _array = require("./array");

var _array2 = _interopRequireDefault(_array);

function isitNotArray() {
    return (0, _interfaces.not)(_array2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];