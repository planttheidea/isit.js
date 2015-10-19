// any version of lowercase.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyLowercase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _lowercase = require("./lowercase");

var _lowercase2 = _interopRequireDefault(_lowercase);

function isitAnyLowercase() {
    return (0, _interfaces.any)(_lowercase2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];