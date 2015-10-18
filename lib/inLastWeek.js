"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitInLastWeek;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _inDateRange = require("inDateRange");

var _inDateRange2 = _interopRequireDefault(_inDateRange);

function isitInLastWeek(obj) {
    return (0, _inDateRange2["default"])(obj, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
}

module.exports = exports["default"];