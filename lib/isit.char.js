"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isChar;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitString = require("isit.string");

var _isitString2 = _interopRequireDefault(_isitString);

function isChar(obj) {
    return (0, _isitString2["default"])(obj) && obj.length === 1;
}

module.exports = exports["default"];