// all version of eppPhone.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllEppPhone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _eppPhone = require("./eppPhone");

var _eppPhone2 = _interopRequireDefault(_eppPhone);

function isitAllEppPhone() {
    return (0, _interfaces.all)(_eppPhone2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];