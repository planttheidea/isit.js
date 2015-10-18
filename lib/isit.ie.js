"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isIe;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

function isIe(version) {
    if (!(0, _isitBrowser2["default"])()) {
        return false;
    }

    if (!version) {
        return (/msie/.test(_utils.navigatorInfo.userAgent) || !window.ActiveXObject && "ActiveXObject" in window
        );
    }

    if (version >= 11) {
        return !window.ActiveXObject && "ActiveXObject" in window;
    }

    return new RegExp('msie ' + version).test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];