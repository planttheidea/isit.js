// all version of existy.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllExisty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _existy = require("./existy");

var _existy2 = _interopRequireDefault(_existy);

function isitAllExisty() {
    return (0, _interfaces.all)(_existy2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];