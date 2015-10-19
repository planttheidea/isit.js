// not version of weekend.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotWeekend;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _weekend = require("./weekend");

var _weekend2 = _interopRequireDefault(_weekend);

function isitNotWeekend() {
    return _interfaces.not(_weekend2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];