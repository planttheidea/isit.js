// any version of error.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyError;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _error = require("./error");

var _error2 = _interopRequireDefault(_error);

function isitAnyError() {
    return _interfaces.any(_error2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];