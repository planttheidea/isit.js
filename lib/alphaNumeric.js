// is obj alphanumeric?

"use strict";

exports.__esModule = true;
exports["default"] = isitAlphaNumeric;

var _regexps = require("./_regexps");

function isitAlphaNumeric(obj) {
    return _regexps.alphaNumeric.test(obj);
}

module.exports = exports["default"];