// not version of desktop.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotDesktop;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _desktop = require("./desktop");

var _desktop2 = _interopRequireDefault(_desktop);

function isitNotDesktop() {
    return (0, _interfaces.not)(_desktop2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];