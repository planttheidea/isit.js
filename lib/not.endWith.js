// not version of endWith.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotEndWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _endWith = require("./endWith");

var _endWith2 = _interopRequireDefault(_endWith);

function isitNotEndWith() {
    return (0, _interfaces.not)(_endWith2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];