// is obj an object value, and do the number of properties in that object match count

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitPropertyCount;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

function isitPropertyCount(obj, count) {
    if ((0, _interfaces.not)(_object2["default"])(obj) || (0, _interfaces.not)(_number2["default"])(count)) {
        return false;
    }

    if (Object.keys) {
        return Object.keys(obj).length === count;
    }

    var props = [],
        prop = undefined;

    for (prop in obj) {
        if (_interfaces.hasOwnProperty.call(obj, prop)) {
            props[props.length] = prop;
        }
    }

    return props.length === count;
}

module.exports = exports["default"];