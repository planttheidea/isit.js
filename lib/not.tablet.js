// not version of tablet.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotTablet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _tablet = require("./tablet");

var _tablet2 = _interopRequireDefault(_tablet);

function isitNotTablet() {
    return (0, _interfaces.not)(_tablet2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];