"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isWindowsPhone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

var _isitWindows = require("isit.windows");

var _isitWindows2 = _interopRequireDefault(_isitWindows);

function isWindowsPhone() {
    return (0, _isitBrowser2["default"])() && (0, _isitWindows2["default"])() && /phone/i.test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];