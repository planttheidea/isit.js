"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isWithin;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isitNumber = require("isit.number");

var _isitNumber2 = _interopRequireDefault(_isitNumber);

function isWithin(obj, min, max) {
    return (0, _helpers.all)((0, _isitNumber2["default"])(obj, min, max)) && obj > min && obj < max;
}

module.exports = exports["default"];