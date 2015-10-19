// all version of hexadecimal.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllHexadecimal;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _hexadecimal = require("./hexadecimal");

var _hexadecimal2 = _interopRequireDefault(_hexadecimal);

function isitAllHexadecimal() {
    return _interfaces.all(_hexadecimal2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];