// not version of number.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotNumber;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitNotNumber() {
    return (0, _interfaces.not)(_number2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];