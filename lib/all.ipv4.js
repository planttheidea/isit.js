// all version of ipv4.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllIpv4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _ipv4 = require("./ipv4");

var _ipv42 = _interopRequireDefault(_ipv4);

function isitAllIpv4() {
    return _interfaces.all(_ipv42["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];