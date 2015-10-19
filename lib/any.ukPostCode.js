// any version of ukPostCode.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyUKPostCode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _ukPostCode = require("./ukPostCode");

var _ukPostCode2 = _interopRequireDefault(_ukPostCode);

function isitAnyUKPostCode() {
    return (0, _interfaces.any)(_ukPostCode2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];