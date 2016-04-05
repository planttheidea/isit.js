'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _arithmetic = require('./arithmetic');

var _arithmetic2 = _interopRequireDefault(_arithmetic);

var _array = require('./array');

var _array2 = _interopRequireDefault(_array);

var _environment = require('./environment');

var _environment2 = _interopRequireDefault(_environment);

var _object = require('./object');

var _object2 = _interopRequireDefault(_object);

var _presence = require('./presence');

var _presence2 = _interopRequireDefault(_presence);

var _regexp = require('./regexp');

var _regexp2 = _interopRequireDefault(_regexp);

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

var _time = require('./time');

var _time2 = _interopRequireDefault(_time);

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * @todo
                                                                                                                                                                                                     *  - Check functions to make sure no improvements exist
                                                                                                                                                                                                     *  - JSDoc regexp
                                                                                                                                                                                                     *  - Test all the things
                                                                                                                                                                                                     */

/**
 * Get exclude all the multi-parameter functions and all environment functions
 * from being included in the all or any loop
 */
var noAllOrAnyFunctions = [].concat(_toConsumableArray(_arithmetic.multiParamFunctions), _toConsumableArray(_array.multiParamFunctions), _toConsumableArray(Object.keys(_environment2.default).map(function (key) {
    return key;
})), _toConsumableArray(_object.multiParamFunctions), _toConsumableArray(_string.multiParamFunctions), _toConsumableArray(_time.multiParamFunctions));

/**
 * Check if all arguments passed return true to function it relates to
 *
 * @param {Function} func
 * @returns {Function}
 */
var isitAll = function isitAll(func) {
    return function () {
        for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
            objects[_key] = arguments[_key];
        }

        for (var index = 0, length = objects.length; index < length; index++) {
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
var isitAny = function isitAny(func) {
    return function () {
        for (var _len2 = arguments.length, objects = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            objects[_key2] = arguments[_key2];
        }

        for (var index = 0, length = objects.length; index < length; index++) {
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
var isitNot = function isitNot(func) {
    return function () {
        return !func.apply(undefined, arguments);
    };
};

var isit = _extends({}, _type2.default, _presence2.default, _regexp2.default, _string2.default, _arithmetic2.default, _object2.default, _array2.default, _environment2.default, _time2.default),
    all = {},
    any = {},
    not = {};

/**
 * Apply appropriate keys to all, any, and not
 */
for (var key in isit) {
    var isitFunction = isit[key];

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
isit.setNamespace = function () {
    return undefined;
};

exports.default = isit;
module.exports = exports['default'];