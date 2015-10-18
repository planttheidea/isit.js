"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isOpera;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

function isOpera() {
    return (0, _isitBrowser2["default"])() && /^opera/i.test(_utils.navigatorInfo.userAgent) || /OPR/.test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];