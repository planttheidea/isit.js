// any version of socialSecurityNumber.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnySocialSecurityNumber;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _socialSecurityNumber = require("./socialSecurityNumber");

var _socialSecurityNumber2 = _interopRequireDefault(_socialSecurityNumber);

function isitAnySocialSecurityNumber() {
    return (0, _interfaces.any)(_socialSecurityNumber2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];