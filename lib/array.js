// is obj an array value?

"use strict";

exports.__esModule = true;
exports["default"] = isitArray;

var _utils = require("./_utils");

function isitArray(obj) {
    return _utils.toString.call(obj) === "[object Array]";
}

;
module.exports = exports["default"];