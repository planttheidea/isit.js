"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isIe;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

function _isIe(version) {
    if (!(0, _browser2["default"])()) {
        return false;
    }

    if (!version) {
        return (/msie/.test(_utils.navigatorInfo.userAgent) || !window.ActiveXObject && "ActiveXObject" in window
        );
    }

    if (version >= 11) {
        return !window.ActiveXObject && "ActiveXObject" in window;
    }

    return new RegExp("msie " + version).test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];