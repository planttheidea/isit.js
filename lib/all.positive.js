// all version of positive.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllPositive;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _positive = require("./positive");

var _positive2 = _interopRequireDefault(_positive);

function isitAllPositive() {
    return (0, _interfaces.all)(_positive2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];