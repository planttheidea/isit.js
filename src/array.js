import {
    isitEqual
} from './arithmetic';
import {
    isitArray
} from './type';

/**
 * Checks to see if item exists as a value in
 * the object array
 *
 * @param {any} object
 * @param {any} item
 * @returns {boolean}
 */
export const isitInArray = (object, item) => {
    return isitArray(object) && object.indexOf(item) !== -1;
};

/**
 * Checks to see if the object array is already sorted
 *
 * @param {any} object
 * @returns {boolean}
 */
export const isitSorted = (object) => {
    if (!isitArray(object)) {
        return false;
    }
    
    const shallowClone = [...object];
    
    shallowClone.sort();
    
    return isitEqual(object, shallowClone);
};

/**
 * Functions we dont want to show up in any or all
 */
export const multiParamFunctions = [
    'inArray'
];

export default {
    inArray: isitInArray,
    sorted: isitSorted
};