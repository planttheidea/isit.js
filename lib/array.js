'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multiParamFunctions = exports.isitSorted = exports.isitInArray = undefined;

var _arithmetic = require('./arithmetic');

var _type = require('./type');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Checks to see if item exists as a value in
 * the object array
 *
 * @param {any} object
 * @param {any} item
 * @returns {boolean}
 */
var isitInArray = exports.isitInArray = function isitInArray(object, item) {
    return (0, _type.isitArray)(object) && object.indexOf(item) !== -1;
};

/**
 * Checks to see if the object array is already sorted
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitSorted = exports.isitSorted = function isitSorted(object) {
    if (!(0, _type.isitArray)(object)) {
        return false;
    }

    var shallowClone = [].concat(_toConsumableArray(object));

    shallowClone.sort();

    return (0, _arithmetic.isitEqual)(object, shallowClone);
};

/**
 * Functions we dont want to show up in any or all
 */
var multiParamFunctions = exports.multiParamFunctions = ['inArray'];

exports.default = {
    inArray: isitInArray,
    sorted: isitSorted
};