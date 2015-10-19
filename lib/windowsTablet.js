// is the device used a tablet running on Windows?

"use strict";

exports.__esModule = true;
exports["default"] = isitWindowsTablet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _navigator = require("./_navigator");

var _navigator2 = _interopRequireDefault(_navigator);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

var _windows = require("./windows");

var _windows2 = _interopRequireDefault(_windows);

var _windowsPhone = require("./windowsPhone");

var _windowsPhone2 = _interopRequireDefault(_windowsPhone);

function isitWindowsTablet() {
    return _browser2["default"]() && _windows2["default"]() && _interfaces.not(_windowsPhone2["default"])() && /touch/i.test(_navigator2["default"].userAgent);
}

module.exports = exports["default"];