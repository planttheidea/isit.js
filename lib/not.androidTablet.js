// not version of androidTablet.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotAndroidTablet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _androidTablet = require("./androidTablet");

var _androidTablet2 = _interopRequireDefault(_androidTablet);

function isitNotAndroidTablet() {
    return (0, _interfaces.not)(_androidTablet2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];