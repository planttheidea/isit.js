// not version of inNextMonth.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotInNextMonth;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _inNextMonth = require("./inNextMonth");

var _inNextMonth2 = _interopRequireDefault(_inNextMonth);

function isitNotInNextMonth() {
    return (0, _interfaces.not)(_inNextMonth2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];