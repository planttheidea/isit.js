// all version of today.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllToday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _today = require("./today");

var _today2 = _interopRequireDefault(_today);

function isitAllToday() {
    return (0, _interfaces.all)(_today2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];