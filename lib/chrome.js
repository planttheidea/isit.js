"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isChrome;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

function _isChrome() {
    return (0, _browser2["default"])() && /chrome|chromium/i.test(_utils.navigatorInfo.userAgent) && /google inc/.test(_utils.navigatorInfo.vendor);
}

module.exports = exports["default"];