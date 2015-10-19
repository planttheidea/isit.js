// not version of typedArray.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotUndefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _typedArray = require("./typedArray");

var _typedArray2 = _interopRequireDefault(_typedArray);

function isitNotUndefined() {
    return _interfaces.not(_typedArray2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];