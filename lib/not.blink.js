// not version of blink.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotBlink;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _blink = require("./blink");

var _blink2 = _interopRequireDefault(_blink);

function isitNotBlink() {
    return (0, _interfaces.not)(_blink2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];