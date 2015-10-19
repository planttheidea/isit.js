// all version of regexp.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllRegExp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _regexp = require("./regexp");

var _regexp2 = _interopRequireDefault(_regexp);

function isitAllRegExp() {
    return (0, _interfaces.all)(_regexp2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];