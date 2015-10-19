// all version of email.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllEmail;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _email = require("./email");

var _email2 = _interopRequireDefault(_email);

function isitAllEmail() {
    return (0, _interfaces.all)(_email2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];