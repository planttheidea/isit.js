// is obj a JSON value?

"use strict";

exports.__esModule = true;
exports["default"] = isitJSON;

var _utils = require("./_utils");

function isitJSON(obj) {
    return _utils.toString.call(obj) === "[object Object]";
}

module.exports = exports["default"];