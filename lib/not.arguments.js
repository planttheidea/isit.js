// not version of arguments.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotArguments;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _arguments = require("./arguments");

var _arguments2 = _interopRequireDefault(_arguments);

function isitNotArguments() {
    return (0, _interfaces.not)(_arguments2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];