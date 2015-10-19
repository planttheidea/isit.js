// any version of hexadecimal.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyHexadecimal;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _hexadecimal = require("./hexadecimal");

var _hexadecimal2 = _interopRequireDefault(_hexadecimal);

function isitAnyHexadecimal() {
    return _interfaces.any(_hexadecimal2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];