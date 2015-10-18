"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isSorted;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _array = require("array");

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

function _isSorted(arr) {
    if ((0, _helpers.not)((0, _array2["default"])(arr))) {
        return false;
    }

    return isArraySortedAsc(arr) || isArraySortedDesc(arr);
}

module.exports = exports["default"];