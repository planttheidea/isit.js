// is obj a RegExp value?

"use strict";

exports.__esModule = true;
exports["default"] = isitRegExp;

var _utils = require("./_utils");

function isitRegExp(obj) {
    return _utils.toString.call(obj) === "[object RegExp]";
}

module.exports = exports["default"];