"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isInArray;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isitArray = require("isit.array");

var _isitArray2 = _interopRequireDefault(_isitArray);

function isInArray(obj, arr) {
    if ((0, _helpers.not)((0, _isitArray2["default"])(arr))) {
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