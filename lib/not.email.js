// not version of email.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotEmail;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _email = require("./email");

var _email2 = _interopRequireDefault(_email);

function isitNotEmail() {
    return (0, _interfaces.not)(_email2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];