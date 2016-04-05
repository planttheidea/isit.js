'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multiParamFunctions = exports.isitWindowObject = exports.isitPropertyDefined = exports.isitPropertyCount = exports.isitJquery = exports.isitDomNodeList = exports.isitDomNode = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _type = require('./type');

var toString = Object.prototype.toString;

var NODE_LIST_REGEXP = /^\[object (HTMLCollection|NodeList)\]$/;

/**
 * Checks if object is an HTML element
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitDomNode = exports.isitDomNode = function isitDomNode(object) {
    return !(0, _type.isitUndefined)(object) && !(0, _type.isitNull)(object) && object.nodeType > 0;
};

/**
 * Checks if object is an HTMLCollection, for example
 * returned isArrayFrom document.querySelectorAll
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitDomNodeList = exports.isitDomNodeList = function isitDomNodeList(object) {
    return !(0, _type.isitUndefined)(object) && !(0, _type.isitNull)(object) && NODE_LIST_REGEXP.test(toString.call(object));
};

/**
 * Checks if object is a jQuery object
 * 
 * @param {any} object
 * @returns {boolean}
 */
var isitJquery = exports.isitJquery = function isitJquery(object) {
    if ((0, _type.isitFunction)(object)) {
        var $object = object();

        return (0, _type.isitObject)($object) && !!$object.jquery;
    }

    return !!Object.getPrototypeOf(object).jquery;
};

/**
 * Checks if the number of keys in the object object
 * equals the count numeric value
 *
 * @param {any} object
 * @param {number} count
 * @returns {boolean}
 */
var isitPropertyCount = exports.isitPropertyCount = function isitPropertyCount(object, count) {
    if (!(0, _type.isitObject)(object) || !(0, _type.isitNumber)(count)) {
        return false;
    }

    return Object.keys(object).length === count;
};

/**
 * Checks if the object object has the property property
 * (tell me that wasn't fun to read)
 *
 * @param {any} object
 * @param {any} property
 * @returns {*}
 */
var isitPropertyDefined = exports.isitPropertyDefined = function isitPropertyDefined(object, property) {
    return (0, _type.isitObject)(object) && object.hasOwnProperty(property);
};

/**
 * Checks if the object is the window
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitWindowObject = exports.isitWindowObject = function isitWindowObject(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && 'setInterval' in object;
};

/**
 * Functions we don't want to show up in any or all
 */
var multiParamFunctions = exports.multiParamFunctions = ['propertyCount', 'propertyDefined'];

exports.default = {
    domNode: isitDomNode,
    domNodeList: isitDomNodeList,
    jquery: isitJquery,
    propertyCount: isitPropertyCount,
    propertyDefined: isitPropertyDefined,
    windowObject: isitWindowObject
};