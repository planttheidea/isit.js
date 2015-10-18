"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isAndroid;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

function _isAndroid() {
    return (0, _browser2["default"])() && /android/i.test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];