// is obj a valid date string?

"use strict";

exports.__esModule = true;
exports["default"] = isitDateString;

var _regexps = require("./_regexps");

function isitDateString(obj) {
    return _regexps.dateString.test(obj);
}

module.exports = exports["default"];