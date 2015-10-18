"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isDesktop;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

var _isitMobile = require("isit.mobile");

var _isitMobile2 = _interopRequireDefault(_isitMobile);

var _isitTablet = require("isit.tablet");

var _isitTablet2 = _interopRequireDefault(_isitTablet);

function isDesktop() {
    return (0, _isitBrowser2["default"])() && !(0, _isitMobile2["default"])() && !(0, _isitTablet2["default"])();
}

module.exports = exports["default"];