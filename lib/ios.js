// is the device used running on iOS?

"use strict";

exports.__esModule = true;
exports["default"] = isitIOS;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _ipad = require("./ipad");

var _ipad2 = _interopRequireDefault(_ipad);

var _iphone = require("./iphone");

var _iphone2 = _interopRequireDefault(_iphone);

var _ipod = require("./ipod");

var _ipod2 = _interopRequireDefault(_ipod);

function isitIOS() {
    return _ipad2["default"]() || _iphone2["default"]() || _ipod2["default"]();
}

module.exports = exports["default"];