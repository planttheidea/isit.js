"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isSorted;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isitArray = require("isit.array");

var _isitArray2 = _interopRequireDefault(_isitArray);

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

function isSorted(arr) {
    if ((0, _helpers.not)((0, _isitArray2["default"])(arr))) {
        return false;
    }

    return isArraySortedAsc(arr) || isArraySortedDesc(arr);
}

module.exports = exports["default"];