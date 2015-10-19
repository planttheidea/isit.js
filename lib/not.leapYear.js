// not version of leapYear.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotLeapYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _leapYear = require("./leapYear");

var _leapYear2 = _interopRequireDefault(_leapYear);

function isitNotLeapYear() {
    return (0, _interfaces.not)(_leapYear2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];