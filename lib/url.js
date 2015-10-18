// is obj a valid URL?
// NOTE: this is a little wonky, I can't seem to find a solid regex to encompass all possible values

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