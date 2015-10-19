// not version of under.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotUnder;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _under = require("./under");

var _under2 = _interopRequireDefault(_under);

function isitNotUnder() {
    return _interfaces.not(_under2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];