"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isInLastWeek;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitInDateRange = require("isit.inDateRange");

var _isitInDateRange2 = _interopRequireDefault(_isitInDateRange);

function isInLastWeek(obj) {
    return (0, _isitInDateRange2["default"])(obj, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
}

module.exports = exports["default"];