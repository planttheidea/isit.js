// all version of function.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllFunction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _function = require("./function");

var _function2 = _interopRequireDefault(_function);

function isitAllFunction() {
    return _interfaces.all(_function2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];