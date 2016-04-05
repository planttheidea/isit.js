import arithmetic, {
    multiParamFunctions as arithmeticFunctions
} from './arithmetic';
import array, {
    multiParamFunctions as arrayFunctions
} from './array';
import environment from './environment';
import object, {
    multiParamFunctions as objectFunctions
} from './object';
import presence from './presence';
import regexp from './regexp';
import string, {
    multiParamFunctions as stringFunctions
} from './string';
import time, {
    multiParamFunctions as timeFunctions
} from './time';
import type from './type';

/**
 * Get exclude all the multi-parameter functions and all environment functions
 * from being included in the all or any loop
 */
const noAllOrAnyFunctions = [
    ...arithmeticFunctions,
    ...arrayFunctions,
    ...Object.keys(environment).map((key) => {
        return key;
    }),
    ...objectFunctions,
    ...stringFunctions,
    ...timeFunctions
];

/**
 * Check if all arguments passed return true to function it relates to
 *
 * @param {Function} func
 * @returns {Function}
 */
const isitAll = (func) => {
    return (...objects) => {
        for (let index = 0, length = objects.length; index < length; index++) {
            if (!func(objects[index])) {
                return false;
            }
        }

        return true;
    };
};

/**
 * Check if any of the arguments passed return true to function it relates to
 *
 * @param {Function} func
 * @returns {Function}
 */
const isitAny = (func) => {
    return (...objects) => {
        for (let index = 0, length = objects.length; index < length; index++) {
            if (func(objects[index])) {
                return true;
            }
        }

        return false;
    };
};

/**
 * Check if the func applied to the object returns false
 *
 * @param {Function} func
 * @returns {Function}
 */
const isitNot = (func) => {
    return (...objects) => {
        return !func(...objects);
    };
};

let isit = {
        ...type,
        ...presence,
        ...regexp,
        ...string,
        ...arithmetic,
        ...object,
        ...array,
        ...environment,
        ...time
    },
    all = {},
    any = {},
    not = {};

/**
 * Apply appropriate keys to all, any, and not
 */
for (let key in isit) {
    const isitFunction = isit[key];

    if (noAllOrAnyFunctions.indexOf(key) === -1) {
        all[key] = isitAll(isitFunction);
        any[key] = isitAny(isitFunction);
    }

    not[key] = isitNot(isitFunction);
}

isit.all = all;
isit.any = any;
isit.not = not;

/**
 * Shim for old functionality, as no longer needed
 *
 * @returns {object}
 */
isit.setNamespace = () => {
    return this;
};

export default isit;