// is the device used running on Linux?

"use strict";

exports.__esModule = true;
exports["default"] = isitLinux;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _navigator = require("./_navigator");

var _navigator2 = _interopRequireDefault(_navigator);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

function isitLinux() {
    return _browser2["default"]() && /linux|x11/i.test(_navigator2["default"].appVersion);
}

module.exports = exports["default"];