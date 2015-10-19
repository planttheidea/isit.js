// all version of hexColor.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllHexColor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _hexColor = require("./hexColor");

var _hexColor2 = _interopRequireDefault(_hexColor);

function isitAllHexColor() {
    return (0, _interfaces.all)(_hexColor2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];