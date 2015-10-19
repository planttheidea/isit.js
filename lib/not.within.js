// not version of within.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotWithin;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _within = require("./within");

var _within2 = _interopRequireDefault(_within);

function isitNotWithin() {
    return (0, _interfaces.not)(_within2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];