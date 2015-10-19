// not version of equal.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotEqual;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _equal = require("./equal");

var _equal2 = _interopRequireDefault(_equal);

function isitNotEqual() {
    return (0, _interfaces.not)(_equal2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];