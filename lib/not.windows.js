// not version of windows.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotWindows;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _windows = require("./windows");

var _windows2 = _interopRequireDefault(_windows);

function isitNotWindows() {
    return (0, _interfaces.not)(_windows2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];