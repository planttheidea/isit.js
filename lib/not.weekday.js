// not version of weekday.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotWeekday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _weekday = require("./weekday");

var _weekday2 = _interopRequireDefault(_weekday);

function isitNotWeekday() {
    return (0, _interfaces.not)(_weekday2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];