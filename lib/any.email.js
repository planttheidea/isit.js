// any version of email.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyEmail;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _email = require("./email");

var _email2 = _interopRequireDefault(_email);

function isitAnyEmail() {
    return (0, _interfaces.any)(_email2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];