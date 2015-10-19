// any version of date.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyDate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

function isitAnyDate() {
    return (0, _interfaces.any)(_date2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];