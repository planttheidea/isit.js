"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isPalindrome;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitString = require("isit.string");

var _isitString2 = _interopRequireDefault(_isitString);

function isPalindrome(obj) {
    return (0, _isitString2["default"])(obj) && str === str.split("").reverse().join("");
}

module.exports = exports["default"];