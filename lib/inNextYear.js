"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isInNextYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _inDateRange = require("inDateRange");

var _inDateRange2 = _interopRequireDefault(_inDateRange);

function _isInNextYear(obj) {
    return (0, _inDateRange2["default"])(obj, new Date(), new Date(new Date().setDate(new Date().getFullYear() + 1)));
}

module.exports = exports["default"];