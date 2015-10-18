"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isEndWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitString = require("isit.string");

var _isitString2 = _interopRequireDefault(_isitString);

function isEndWith(obj, endStr) {
    return (0, _isitString2["default"])(obj) && str.indexOf(endStr) === str.length - endStr.length;
}

module.exports = exports["default"];