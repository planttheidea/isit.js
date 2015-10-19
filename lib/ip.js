// is obj a valid IP address?

"use strict";

exports.__esModule = true;
exports["default"] = isitIp;

var _regexps = require("./_regexps");

function isitIp(obj) {
    return _regexps.ip.test(obj);
}

module.exports = exports["default"];