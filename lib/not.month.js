// not version of month.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotMonth;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _month = require("./month");

var _month2 = _interopRequireDefault(_month);

function isitNotMonth() {
    return (0, _interfaces.not)(_month2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];