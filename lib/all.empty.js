// all version of empty.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllEmpty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _empty = require("./empty");

var _empty2 = _interopRequireDefault(_empty);

function isitAllEmpty() {
    return _interfaces.all(_empty2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];