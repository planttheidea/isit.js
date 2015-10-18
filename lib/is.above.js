"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isAbove;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isNumber = require("is.number");

var _isNumber2 = _interopRequireDefault(_isNumber);

function isAbove(obj, min) {
    return (0, _helpers.all)((0, _isNumber2["default"])(obj, min)) && obj > min;
}

module.exports = exports["default"];