"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isEmpty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitArray = require("isit.array");

var _isitArray2 = _interopRequireDefault(_isitArray);

var _isitArguments = require("isit.arguments");

var _isitArguments2 = _interopRequireDefault(_isitArguments);

var _isitObject = require("isit.object");

var _isitObject2 = _interopRequireDefault(_isitObject);

function isEmpty(obj) {
    if ((0, _isitObject2["default"])(obj)) {
        var num = Object.getOwnPropertyNames(obj).length;

        return num === 0 || num === 1 && (0, _isitArray2["default"])(obj) || num === 2 && (0, _isitArguments2["default"])(obj);
    }

    return value === "";
}

module.exports = exports["default"];