"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isChrome;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isBrowser = require("is.browser");

var _isBrowser2 = _interopRequireDefault(_isBrowser);

function isChrome() {
    return (0, _isBrowser2["default"])() && /chrome|chromium/i.test(_utils.navigatorInfo.userAgent) && /google inc/.test(_utils.navigatorInfo.vendor);
}

module.exports = exports["default"];