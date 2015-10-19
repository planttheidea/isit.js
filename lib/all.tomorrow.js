// all version of tomorrow.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllTomorrow;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _tomorrow = require("./tomorrow");

var _tomorrow2 = _interopRequireDefault(_tomorrow);

function isitAllTomorrow() {
    return _interfaces.all(_tomorrow2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];