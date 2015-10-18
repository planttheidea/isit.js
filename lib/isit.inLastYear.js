"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isInLastYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitInDateRange = require("isit.inDateRange");

var _isitInDateRange2 = _interopRequireDefault(_isitInDateRange);

function isInLastYear(obj) {
    return (0, _isitInDateRange2["default"])(obj, new Date(new Date().setDate(new Date().getFullYear() - 1)), new Date());
}

module.exports = exports["default"];