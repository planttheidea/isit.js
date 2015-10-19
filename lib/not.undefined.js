// not version of undefined.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotUndefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _undefined = require("./undefined");

var _undefined2 = _interopRequireDefault(_undefined);

function isitNotUndefined() {
    return (0, _interfaces.not)(_undefined2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];