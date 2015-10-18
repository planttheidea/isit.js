"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isWindowsPhone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

var _windows = require("windows");

var _windows2 = _interopRequireDefault(_windows);

function _isWindowsPhone() {
    return (0, _browser2["default"])() && (0, _windows2["default"])() && /phone/i.test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];