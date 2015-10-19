// is obj a valid URL?
// NOTE: this is a little wonky, I can't seem to find a solid regex to encompass all possible values

"use strict";

exports.__esModule = true;
exports["default"] = isitUrl;

var _regexps = require("./_regexps");

function isitUrl(obj) {
    return _regexps.url.test(obj);
}

module.exports = exports["default"];