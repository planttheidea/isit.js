"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isOnline;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

function isOnline() {
    return (0, _isitBrowser2["default"])() && navigator.onLine;
}

module.exports = exports["default"];