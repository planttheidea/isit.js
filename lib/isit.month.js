"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isMonth;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitDate = require("isit.date");

var _isitDate2 = _interopRequireDefault(_isitDate);

var _dateNames = require("dateNames");

function isMonth(obj, monthString) {
    return (0, _isitDate2["default"])(obj) && isString(monthString) && monthString.toLowerCase() === _dateNames.months[obj.getMonth()];
}

module.exports = exports["default"];