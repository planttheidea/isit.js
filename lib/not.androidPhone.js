// not version of androidPhone.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotAndroidPhone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _androidPhone = require("./androidPhone");

var _androidPhone2 = _interopRequireDefault(_androidPhone);

function isitNotAndroidPhone() {
    return (0, _interfaces.not)(_androidPhone2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];