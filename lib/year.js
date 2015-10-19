// is obj a date and year a number, and is obj in year year?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

var _undefined = require("./undefined");

var _undefined2 = _interopRequireDefault(_undefined);

function isitYear(obj, yearNumber) {
    if ((0, _undefined2["default"])(yearNumber)) {
        yearNumber = new Date().getFullYear();
    }

    if ((0, _string2["default"])(yearNumber)) {
        yearNumber = parseInt(yearNumber, 10);
    }

    return (0, _date2["default"])(obj) && (0, _number2["default"])(yearNumber) && yearNumber === obj.getFullYear();
}

module.exports = exports["default"];