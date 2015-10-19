// all version of integer.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllInteger;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _integer = require("./integer");

var _integer2 = _interopRequireDefault(_integer);

function isitAllInteger() {
    return (0, _interfaces.all)(_integer2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];