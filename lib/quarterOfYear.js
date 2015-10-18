"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitQuarterOfYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _date = require("date");

var _date2 = _interopRequireDefault(_date);

var _number = require("number");

var _number2 = _interopRequireDefault(_number);

function isitQuarterOfYear(obj, quarterNumber) {
    return (0, _date2["default"])(obj) && (0, _number2["default"])(quarterNumber) && quarterNumber === Math.floor((obj.getMonth() + 3) / 3);
}

module.exports = exports["default"];