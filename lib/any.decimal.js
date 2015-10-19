// any version of decimal.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyDecimal;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _decimal = require("./decimal");

var _decimal2 = _interopRequireDefault(_decimal);

function isitAnyDecimal() {
    return (0, _interfaces.any)(_decimal2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];