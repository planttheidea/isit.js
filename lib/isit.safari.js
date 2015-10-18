"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isSafari;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

function isSafari() {
    return (0, _isitBrowser2["default"])() && /safari/i.test(_utils.navigatorInfo.userAgent) && /apple computer/.test(_utils.navigatorInfo.vendor);
}

module.exports = exports["default"];