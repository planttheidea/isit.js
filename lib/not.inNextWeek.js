// not version of inNextWeek.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotInNextWeek;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _inNextWeek = require("./inNextWeek");

var _inNextWeek2 = _interopRequireDefault(_inNextWeek);

function isitNotInNextWeek() {
    return _interfaces.not(_inNextWeek2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];