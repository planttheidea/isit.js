// is the browser used Internet Explorer?
// NOTE: if version is passed, will validate if IE and equal to that version

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitIe;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _navigator = require("./_navigator");

var _navigator2 = _interopRequireDefault(_navigator);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

function isitIe(version) {
    if ((0, _interfaces.not)(_browser2["default"])()) {
        return false;
    }

    if (!version) {
        return (/msie/.test(_navigator2["default"].userAgent) || !window.ActiveXObject && "ActiveXObject" in window
        );
    }

    if (version >= 11) {
        return !window.ActiveXObject && "ActiveXObject" in window;
    }

    return new RegExp("msie " + version).test(_navigator2["default"].userAgent);
}

module.exports = exports["default"];