// is number obj greater than the number min?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAbove;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitAbove(obj, min) {
    return (0, _interfaces.all)(_number2["default"])(obj, min) && obj > min;
}

module.exports = exports["default"];