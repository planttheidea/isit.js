// any version of existy.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyExisty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _existy = require("./existy");

var _existy2 = _interopRequireDefault(_existy);

function isitAnyExisty() {
    return (0, _interfaces.any)(_existy2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];