// any version of function.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyFunction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _function = require("./function");

var _function2 = _interopRequireDefault(_function);

function isitAnyFunction() {
    return _interfaces.any(_function2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];