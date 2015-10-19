// all version of null.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllNull;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _null = require("./null");

var _null2 = _interopRequireDefault(_null);

function isitAllNull() {
    return (0, _interfaces.all)(_null2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];