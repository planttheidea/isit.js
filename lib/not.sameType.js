// not version of sameType.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotSameType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _sameType = require("./sameType");

var _sameType2 = _interopRequireDefault(_sameType);

function isitNotSameType() {
    return (0, _interfaces.not)(_sameType2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];