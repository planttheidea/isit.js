// is obj a string and a palindrome?

"use strict";

exports.__esModule = true;
exports["default"] = isitPalindrome;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitPalindrome(obj) {
    return _string2["default"](obj) && obj === obj.split("").reverse().join("");
}

module.exports = exports["default"];