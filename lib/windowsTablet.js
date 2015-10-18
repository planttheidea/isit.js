"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitWindowsTablet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _utils = require("utils");

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

var _windows = require("windows");

var _windows2 = _interopRequireDefault(_windows);

var _windowsPhone = require("windowsPhone");

var _windowsPhone2 = _interopRequireDefault(_windowsPhone);

function isitWindowsTablet() {
    return (0, _browser2["default"])() && (0, _windows2["default"])() && (0, _helpers.not)(_windowsPhone2["default"])() && /touch/i.test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];