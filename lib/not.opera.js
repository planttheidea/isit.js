// not version of opera.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotOpera;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _opera = require("./opera");

var _opera2 = _interopRequireDefault(_opera);

function isitNotOpera() {
    return (0, _interfaces.not)(_opera2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];