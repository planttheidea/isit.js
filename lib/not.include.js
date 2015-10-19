// not version of include.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotInclude;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _include = require("./include");

var _include2 = _interopRequireDefault(_include);

function isitNotInclude() {
    return (0, _interfaces.not)(_include2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];