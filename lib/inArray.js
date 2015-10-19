// is arr an array, and does obj exist in it?

"use strict";

exports.__esModule = true;
exports["default"] = isitInArray;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _array = require("./array");

var _array2 = _interopRequireDefault(_array);

function isitInArray(obj, arr) {
    if (_interfaces.not(_array2["default"])(arr)) {
        return false;
    }

    return arr.indexOf(obj) !== -1;
}

module.exports = exports["default"];