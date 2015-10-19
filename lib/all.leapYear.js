// all version of leapYear.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllLeapYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _leapYear = require("./leapYear");

var _leapYear2 = _interopRequireDefault(_leapYear);

function isitAllLeapYear() {
    return (0, _interfaces.all)(_leapYear2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];