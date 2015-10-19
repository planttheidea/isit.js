// all version of future.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllFuture;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _future = require("./future");

var _future2 = _interopRequireDefault(_future);

function isitAllFuture() {
    return _interfaces.all(_future2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];