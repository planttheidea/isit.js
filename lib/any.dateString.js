// any version of datestring.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyDateString;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _dateString = require("./dateString");

var _dateString2 = _interopRequireDefault(_dateString);

function isitAnyDateString() {
    return _interfaces.any(_dateString2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];