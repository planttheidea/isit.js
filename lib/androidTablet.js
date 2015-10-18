"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isAndroidTablet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

var _browser3 = _interopRequireDefault(_browser);

function _isAndroidTablet() {
    return (0, _browser2["default"])() && (0, _browser3["default"])() && !/mobile/i.test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];