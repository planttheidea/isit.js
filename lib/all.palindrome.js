// all version of palindrome.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllPalindrome;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _palindrome = require("./palindrome");

var _palindrome2 = _interopRequireDefault(_palindrome);

function isitAllPalindrome() {
    return (0, _interfaces.all)(_palindrome2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];