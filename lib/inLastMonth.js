// is obj in the last month compared to now?

"use strict";

exports.__esModule = true;
exports["default"] = isitInLastMonth;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _inDateRange = require("./inDateRange");

var _inDateRange2 = _interopRequireDefault(_inDateRange);

function isitInLastMonth(obj) {
    return _inDateRange2["default"](obj, new Date(new Date().setDate(new Date().getMonth() - 1)), new Date());
}

module.exports = exports["default"];