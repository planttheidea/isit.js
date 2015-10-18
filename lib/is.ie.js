"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isIe;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isBrowser = require("is.browser");

var _isBrowser2 = _interopRequireDefault(_isBrowser);

function isIe(version) {
    if (!(0, _isBrowser2["default"])()) {
        return false;
    }

    if (!version) {
        return (/msie/.test(_utils.navigatorInfo.userAgent) || "ActiveXObject" in window
        );
    }

    if (version >= 11) {
        return "ActiveXObject" in window;
    }

    return new RegExp('msie ' + version).test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];