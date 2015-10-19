// any version of null.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyNull;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _null = require("./null");

var _null2 = _interopRequireDefault(_null);

function isitAnyNull() {
    return (0, _interfaces.any)(_null2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];