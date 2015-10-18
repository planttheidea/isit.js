"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isOdd;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isNumber = require("is.number");

var _isNumber2 = _interopRequireDefault(_isNumber);

function isOdd(obj) {
    return (0, _isNumber2["default"])(obj) && obj % 2 !== 0;
}

module.exports = exports["default"];