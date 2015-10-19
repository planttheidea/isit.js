// is the browser used Safari?

"use strict";

exports.__esModule = true;
exports["default"] = isitSafari;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _navigator = require("./_navigator");

var _navigator2 = _interopRequireDefault(_navigator);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

function isitSafari() {
    return _browser2["default"]() && /safari/i.test(_navigator2["default"].userAgent) && /apple computer/.test(_navigator2["default"].vendor);
}

module.exports = exports["default"];