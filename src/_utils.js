// utility functions, used all over the place

import isitArray from "./array";

export var arraySlice = Array.prototype.slice;

export var getParams = function(args) {
    let params = arraySlice.call(args),
        len = params.length;

    if (len === 1 && isitArray(params[0])) {
        return {
            length:params[0].length,
            parameters:params[0]
        };
    }

    return {
        length:len,
        parameters:params
    };
};

export var hasOwnProperty = Object.prototype.hasOwnProperty;

export var toCamelCase = function(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, "");
};

export var toString = Object.prototype.toString;

export default {
    arraySlice,
    getParams,
    hasOwnProperty,
    toCamelCase,
    toString
};