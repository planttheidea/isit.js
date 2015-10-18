// is obj in the next week compared to now?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitInNextWeek;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _inDateRange = require("./inDateRange");

var _inDateRange2 = _interopRequireDefault(_inDateRange);

function isitInNextWeek(obj) {
    return (0, _inDateRange2["default"])(obj, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
}

module.exports = exports["default"];