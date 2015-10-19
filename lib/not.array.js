// not version of array.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotArray;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _array = require("./array");

var _array2 = _interopRequireDefault(_array);

function isitNotArray() {
    return _interfaces.not(_array2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];