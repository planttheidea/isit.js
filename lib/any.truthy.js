// any version of truthy.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyTruthy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _truthy = require("./truthy");

var _truthy2 = _interopRequireDefault(_truthy);

function isitAnyTruthy() {
    return _interfaces.any(_truthy2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];