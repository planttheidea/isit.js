"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isEqual;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isBoolean = require("is.boolean");

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isNumber = require("is.number");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isRegexp = require("is.regexp");

var _isRegexp2 = _interopRequireDefault(_isRegexp);

var _isSameType = require("is.sameType");

var _isSameType2 = _interopRequireDefault(_isSameType);

var _isString = require("is.string");

var _isString2 = _interopRequireDefault(_isString);

function isEqual(obj1, obj2) {
    if ((0, _helpers.not)((0, _isSameType2["default"])(obj1, obj2))) {
        return false;
    }

    if ((0, _helpers.all)((0, _isNumber2["default"])(obj1, obj2))) {
        return obj1 === obj2 && 1 / obj1 === 1 / obj2;
    }

    if ((0, _helpers.all)((0, _isString2["default"])(obj1, obj2)) || (0, _helpers.all)((0, _isRegexp2["default"])(obj1, obj2))) {
        return "" + obj1 === "" + obj2;
    }

    if ((0, _helpers.all)((0, _isBoolean2["default"])(obj1, obj2))) {
        return obj1 === obj2;
    }

    return false;
}

module.exports = exports["default"];