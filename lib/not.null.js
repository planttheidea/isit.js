// not version of null.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotNull;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _null = require("./null");

var _null2 = _interopRequireDefault(_null);

function isitNotNull() {
    return (0, _interfaces.not)(_null2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];