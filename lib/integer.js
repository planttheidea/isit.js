"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isInteger;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _number = require("number");

var _number2 = _interopRequireDefault(_number);

function _isInteger(obj) {
    return (0, _number2["default"])(obj) && obj % 1 === 0;
}

module.exports = exports["default"];