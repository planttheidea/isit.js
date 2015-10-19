// any version of doubleByte.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyDoubleByte;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _doubleByte = require("./doubleByte");

var _doubleByte2 = _interopRequireDefault(_doubleByte);

function isitAnyDoubleByte() {
    return (0, _interfaces.any)(_doubleByte2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];