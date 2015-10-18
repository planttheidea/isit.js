"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isPast;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitDate = require("isit.date");

var _isitDate2 = _interopRequireDefault(_isitDate);

function isPast(obj) {
    return (0, _isitDate2["default"])(obj) && obj.getTime() < new Date().getTime();
}

module.exports = exports["default"];