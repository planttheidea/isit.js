// is the device used a mobile phone?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitMobile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _androidPhone = require("androidPhone");

var _androidPhone2 = _interopRequireDefault(_androidPhone);

var _blackberry = require("blackberry");

var _blackberry2 = _interopRequireDefault(_blackberry);

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

var _iphone = require("iphone");

var _iphone2 = _interopRequireDefault(_iphone);

var _ipod = require("ipod");

var _ipod2 = _interopRequireDefault(_ipod);

var _windowsPhone = require("windowsPhone");

var _windowsPhone2 = _interopRequireDefault(_windowsPhone);

function isitMobile() {
    return (0, _browser2["default"])() && ((0, _iphone2["default"])() || (0, _androidPhone2["default"])() || (0, _ipod2["default"])() || (0, _windowsPhone2["default"])() || (0, _blackberry2["default"])());
}

module.exports = exports["default"];