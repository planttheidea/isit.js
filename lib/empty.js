// is obj an empty object / array, or not have a value?

"use strict";

exports.__esModule = true;
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
    if (_object2["default"](obj)) {
        var num = Object.getOwnPropertyNames(obj).length;

        return num === 0 || num === 1 && _array2["default"](obj) || num === 2 && _arguments2["default"](obj);
    }

    return obj === "" || _null2["default"](obj) || _undefined2["default"](obj);
}

module.exports = exports["default"];