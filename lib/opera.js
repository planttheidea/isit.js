// is the browser used Opera?

"use strict";

exports.__esModule = true;
exports["default"] = isitOpera;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _navigator = require("./_navigator");

var _navigator2 = _interopRequireDefault(_navigator);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

function isitOpera() {
    return _browser2["default"]() && /^opera/i.test(_navigator2["default"].userAgent) || /OPR/.test(_navigator2["default"].userAgent);
}

module.exports = exports["default"];