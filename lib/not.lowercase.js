// not version of lowercase.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotLowercase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _lowercase = require("./lowercase");

var _lowercase2 = _interopRequireDefault(_lowercase);

function isitNotLowercase() {
    return _interfaces.not(_lowercase2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];