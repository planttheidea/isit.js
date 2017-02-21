(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("isit", [], factory);
	else if(typeof exports === 'object')
		exports["isit"] = factory();
	else
		root["isit"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createIsAllMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createIsNotMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createIsAnyMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRegExpTest; });
var createIsAllMethod = function createIsAllMethod(method) {
  return function () {
    for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
      objects[_key] = arguments[_key];
    }

    if (!objects.length) {
      return false;
    }

    return objects.every(method);
  };
};

var createIsNotMethod = function createIsNotMethod(method) {
  return function () {
    return !method.apply(undefined, arguments);
  };
};

var createIsAnyMethod = function createIsAnyMethod(method) {
  return function () {
    for (var _len2 = arguments.length, objects = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      objects[_key2] = arguments[_key2];
    }

    if (!objects.length) {
      return false;
    }

    return objects.some(method);
  };
};

var createRegExpTest = function createRegExpTest(regexp) {
  return function (object) {
    return regexp.test(object);
  };
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getObjectClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toString; });
/**
 * Get the full toString value string based on type
 *
 * @param {string} type
 * @returns {string}
 */
var getObjectClass = function getObjectClass(type) {
  return "[object " + type + "]";
};

/**
 * @function
 *
 * @description
 * Get the toString of the object
 *
 * @param {any} object
 * @returns {string}
 */
var toString = function toString(object) {
  return Object.prototype.toString.call(object);
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* unused harmony export isitAllNull */
/* unused harmony export isitAnyNull */
/* unused harmony export isitNotNull */
// utils


var isitNull = function isitNull(object) {
  return object === null;
};

var isitAllNull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAllMethod */])(isitNull);
var isitAnyNull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["d" /* createIsAnyMethod */])(isitNull);
var isitNotNull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitNull);

/* harmony default export */ __webpack_exports__["a"] = isitNull;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* unused harmony export isitAllUndefined */
/* unused harmony export isitAnyUndefined */
/* unused harmony export isitNotUndefined */
// utils


var isitUndefined = function isitUndefined(object) {
  return object === void 0;
};

var isitAllUndefined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAllMethod */])(isitUndefined);
var isitAnyUndefined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["d" /* createIsAnyMethod */])(isitUndefined);
var isitNotUndefined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitUndefined);

/* harmony default export */ __webpack_exports__["a"] = isitUndefined;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_stringConstants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyWhitespace; });
// constants


// utils


var isWhitespace = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_stringConstants__["a" /* WHITESPACE_REGEXP */]);

var isitWhitespace = function isitWhitespace(object) {
  return isWhitespace(object);
};

var isitAllWhitespace = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitWhitespace);
var isitNotWhitespace = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitWhitespace);
var isitAnyWhitespace = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsAnyMethod */])(isitWhitespace);

/* harmony default export */ __webpack_exports__["d"] = isitWhitespace;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitEmpty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitExisty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitFalsy__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitTruthy__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isitWhitespace__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
// presence






var all = {
  empty: __WEBPACK_IMPORTED_MODULE_0__isitEmpty__["a" /* isitAllEmpty */],
  existy: __WEBPACK_IMPORTED_MODULE_1__isitExisty__["a" /* isitAllExisty */],
  falsy: __WEBPACK_IMPORTED_MODULE_2__isitFalsy__["a" /* isitAllFalsy */],
  truthy: __WEBPACK_IMPORTED_MODULE_3__isitTruthy__["a" /* isitAllTruthy */],
  whitespace: __WEBPACK_IMPORTED_MODULE_4__isitWhitespace__["a" /* isitAllWhitespace */]
};

var any = {
  empty: __WEBPACK_IMPORTED_MODULE_0__isitEmpty__["b" /* isitAnyEmpty */],
  existy: __WEBPACK_IMPORTED_MODULE_1__isitExisty__["b" /* isitAnyExisty */],
  falsy: __WEBPACK_IMPORTED_MODULE_2__isitFalsy__["b" /* isitAnyFalsy */],
  truthy: __WEBPACK_IMPORTED_MODULE_3__isitTruthy__["b" /* isitAnyTruthy */],
  whitespace: __WEBPACK_IMPORTED_MODULE_4__isitWhitespace__["b" /* isitAnyWhitespace */]
};

var not = {
  empty: __WEBPACK_IMPORTED_MODULE_0__isitEmpty__["c" /* isitNotEmpty */],
  existy: __WEBPACK_IMPORTED_MODULE_1__isitExisty__["c" /* isitNotExisty */],
  falsy: __WEBPACK_IMPORTED_MODULE_2__isitFalsy__["c" /* isitNotFalsy */],
  truthy: __WEBPACK_IMPORTED_MODULE_3__isitTruthy__["c" /* isitNotTruthy */],
  whitespace: __WEBPACK_IMPORTED_MODULE_4__isitWhitespace__["c" /* isitNotWhitespace */]
};

/* harmony default export */ __webpack_exports__["default"] = {
  empty: __WEBPACK_IMPORTED_MODULE_0__isitEmpty__["d" /* default */],
  existy: __WEBPACK_IMPORTED_MODULE_1__isitExisty__["d" /* default */],
  falsy: __WEBPACK_IMPORTED_MODULE_2__isitFalsy__["d" /* default */],
  truthy: __WEBPACK_IMPORTED_MODULE_3__isitTruthy__["d" /* default */],
  whitespace: __WEBPACK_IMPORTED_MODULE_4__isitWhitespace__["d" /* default */]
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATA_URL_REGEXP */
/* unused harmony export DOUBLE_BYTE_REGEXP */
/* unused harmony export HTML_REGEXP */
/* unused harmony export SPLIT_WORDS_REGEXP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WHITESPACE_REGEXP; });
/* eslint-disable max-len */
var DATA_URL_REGEXP = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
/* eslint-enable */
var DOUBLE_BYTE_REGEXP = /[^\u0000-\u00ff]/;
var HTML_REGEXP = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/;
var SPLIT_WORDS_REGEXP = /[_|\-|\s\s*]/;
var WHITESPACE_REGEXP = /^\s\s*/;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(1);
/* unused harmony export isitAllArguments */
/* unused harmony export isitNotArguments */
/* unused harmony export isitAnyArguments */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// utils



var isitArguments = function isitArguments(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Arguments') || !!(object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && 'callee' in object);
};

var isitAllArguments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAllMethod */])(isitArguments);
var isitNotArguments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitArguments);
var isitAnyArguments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["d" /* createIsAnyMethod */])(isitArguments);

