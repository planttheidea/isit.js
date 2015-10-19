// not version of hexadecimal.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotHexadecimal;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _hexadecimal = require("./hexadecimal");

var _hexadecimal2 = _interopRequireDefault(_hexadecimal);

function isitNotHexadecimal() {
    return (0, _interfaces.not)(_hexadecimal2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];