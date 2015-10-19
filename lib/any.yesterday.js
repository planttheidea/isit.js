// any version of yesterday.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyYesterday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _yesterday = require("./yesterday");

var _yesterday2 = _interopRequireDefault(_yesterday);

function isitAnyYesterday() {
    return (0, _interfaces.any)(_yesterday2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];