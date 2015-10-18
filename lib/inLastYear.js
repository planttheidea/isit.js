// is obj in the last year compared to now?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitInLastYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _inDateRange = require("inDateRange");

var _inDateRange2 = _interopRequireDefault(_inDateRange);

function isitInLastYear(obj) {
    return (0, _inDateRange2["default"])(obj, new Date(new Date().setDate(new Date().getFullYear() - 1)), new Date());
}

module.exports = exports["default"];