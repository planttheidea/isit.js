"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isInArray;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _array = require("array");

var _array2 = _interopRequireDefault(_array);

function _isInArray(obj, arr) {
    if ((0, _helpers.not)((0, _array2["default"])(arr))) {
        return false;
    }

    var i = 0,
        len = arr.length;

    for (; i < len; i++) {
        if (arr[i] === obj) {
            return true;
        }
    }

    return false;
}

module.exports = exports["default"];