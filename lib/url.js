"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isUrl;

var _regexps = require("regexps");

function _isUrl(obj) {
    return _regexps.url.test(obj);
}

module.exports = exports["default"];