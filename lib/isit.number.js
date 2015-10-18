"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isNumber;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _utils = require("utils");

var _isitNan = require("isit.nan");

var _isitNan2 = _interopRequireDefault(_isitNan);

function isNumber(obj) {
    return (0, _helpers.not)((0, _isitNan2["default"])(obj)) && _utils.toString.call(obj) === "[object Number]";
}

module.exports = exports["default"];