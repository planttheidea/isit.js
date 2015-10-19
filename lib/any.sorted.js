// any version of sorted.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnySorted;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _sorted = require("./sorted");

var _sorted2 = _interopRequireDefault(_sorted);

function isitAnySorted() {
    return _interfaces.any(_sorted2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];