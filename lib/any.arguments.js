// any version of arguments.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyArguments;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _arguments = require("./arguments");

var _arguments2 = _interopRequireDefault(_arguments);

function isitAnyArguments() {
    return _interfaces.any(_arguments2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];