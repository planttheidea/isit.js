"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitLinux;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

function isitLinux() {
    return (0, _browser2["default"])() && /linux|x11/i.test(_utils.navigatorInfo.appVersion);
}

module.exports = exports["default"];