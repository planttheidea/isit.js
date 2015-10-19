// is obj a valid email address?

"use strict";

exports.__esModule = true;
exports["default"] = isitEmail;

var _regexps = require("./_regexps");

function isitEmail(obj) {
    return _regexps.email.test(obj);
}

module.exports = exports["default"];