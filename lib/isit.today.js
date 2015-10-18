"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isToday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitDate = require("isit.date");

var _isitDate2 = _interopRequireDefault(_isitDate);

function isToday(obj) {
    return (0, _isitDate2["default"])(obj) && obj.toDateString() === new Date().toDateString();
}

module.exports = exports["default"];