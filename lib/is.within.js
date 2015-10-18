"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isWithin;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isNumber = require("is.number");

var _isNumber2 = _interopRequireDefault(_isNumber);

function isWithin(obj, min, max) {
    return (0, _helpers.all)((0, _isNumber2["default"])(obj, min, max)) && obj > min && obj < max;
}

module.exports = exports["default"];