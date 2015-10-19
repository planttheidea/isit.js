// does the browser used render via WebKit?

"use strict";

exports.__esModule = true;
exports["default"] = isitWebkit;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _navigator = require("./_navigator");

var _navigator2 = _interopRequireDefault(_navigator);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

function isitWebkit() {
    return _browser2["default"]() && /applewebkit/i.test(_navigator2["default"].userAgent);
}

module.exports = exports["default"];