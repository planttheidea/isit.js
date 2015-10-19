// not version of sorted.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotSorted;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _sorted = require("./sorted");

var _sorted2 = _interopRequireDefault(_sorted);

function isitNotSorted() {
    return (0, _interfaces.not)(_sorted2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];