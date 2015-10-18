

import {arraySlice} from "utils";
import _isArray from "array";

function getParams(args) {
    let params = arraySlice.call(args),
        len = params.length;

    if (len === 1 && _isArray(params[0])) {
        return {
            length:params[0].length,
            parameters:params[0]
        };
    }

    return {
        length:len,
        parameters:params
    };
}

export var all = function(func) {
    return function() {
        let {
                length,
                parameters
            } = getParams(arguments);

        for (let i = 0; i < length; i++) {
            if (!func(parameters[i])) {
                return false;
            }
        }

        return true;
    };
};

export var any = function(func) {
    return function() {
        let {
                length,
                parameters
            } = getParams(arguments);

        for (let i = 0; i < length; i++) {
            if (func(parameters[i])) {
                return true;
            }
        }

        return false;
    };
};

export var not = function(func) {
    return function() {
        return !func.apply(null, arraySlice.call(arguments));
    };
};

export default {
    all,
    any,
    not
};