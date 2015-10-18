"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isStartWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isString = require("is.string");

var _isString2 = _interopRequireDefault(_isString);

function isStartWith(obj, startStr) {
    return (0, _isString2["default"])(obj) && str.indexOf(startStr) === 0;
}

module.exports = exports["default"];