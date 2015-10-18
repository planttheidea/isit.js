// is the device used an android phone?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAndroidPhone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _navigator = require("./_navigator");

var _navigator2 = _interopRequireDefault(_navigator);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

var _browser3 = _interopRequireDefault(_browser);

function isitAndroidPhone() {
    return (0, _browser2["default"])() && (0, _browser3["default"])() && /mobile/i.test(_navigator2["default"].userAgent);
}

module.exports = exports["default"];