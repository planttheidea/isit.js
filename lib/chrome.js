// is the browser used chrome?

"use strict";

exports.__esModule = true;
exports["default"] = isitChrome;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _navigator = require("./_navigator");

var _navigator2 = _interopRequireDefault(_navigator);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

function isitChrome() {
    return _browser2["default"]() && /chrome|chromium/i.test(_navigator2["default"].userAgent) && /google inc/.test(_navigator2["default"].vendor);
}

module.exports = exports["default"];