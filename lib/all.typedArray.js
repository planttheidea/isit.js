// all version of typedArray.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllUndefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _typedArray = require("./typedArray");

var _typedArray2 = _interopRequireDefault(_typedArray);

function isitAllUndefined() {
    return (0, _interfaces.all)(_typedArray2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];