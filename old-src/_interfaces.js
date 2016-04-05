// helper functions, used for interfaces

import {
    arraySlice,
    getParams
} from "./_utils";

export var all = function(func) {
    return function() {
        let {
                length,
                parameters
            } = getParams(arguments);

        if (!parameters.length) {
            return false;
        }

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

        if (!parameters.length) {
            return false;
        }

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