"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isStartWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitString = require("isit.string");

var _isitString2 = _interopRequireDefault(_isitString);

function isStartWith(obj, startStr) {
    return (0, _isitString2["default"])(obj) && str.indexOf(startStr) === 0;
}

module.exports = exports["default"];