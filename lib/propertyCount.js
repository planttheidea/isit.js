"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitPropertyCount;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _number = require("number");

var _number2 = _interopRequireDefault(_number);

var _object = require("object");

var _object2 = _interopRequireDefault(_object);

function isitPropertyCount(obj, count) {
    if ((0, _helpers.not)(_object2["default"])(obj) || (0, _helpers.not)(_number2["default"])(count)) {
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