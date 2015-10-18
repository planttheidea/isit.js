// is obj an empty object / array, or not have a value?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitEmpty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _array = require("./array");

var _array2 = _interopRequireDefault(_array);

var _arguments = require("./arguments");

var _arguments2 = _interopRequireDefault(_arguments);

var _null = require("./null");

var _null2 = _interopRequireDefault(_null);

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

var _undefined = require("./undefined");

var _undefined2 = _interopRequireDefault(_undefined);

function isitEmpty(obj) {
    if ((0, _object2["default"])(obj)) {
        var num = Object.getOwnPropertyNames(obj).length;

        return num === 0 || num === 1 && (0, _array2["default"])(obj) || num === 2 && (0, _arguments2["default"])(obj);
    }

    return obj === "" || (0, _null2["default"])(obj) || (0, _undefined2["default"])(obj);
}

module.exports = exports["default"];