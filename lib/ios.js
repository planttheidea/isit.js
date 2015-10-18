"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitIos;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _ipad = require("ipad");

var _ipad2 = _interopRequireDefault(_ipad);

var _iphone = require("iphone");

var _iphone2 = _interopRequireDefault(_iphone);

var _ipod = require("ipod");

var _ipod2 = _interopRequireDefault(_ipod);

function isitIos() {
    return (0, _ipad2["default"])() || (0, _iphone2["default"])() || (0, _ipod2["default"])();
}

module.exports = exports["default"];