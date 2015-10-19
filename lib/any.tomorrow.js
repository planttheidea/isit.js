// any version of tomorrow.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyTomorrow;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _tomorrow = require("./tomorrow");

var _tomorrow2 = _interopRequireDefault(_tomorrow);

function isitAnyTomorrow() {
    return _interfaces.any(_tomorrow2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];