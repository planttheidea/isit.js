// any version of odd.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyOdd;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _odd = require("./odd");

var _odd2 = _interopRequireDefault(_odd);

function isitAnyOdd() {
    return (0, _interfaces.any)(_odd2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];