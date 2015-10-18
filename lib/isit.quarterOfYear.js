"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isQuarterOfYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitDate = require("isit.date");

var _isitDate2 = _interopRequireDefault(_isitDate);

var _isitNumber = require("isit.number");

var _isitNumber2 = _interopRequireDefault(_isitNumber);

function isQuarterOfYear(obj, quarterNumber) {
    return (0, _isitDate2["default"])(obj) && (0, _isitNumber2["default"])(quarterNumber) && quarterNumber === Math.floor((obj.getMonth() + 3) / 3);
}

module.exports = exports["default"];