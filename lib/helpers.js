"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isitArray = require("isit.array");

var _isitArray2 = _interopRequireDefault(_isitArray);

function getParams(args) {
    var params = _utils.arraySlice.call(args),
        len = params.length;

    if (len === 1 && (0, _isitArray2["default"])(params[0])) {
        return {
            length: params[0].length,
            parameters: params[0]
        };
    }

    return {
        length: len,
        parameters: params
    };
}

var all = function all(func) {
    return function () {
        var _getParams = getParams(arguments);

        var length = _getParams.length;
        var parameters = _getParams.parameters;

        for (var i = 0; i < length; i++) {
            if (!func.call(null, parameters[i])) {
                return false;
            }
        }

        return true;
    };
};

exports.all = all;
var any = function any(func) {
    return function () {
        var _getParams2 = getParams(arguments);

        var length = _getParams2.length;
        var parameters = _getParams2.parameters;

        for (var i = 0; i < length; i++) {
            if (func.call(null, parameters[i])) {
                return true;
            }
        }

        return false;
    };
};

exports.any = any;
var not = function not(func) {
    return function () {
        return !func.apply(null, _utils.arraySlice.call(arguments));
    };
};

exports.not = not;
exports["default"] = {
    all: all,
    any: any,
    not: not
};