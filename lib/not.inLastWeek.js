// not version of inLastWeek.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotInLastWeek;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _inLastWeek = require("./inLastWeek");

var _inLastWeek2 = _interopRequireDefault(_inLastWeek);

function isitNotInLastWeek() {
    return (0, _interfaces.not)(_inLastWeek2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];