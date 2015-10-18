"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isBlink;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

function isBlink() {
    return (0, _isitBrowser2["default"])() && /chrome/i.test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];