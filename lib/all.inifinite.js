// all version of infinite.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllInfinite;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _infinite = require("./infinite");

var _infinite2 = _interopRequireDefault(_infinite);

function isitAllInfinite() {
    return _interfaces.all(_infinite2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];