// not version of inDateRange.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotInDateRange;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _inDateRange = require("./inDateRange");

var _inDateRange2 = _interopRequireDefault(_inDateRange);

function isitNotInDateRange() {
    return _interfaces.not(_inDateRange2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];