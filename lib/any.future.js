// any version of future.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyFuture;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _future = require("./future");

var _future2 = _interopRequireDefault(_future);

function isitAnyFuture() {
    return (0, _interfaces.any)(_future2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];