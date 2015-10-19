// all version of date.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllDate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

function isitAllDate() {
    return _interfaces.all(_date2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];