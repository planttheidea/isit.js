"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitPalindrome;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _string = require("string");

var _string2 = _interopRequireDefault(_string);

function isitPalindrome(obj) {
    return (0, _string2["default"])(obj) && obj === obj.split("").reverse().join("");
}

module.exports = exports["default"];