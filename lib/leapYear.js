// is obj a number and a valid leap year?

"use strict";

exports.__esModule = true;
exports["default"] = isitLeapYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitLeapYear(obj) {
    return _number2["default"](obj) && (obj % 4 === 0 && obj % 100 !== 0 || obj % 400 === 0);
}

module.exports = exports["default"];