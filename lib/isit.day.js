"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isDay;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitDate = require("isit.date");

var _isitDate2 = _interopRequireDefault(_isitDate);

var _dateNames = require("dateNames");

function isDay(obj, dayString) {
    return (0, _isitDate2["default"])(obj) && isString(dayString) && dayString.toLowerCase() === _dateNames.days[obj.getDay()];
}

module.exports = exports["default"];