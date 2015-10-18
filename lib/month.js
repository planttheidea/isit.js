"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isMonth;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _dateNames = require("dateNames");

var _date = require("date");

var _date2 = _interopRequireDefault(_date);

var _string = require("string");

var _string2 = _interopRequireDefault(_string);

function _isMonth(obj, monthString) {
    return (0, _date2["default"])(obj) && (0, _string2["default"])(monthString) && monthString.toLowerCase() === _dateNames.months[obj.getMonth()];
}

module.exports = exports["default"];