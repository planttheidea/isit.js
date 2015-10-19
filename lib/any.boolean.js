// any version of boolean.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyBoolean;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _boolean = require("./boolean");

var _boolean2 = _interopRequireDefault(_boolean);

function isitAnyBoolean() {
    return (0, _interfaces.any)(_boolean2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];