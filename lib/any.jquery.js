// any version of jquery.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyJquery;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _jquery = require("./jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function isitAnyJquery() {
    return _interfaces.any(_jquery2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];