// is the device used a tablet?

"use strict";

exports.__esModule = true;
exports["default"] = isitTablet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _androidTablet = require("./androidTablet");

var _androidTablet2 = _interopRequireDefault(_androidTablet);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

var _ipad = require("./ipad");

var _ipad2 = _interopRequireDefault(_ipad);

var _windowsTablet = require("./windowsTablet");

var _windowsTablet2 = _interopRequireDefault(_windowsTablet);

function isitTablet() {
    return _browser2["default"]() && (_ipad2["default"]() || _androidTablet2["default"]() || _windowsTablet2["default"]());
}

module.exports = exports["default"];