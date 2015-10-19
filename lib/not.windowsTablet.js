// not version of windowsTablet.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotWindowsTablet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _windowsTablet = require("./windowsTablet");

var _windowsTablet2 = _interopRequireDefault(_windowsTablet);

function isitNotWindowsTablet() {
    return (0, _interfaces.not)(_windowsTablet2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];