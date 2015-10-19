// not version of day.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotDay;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _day = require("./day");

var _day2 = _interopRequireDefault(_day);

function isitNotDay() {
    return _interfaces.not(_day2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];