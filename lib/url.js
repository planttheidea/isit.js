"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitUrl;

var _regexps = require("regexps");

function isitUrl(obj) {
    return _regexps.url.test(obj);
}

module.exports = exports["default"];