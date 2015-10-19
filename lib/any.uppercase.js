// any version of uppercase.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyUppercase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _uppercase = require("./uppercase");

var _uppercase2 = _interopRequireDefault(_uppercase);

function isitAnyUppercase() {
    return _interfaces.any(_uppercase2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];