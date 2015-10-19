// not version of under.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotUnder;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _under = require("./under");

var _under2 = _interopRequireDefault(_under);

function isitNotUnder() {
    return (0, _interfaces.not)(_under2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];