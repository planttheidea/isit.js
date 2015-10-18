// is the device used a blackberry phone?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitBlackberry;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _navigator = require("./_navigator");

var _navigator2 = _interopRequireDefault(_navigator);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

function isitBlackberry() {
    return (0, _browser2["default"])() && /blackberry/i.test(_navigator2["default"].userAgent) || /BB10/i.test(_navigator2["default"].userAgent);
}

module.exports = exports["default"];