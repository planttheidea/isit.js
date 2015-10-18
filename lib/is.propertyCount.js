"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isPropertyCount;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isNumber = require("is.number");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isObject = require("is.object");

var _isObject2 = _interopRequireDefault(_isObject);

function isPropertyCount(obj, count) {
    if (!(0, _isObject2["default"])(obj) || !(0, _isNumber2["default"])(count)) {
        return false;
    }

    if (Object.keys) {
        return Object.keys(obj).length === count;
    }

    var props = [],
        prop = undefined;

    for (prop in obj) {
        if (_helpers.hasOwnProperty.call(obj, prop)) {
            props[props.length] = prop;
        }
    }

    return props.length === count;
}

module.exports = exports["default"];