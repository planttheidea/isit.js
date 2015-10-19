// not version of mac.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotMac;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _mac = require("./mac");

var _mac2 = _interopRequireDefault(_mac);

function isitNotMac() {
    return (0, _interfaces.not)(_mac2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];