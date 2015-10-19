// not version of inLastWeek.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotInLastWeek;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _inLastWeek = require("./inLastWeek");

var _inLastWeek2 = _interopRequireDefault(_inLastWeek);

function isitNotInLastWeek() {
    return _interfaces.not(_inLastWeek2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];