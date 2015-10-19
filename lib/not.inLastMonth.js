// not version of inLastMonth.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotInLastMonth;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _inLastMonth = require("./inLastMonth");

var _inLastMonth2 = _interopRequireDefault(_inLastMonth);

function isitNotInLastMonth() {
    return (0, _interfaces.not)(_inLastMonth2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];