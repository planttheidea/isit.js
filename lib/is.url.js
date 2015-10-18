"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isUrl;

var _regexps = require("regexps");

function isUrl(obj) {
    return _regexps.url.test(obj);
}

module.exports = exports["default"];