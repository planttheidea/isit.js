// not version of string.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotString;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitNotString() {
    return (0, _interfaces.not)(_string2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];