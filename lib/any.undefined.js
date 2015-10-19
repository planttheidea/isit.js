// any version of undefined.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyUndefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _undefined = require("./undefined");

var _undefined2 = _interopRequireDefault(_undefined);

function isitAnyUndefined() {
    return (0, _interfaces.any)(_undefined2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];