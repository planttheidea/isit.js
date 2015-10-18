"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isIos;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitIpad = require("isit.ipad");

var _isitIpad2 = _interopRequireDefault(_isitIpad);

var _isitIphone = require("isit.iphone");

var _isitIphone2 = _interopRequireDefault(_isitIphone);

var _isitIpod = require("isit.ipod");

var _isitIpod2 = _interopRequireDefault(_isitIpod);

function isIos() {
    return (0, _isitIpad2["default"])() || (0, _isitIphone2["default"])() || (0, _isitIpod2["default"])();
}

module.exports = exports["default"];