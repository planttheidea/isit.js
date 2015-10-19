// is obj an error value?

"use strict";

exports.__esModule = true;
exports["default"] = isitError;

var _utils = require("./_utils");

function isitError(obj) {
    return _utils.toString.call(obj) === "[object Error]";
}

module.exports = exports["default"];