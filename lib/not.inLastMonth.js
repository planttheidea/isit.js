// not version of inLastMonth.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotInLastMonth;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _inLastMonth = require("./inLastMonth");

var _inLastMonth2 = _interopRequireDefault(_inLastMonth);

function isitNotInLastMonth() {
    return _interfaces.not(_inLastMonth2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];