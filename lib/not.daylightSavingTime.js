// not version of daylightSavingTime.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotDaylightSavingTime;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _daylightSavingTime = require("./daylightSavingTime");

var _daylightSavingTime2 = _interopRequireDefault(_daylightSavingTime);

function isitNotDaylightSavingTime() {
    return _interfaces.not(_daylightSavingTime2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];