"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isPalindrome;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isString = require("is.string");

var _isString2 = _interopRequireDefault(_isString);

function isPalindrome(obj) {
    return (0, _isString2["default"])(obj) && str === str.split("").reverse().join("");
}

module.exports = exports["default"];