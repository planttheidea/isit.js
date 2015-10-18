"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isInNextMonth;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _inDateRange = require("inDateRange");

var _inDateRange2 = _interopRequireDefault(_inDateRange);

function _isInNextMonth(obj) {
    return (0, _inDateRange2["default"])(obj, new Date(), new Date(new Date().setDate(new Date().getMonth() + 1)));
}

module.exports = exports["default"];