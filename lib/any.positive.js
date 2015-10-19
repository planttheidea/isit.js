// any version of positive.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyPositive;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _positive = require("./positive");

var _positive2 = _interopRequireDefault(_positive);

function isitAnyPositive() {
    return (0, _interfaces.any)(_positive2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];