// not version of today.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotToday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _today = require("./today");

var _today2 = _interopRequireDefault(_today);

function isitNotToday() {
    return (0, _interfaces.not)(_today2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];