/* harmony default export */ __webpack_exports__["a"] = isitArguments;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(1);
/* unused harmony export isitAllArray */
/* unused harmony export isitNotArray */
/* unused harmony export isitAnyArray */
// utils



var isitArray = Array.isArray || function (object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Array');
};

var isitAllArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAllMethod */])(isitArray);
var isitNotArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitArray);
var isitAnyArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["d" /* createIsAnyMethod */])(isitArray);

/* harmony default export */ __webpack_exports__["a"] = isitArray;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitWhitespace__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitArguments__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitArray__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitMap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isitNull__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isitObject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isitRegExp__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isitSet__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__isitUndefined__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyEmpty; });
// presence


// types









// utils


var isitEmpty = function isitEmpty(object) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__isitUndefined__["a" /* default */])(object) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__isitNull__["a" /* default */])(object)) {
    return true;
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isitArray__["a" /* default */])(object) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitArguments__["a" /* default */])(object)) {
    return object.length === 0;
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isitMap__["a" /* default */])(object) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__isitSet__["a" /* default */])(object)) {
    return object.size === 0;
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__isitRegExp__["a" /* default */])(object)) {
    var objectString = object.toString();

    return objectString === '/(?:)/' || objectString === '//';
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__isitObject__["a" /* default */])(object)) {
    return Object.keys(object).length === 0;
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitWhitespace__["d" /* default */])(object) || '' + object === '';
};

var isitAllEmpty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__internal_functionUtils__["b" /* createIsAllMethod */])(isitEmpty);
var isitNotEmpty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__internal_functionUtils__["c" /* createIsNotMethod */])(isitEmpty);
var isitAnyEmpty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__internal_functionUtils__["d" /* createIsAnyMethod */])(isitEmpty);

/* harmony default export */ __webpack_exports__["d"] = isitEmpty;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNull__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitUndefined__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllExisty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotExisty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyExisty; });
// types



// utils


var isitExisty = function isitExisty(object) {
  return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitNull__["a" /* default */])(object) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitUndefined__["a" /* default */])(object);
};

var isitAllExisty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAllMethod */])(isitExisty);
var isitNotExisty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitExisty);
var isitAnyExisty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["d" /* createIsAnyMethod */])(isitExisty);

/* harmony default export */ __webpack_exports__["d"] = isitExisty;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllFalsy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotFalsy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyFalsy; });
// utils


var isitFalsy = function isitFalsy(object) {
  return !object;
};

var isitAllFalsy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAllMethod */])(isitFalsy);
var isitNotFalsy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitFalsy);
var isitAnyFalsy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["d" /* createIsAnyMethod */])(isitFalsy);

/* harmony default export */ __webpack_exports__["d"] = isitFalsy;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(1);
/* unused harmony export isitAllMap */
/* unused harmony export isitNotMap */
/* unused harmony export isitAnyMap */
// type



var isitMap = function isitMap(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Map');
};

var isitAllMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAllMethod */])(isitMap);
var isitNotMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitMap);
var isitAnyMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["d" /* createIsAnyMethod */])(isitMap);

/* harmony default export */ __webpack_exports__["a"] = isitMap;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* unused harmony export isitAllObject */
/* unused harmony export isitNotObject */
/* unused harmony export isitAnyObject */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// utils


var isitObject = function isitObject(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object';
};

var isitAllObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAllMethod */])(isitObject);
var isitNotObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitObject);
var isitAnyObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["d" /* createIsAnyMethod */])(isitObject);

/* harmony default export */ __webpack_exports__["a"] = isitObject;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* unused harmony export isitAllRegExp */
/* unused harmony export isitNotRegExp */
/* unused harmony export isitAnyRegExp */
// utils


var isitRegExp = function isitRegExp(object) {
  return object instanceof RegExp;
};

var isitAllRegExp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAllMethod */])(isitRegExp);
var isitNotRegExp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitRegExp);
var isitAnyRegExp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["d" /* createIsAnyMethod */])(isitRegExp);

/* harmony default export */ __webpack_exports__["a"] = isitRegExp;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(1);
/* unused harmony export isitAllSet */
/* unused harmony export isitNotSet */
/* unused harmony export isitAnySet */
// type



var isitSet = function isitSet(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Set');
};

var isitAllSet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAllMethod */])(isitSet);
var isitNotSet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitSet);
var isitAnySet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["d" /* createIsAnyMethod */])(isitSet);

/* harmony default export */ __webpack_exports__["a"] = isitSet;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllTruthy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotTruthy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyTruthy; });
// utils


var isitTruthy = function isitTruthy(object) {
  return !!object;
};

var isitAllTruthy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAllMethod */])(isitTruthy);
var isitNotTruthy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitTruthy);
var isitAnyTruthy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["d" /* createIsAnyMethod */])(isitTruthy);

/* harmony default export */ __webpack_exports__["d"] = isitTruthy;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ })
/******/ ]);
});
//# sourceMappingURL=isit-presence.js.map