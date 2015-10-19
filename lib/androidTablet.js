// is the device used an android tablet?

"use strict";

exports.__esModule = true;
exports["default"] = isitAndroidTablet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _navigator = require("./_navigator");

var _navigator2 = _interopRequireDefault(_navigator);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

var _browser3 = _interopRequireDefault(_browser);

function isitAndroidTablet() {
    return _browser2["default"]() && _browser3["default"]() && !/mobile/i.test(_navigator2["default"].userAgent);
}

module.exports = exports["default"];