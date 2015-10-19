// not version of email.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotEmail;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _email = require("./email");

var _email2 = _interopRequireDefault(_email);

function isitNotEmail() {
    return _interfaces.not(_email2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];