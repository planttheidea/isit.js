// any version of alphanumeric.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyAlphaNumeric;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _alphaNumeric = require("./alphaNumeric");

var _alphaNumeric2 = _interopRequireDefault(_alphaNumeric);

function isitAnyAlphaNumeric() {
    return (0, _interfaces.any)(_alphaNumeric2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];