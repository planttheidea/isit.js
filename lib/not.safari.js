// not version of safari.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotSafari;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _safari = require("./safari");

var _safari2 = _interopRequireDefault(_safari);

function isitNotSafari() {
    return (0, _interfaces.not)(_safari2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];