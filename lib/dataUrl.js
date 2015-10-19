"use strict";

exports.__esModule = true;
exports["default"] = isitDataUrl;

var _regexps = require("./_regexps");

function isitDataUrl(obj) {
    return _regexps.dataUrl.test(obj);
}

module.exports = exports["default"];