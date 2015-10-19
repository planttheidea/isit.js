// is obj a function?

"use strict";

exports.__esModule = true;
exports["default"] = isitFunction;

var _utils = require("./_utils");

function isitFunction(obj) {
    return _utils.toString.call(obj) === "[object Function]" || typeof obj === "function";
}

module.exports = exports["default"];