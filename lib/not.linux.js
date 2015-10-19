// not version of linux.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotLinux;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _linux = require("./linux");

var _linux2 = _interopRequireDefault(_linux);

function isitNotLinux() {
    return (0, _interfaces.not)(_linux2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];