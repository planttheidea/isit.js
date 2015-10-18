// is obj a valid IP address?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitIp;

var _regexps = require("./regexps");

function isitIp(obj) {
    return _regexps.ip.test(obj);
}

module.exports = exports["default"];