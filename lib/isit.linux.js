"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isLinux;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

function isLinux() {
    return (0, _isitBrowser2["default"])() && /linux|x11/i.test(_utils.navigatorInfo.appVersion);
}

module.exports = exports["default"];