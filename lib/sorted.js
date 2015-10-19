// is arr an array that is sorted either ascending or descending?

"use strict";

exports.__esModule = true;
exports["default"] = isitSorted;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _array = require("./array");

var _array2 = _interopRequireDefault(_array);

function isArraySortedAsc(arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
        var next = arr[i + 1];

        if (typeof next !== "undefined" && arr[i] > next) {
            return false;
        }
    }

    return true;
}

function isArraySortedDesc(arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
        var next = arr[i + 1];

        if (typeof next !== "undefined" && arr[i] < next) {
            return false;
        }
    }

    return true;
}

function isitSorted(arr) {
    if (_interfaces.not(_array2["default"])(arr)) {
        return false;
    }

    return isArraySortedAsc(arr) || isArraySortedDesc(arr);
}

module.exports = exports["default"];