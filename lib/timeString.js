// is obj a valid time string?

"use strict";

exports.__esModule = true;
exports["default"] = isitTimeString;

var _regexps = require("./_regexps");

function isitTimeString(obj) {
    return _regexps.timeString.test(obj);
}

module.exports = exports["default"];