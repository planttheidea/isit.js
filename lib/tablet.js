"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitTablet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _androidTablet = require("androidTablet");

var _androidTablet2 = _interopRequireDefault(_androidTablet);

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

var _ipad = require("ipad");

var _ipad2 = _interopRequireDefault(_ipad);

var _windowsTablet = require("windowsTablet");

var _windowsTablet2 = _interopRequireDefault(_windowsTablet);

function isitTablet() {
    return (0, _browser2["default"])() && ((0, _ipad2["default"])() || (0, _androidTablet2["default"])() || (0, _windowsTablet2["default"])());
}

module.exports = exports["default"];