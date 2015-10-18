"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isNumber;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _utils = require("utils");

var _isNan = require("is.nan");

var _isNan2 = _interopRequireDefault(_isNan);

function isNumber(obj) {
    return (0, _helpers.not)((0, _isNan2["default"])(obj)) && _utils.toString.call(obj) === "[object Number]";
}

module.exports = exports["default"];