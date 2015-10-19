// not version of timeString.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotTimeString;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _timeString = require("./timeString");

var _timeString2 = _interopRequireDefault(_timeString);

function isitNotTimeString() {
    return _interfaces.not(_timeString2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];