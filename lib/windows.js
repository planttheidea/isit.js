"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isWindows;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

function _isWindows() {
    return (0, _browser2["default"])() && /win/i.test(_utils.navigatorInfo.appVersion);
}

module.exports = exports["default"];