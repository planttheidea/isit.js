// not version of webkit.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotWebkit;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _webkit = require("./webkit");

var _webkit2 = _interopRequireDefault(_webkit);

function isitNotWebkit() {
    return (0, _interfaces.not)(_webkit2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];