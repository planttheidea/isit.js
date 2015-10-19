// not version of finite.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotFinite;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _finite = require("./finite");

var _finite2 = _interopRequireDefault(_finite);

function isitNotFinite() {
    return (0, _interfaces.not)(_finite2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];