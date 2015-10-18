"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isTrident;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

function isTrident() {
    return (0, _isitBrowser2["default"])() && /trident/i.test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];