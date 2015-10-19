// not version of year.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _year = require("./year");

var _year2 = _interopRequireDefault(_year);

function isitNotYear() {
    return _interfaces.not(_year2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];