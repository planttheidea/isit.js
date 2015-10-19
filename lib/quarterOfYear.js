// is obj a date and is it in quarter quarterNumber?

"use strict";

exports.__esModule = true;
exports["default"] = isitQuarterOfYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitQuarterOfYear(obj, quarterNumber) {
    return _date2["default"](obj) && _number2["default"](quarterNumber) && quarterNumber === Math.floor((obj.getMonth() + 3) / 3);
}

module.exports = exports["default"];