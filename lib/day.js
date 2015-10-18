"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isDay;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _dateNames = require("dateNames");

var _date = require("date");

var _date2 = _interopRequireDefault(_date);

var _string = require("string");

var _string2 = _interopRequireDefault(_string);

function _isDay(obj, dayString) {
    return (0, _date2["default"])(obj) && (0, _string2["default"])(dayString) && dayString.toLowerCase() === _dateNames.days[obj.getDay()];
}

module.exports = exports["default"];