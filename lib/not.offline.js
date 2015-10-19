// not version of offline.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotOffline;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _offline = require("./offline");

var _offline2 = _interopRequireDefault(_offline);

function isitNotOffline() {
    return (0, _interfaces.not)(_offline2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];