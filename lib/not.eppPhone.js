// not version of eppPhone.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotEppPhone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _eppPhone = require("./eppPhone");

var _eppPhone2 = _interopRequireDefault(_eppPhone);

function isitNotEppPhone() {
    return (0, _interfaces.not)(_eppPhone2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];