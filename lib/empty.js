"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isEmpty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _array = require("array");

var _array2 = _interopRequireDefault(_array);

var _arguments = require("arguments");

var _arguments2 = _interopRequireDefault(_arguments);

var _object = require("object");

var _object2 = _interopRequireDefault(_object);

function _isEmpty(obj) {
    if ((0, _object2["default"])(obj)) {
        var num = Object.getOwnPropertyNames(obj).length;

        return num === 0 || num === 1 && (0, _array2["default"])(obj) || num === 2 && (0, _arguments2["default"])(obj);
    }

    return obj === "";
}

module.exports = exports["default"];