"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isTouchDevice;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

function isTouchDevice() {
    return (0, _isitBrowser2["default"])() && "ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch;
}

module.exports = exports["default"];