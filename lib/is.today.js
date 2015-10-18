"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isToday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isDate = require("is.date");

var _isDate2 = _interopRequireDefault(_isDate);

function isToday(obj) {
    return (0, _isDate2["default"])(obj) && obj.toDateString() === new Date().toDateString();
}

module.exports = exports["default"];