"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isMac;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

function _isMac() {
    return (0, _browser2["default"])() && /mac/i.test(_utils.navigatorInfo.appVersion);
}

module.exports = exports["default"];