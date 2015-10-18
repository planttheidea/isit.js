"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isSorted;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isArray = require("is.array");

var _isArray2 = _interopRequireDefault(_isArray);

function isSorted(arr) {
    if ((0, _helpers.not)((0, _isArray2["default"])(arr))) {
        return false;
    }

    var i = 0,
        len = arr.length;

    for (; i < len; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}

module.exports = exports["default"];