// all version of ip.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllIp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _ip = require("./ip");

var _ip2 = _interopRequireDefault(_ip);

function isitAllIp() {
    return _interfaces.all(_ip2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];