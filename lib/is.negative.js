"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isNegative;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isNumber = require("is.number");

var _isNumber2 = _interopRequireDefault(_isNumber);

function isNegative(obj) {
    return (0, _isNumber2["default"])(obj) && obj < 0;
}

module.exports = exports["default"];