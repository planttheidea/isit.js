// utility functions, used all over the place

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _array = require("./array");

var _array2 = _interopRequireDefault(_array);

var arraySlice = Array.prototype.slice;

exports.arraySlice = arraySlice;
var getParams = function getParams(args) {
    var params = arraySlice.call(args),
        len = params.length;

    if (len === 1 && (0, _array2["default"])(params[0])) {
        return {
            length: params[0].length,
            parameters: params[0]
        };
    }

    return {
        length: len,
        parameters: params
    };
};

exports.getParams = getParams;
var hasOwnProperty = Object.prototype.hasOwnProperty;

exports.hasOwnProperty = hasOwnProperty;
var toCamelCase = function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, "");
};

exports.toCamelCase = toCamelCase;
var toString = Object.prototype.toString;

exports.toString = toString;
exports["default"] = {
    arraySlice: arraySlice,
    getParams: getParams,
    hasOwnProperty: hasOwnProperty,
    toCamelCase: toCamelCase,
    toString: toString
};