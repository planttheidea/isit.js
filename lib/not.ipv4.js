// not version of ipv4.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotIpv4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _ipv4 = require("./ipv4");

var _ipv42 = _interopRequireDefault(_ipv4);

function isitNotIpv4() {
    return (0, _interfaces.not)(_ipv42["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];