"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isYesterday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitDate = require("isit.date");

var _isitDate2 = _interopRequireDefault(_isitDate);

function isYesterday(obj) {
    var now = new Date(),
        yesterdayString = new Date(now.setDate(now.getDate() - 1).toDateString());

    return (0, _isitDate2["default"])(obj) && obj.toDateString() === yesterdayString;
}

module.exports = exports["default"];