// is the device used a mobile phone running on Windows?

"use strict";

exports.__esModule = true;
exports["default"] = isitWindowsPhone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _navigator = require("./_navigator");

var _navigator2 = _interopRequireDefault(_navigator);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

var _windows = require("./windows");

var _windows2 = _interopRequireDefault(_windows);

function isitWindowsPhone() {
    return _browser2["default"]() && _windows2["default"]() && /phone/i.test(_navigator2["default"].userAgent);
}

module.exports = exports["default"];