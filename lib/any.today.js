// any version of today.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyToday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _today = require("./today");

var _today2 = _interopRequireDefault(_today);

function isitAnyToday() {
    return (0, _interfaces.any)(_today2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];