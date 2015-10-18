"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isEmpty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isArray = require("is.array");

var _isArray2 = _interopRequireDefault(_isArray);

var _isArguments = require("is.arguments");

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isObject = require("is.object");

var _isObject2 = _interopRequireDefault(_isObject);

function isEmpty(obj) {
    if ((0, _isObject2["default"])(obj)) {
        var num = Object.getOwnPropertyNames(obj).length;

        return num === 0 || num === 1 && (0, _isArray2["default"])(obj) || num === 2 && (0, _isArguments2["default"])(obj);
    }

    return value === "";
}

module.exports = exports["default"];