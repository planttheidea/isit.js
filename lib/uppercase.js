"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isUppercase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _string = require("string");

var _string2 = _interopRequireDefault(_string);

function _isUppercase(obj) {
    return (0, _string2["default"])(obj) && obj === obj.toUpperCase();
}

module.exports = exports["default"];