// is obj only whitespace?

"use strict";

exports.__esModule = true;
exports["default"] = isitWhitespace;

var _regexps = require("./_regexps");

function isitWhitespace(obj) {
    return _regexps.whitespace.test(obj);
}

module.exports = exports["default"];