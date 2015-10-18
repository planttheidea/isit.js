"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isPropertyCount;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isitNumber = require("isit.number");

var _isitNumber2 = _interopRequireDefault(_isitNumber);

var _isitObject = require("isit.object");

var _isitObject2 = _interopRequireDefault(_isitObject);

function isPropertyCount(obj, count) {
    if (!(0, _isitObject2["default"])(obj) || !(0, _isitNumber2["default"])(count)) {
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