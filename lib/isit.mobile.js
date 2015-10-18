"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isMobile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitAndroidPhone = require("isit.androidPhone");

var _isitAndroidPhone2 = _interopRequireDefault(_isitAndroidPhone);

var _isitBlackberry = require("isit.blackberry");

var _isitBlackberry2 = _interopRequireDefault(_isitBlackberry);

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

var _isitIphone = require("isit.iphone");

var _isitIphone2 = _interopRequireDefault(_isitIphone);

var _isitIpod = require("isit.ipod");

var _isitIpod2 = _interopRequireDefault(_isitIpod);

var _isitWindowsPhone = require("isit.windowsPhone");

var _isitWindowsPhone2 = _interopRequireDefault(_isitWindowsPhone);

function isMobile() {
    return (0, _isitBrowser2["default"])() && ((0, _isitIphone2["default"])() || (0, _isitAndroidPhone2["default"])() || (0, _isitIpod2["default"])() || (0, _isitWindowsPhone2["default"])() || (0, _isitBlackberry2["default"])());
}

module.exports = exports["default"];