"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isIpad;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

function isIpad() {
    return (0, _isitBrowser2["default"])() && /ipad/i.test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];