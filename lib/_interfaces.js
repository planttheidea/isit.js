// helper functions, used for interfaces

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require("./_utils");

var all = function all(func) {
    return function () {
        var _getParams = (0, _utils.getParams)(arguments);

        var length = _getParams.length;
        var parameters = _getParams.parameters;

        for (var i = 0; i < length; i++) {
            if (!func(parameters[i])) {
                return false;
            }
        }

        return true;
    };
};

exports.all = all;
var any = function any(func) {
    return function () {
        var _getParams2 = (0, _utils.getParams)(arguments);

        var length = _getParams2.length;
        var parameters = _getParams2.parameters;

        for (var i = 0; i < length; i++) {
            if (func(parameters[i])) {
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