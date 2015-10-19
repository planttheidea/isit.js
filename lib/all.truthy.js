// all version of truthy.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllTruthy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _truthy = require("./truthy");

var _truthy2 = _interopRequireDefault(_truthy);

function isitAllTruthy() {
    return (0, _interfaces.all)(_truthy2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];