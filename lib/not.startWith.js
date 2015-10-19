// not version of startWith.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotStartWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _startWith = require("./startWith");

var _startWith2 = _interopRequireDefault(_startWith);

function isitNotStartWith() {
    return (0, _interfaces.not)(_startWith2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];