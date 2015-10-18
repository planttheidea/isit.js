"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isChar;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isString = require("is.string");

var _isString2 = _interopRequireDefault(_isString);

function isChar(obj) {
    return (0, _isString2["default"])(obj) && obj.length === 1;
}

module.exports = exports["default"];