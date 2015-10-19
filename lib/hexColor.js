// is obj a valid hex color?

"use strict";

exports.__esModule = true;
exports["default"] = isitHexColor;

var _regexps = require("./_regexps");

function isitHexColor(obj) {
    return _regexps.hexColor.test(obj);
}

module.exports = exports["default"];