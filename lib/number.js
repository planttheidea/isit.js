"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNumber;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _utils = require("utils");

var _nanJs = require("nan.js");

var _nanJs2 = _interopRequireDefault(_nanJs);

// it doesn't like just "nan"

function isitNumber(obj) {
    return (0, _helpers.not)((0, _nanJs2["default"])(obj)) && _utils.toString.call(obj) === "[object Number]";
}

module.exports = exports["default"];