// not version of yesterday.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotYesterday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _yesterday = require("./yesterday");

var _yesterday2 = _interopRequireDefault(_yesterday);

function isitNotYesterday() {
    return _interfaces.not(_yesterday2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];