// not version of above.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotAbove;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _above = require("./above");

var _above2 = _interopRequireDefault(_above);

function isitNotAbove() {
    return (0, _interfaces.not)(_above2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];