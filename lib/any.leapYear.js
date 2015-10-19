// any version of leapYear.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyLeapYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _leapYear = require("./leapYear");

var _leapYear2 = _interopRequireDefault(_leapYear);

function isitAnyLeapYear() {
    return _interfaces.any(_leapYear2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];