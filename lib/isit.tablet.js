"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isTablet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitAndroidTablet = require("isit.androidTablet");

var _isitAndroidTablet2 = _interopRequireDefault(_isitAndroidTablet);

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

var _isitIpad = require("isit.ipad");

var _isitIpad2 = _interopRequireDefault(_isitIpad);

var _isitWindowsTablet = require("isit.windowsTablet");

var _isitWindowsTablet2 = _interopRequireDefault(_isitWindowsTablet);

function isTablet() {
    return (0, _isitBrowser2["default"])() && ((0, _isitIpad2["default"])() || (0, _isitAndroidTablet2["default"])() || (0, _isitWindowsTablet2["default"])());
}

module.exports = exports["default"];