"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isEndWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isString = require("is.string");

var _isString2 = _interopRequireDefault(_isString);

function isEndWith(obj, endStr) {
    return (0, _isString2["default"])(obj) && str.indexOf(endStr) === str.length - endStr.length;
}

module.exports = exports["default"];