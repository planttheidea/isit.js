// not version of ipod.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotIpod;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _ipod = require("./ipod");

var _ipod2 = _interopRequireDefault(_ipod);

function isitNotIpod() {
    return _interfaces.not(_ipod2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];