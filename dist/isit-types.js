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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createIsAllMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createIsNotMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createIsAnyMethod; });
/* unused harmony export createRegExpTest */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyFunction; });
// utils


var isitFunction = function isitFunction(object) {
  return typeof object === 'function';
};

var isitAllFunction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitFunction);
var isitNotFunction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitFunction);
var isitAnyFunction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitFunction);

/* harmony default export */ __webpack_exports__["d"] = isitFunction;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNaN__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyNumber; });
// types


// utils


var isitNumber = function isitNumber(object) {
  return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitNaN__["d" /* default */])(object) && typeof object === 'number';
};

var isitAllNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitNumber);
var isitNotNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitNumber);
var isitAnyNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitNumber);

/* harmony default export */ __webpack_exports__["d"] = isitNumber;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyNaN; });
// utils


var isitNaN = function isitNaN(object) {
  return object !== object;
};

var isitAllNaN = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitNaN);
var isitNotNaN = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitNaN);
var isitAnyNaN = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitNaN);

/* harmony default export */ __webpack_exports__["d"] = isitNaN;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyObject; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// utils


var isitObject = function isitObject(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object';
};

var isitAllObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitObject);
var isitNotObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitObject);
var isitAnyObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitObject);

/* harmony default export */ __webpack_exports__["d"] = isitObject;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyString; });
// utils


var isitString = function isitString(object) {
  return typeof object === 'string';
};

var isitAllString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitString);
var isitNotString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitString);
var isitAnyString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitString);

/* harmony default export */ __webpack_exports__["d"] = isitString;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitArguments__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitArray__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitBoolean__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitChar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isitDate__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isitDecimal__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isitError__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isitFunction__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__isitGenerator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__isitInteger__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__isitJson__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__isitMap__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__isitNaN__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__isitNull__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__isitNumber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__isitObject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__isitPlainObject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__isitRegExp__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__isitSameType__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__isitSet__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__isitString__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__isitSymbol__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__isitTypedArray__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__isitUndefined__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
// types

























var all = {
  arguments: __WEBPACK_IMPORTED_MODULE_0__isitArguments__["a" /* isitAllArguments */],
  array: __WEBPACK_IMPORTED_MODULE_1__isitArray__["a" /* isitAllArray */],
  boolean: __WEBPACK_IMPORTED_MODULE_2__isitBoolean__["a" /* isitAllBoolean */],
  char: __WEBPACK_IMPORTED_MODULE_3__isitChar__["a" /* isitAllChar */],
  date: __WEBPACK_IMPORTED_MODULE_4__isitDate__["a" /* isitAllDate */],
  decimal: __WEBPACK_IMPORTED_MODULE_5__isitDecimal__["a" /* isitAllDecimal */],
  error: __WEBPACK_IMPORTED_MODULE_6__isitError__["a" /* isitAllError */],
  function: __WEBPACK_IMPORTED_MODULE_7__isitFunction__["a" /* isitAllFunction */],
  generator: __WEBPACK_IMPORTED_MODULE_8__isitGenerator__["a" /* isitAllGenerator */],
  integer: __WEBPACK_IMPORTED_MODULE_9__isitInteger__["a" /* isitAllInteger */],
  json: __WEBPACK_IMPORTED_MODULE_10__isitJson__["a" /* isitAllJson */],
  map: __WEBPACK_IMPORTED_MODULE_11__isitMap__["a" /* isitAllMap */],
  nan: __WEBPACK_IMPORTED_MODULE_12__isitNaN__["a" /* isitAllNaN */],
  null: __WEBPACK_IMPORTED_MODULE_13__isitNull__["a" /* isitAllNull */],
  number: __WEBPACK_IMPORTED_MODULE_14__isitNumber__["a" /* isitAllNumber */],
  object: __WEBPACK_IMPORTED_MODULE_15__isitObject__["a" /* isitAllObject */],
  plainObject: __WEBPACK_IMPORTED_MODULE_16__isitPlainObject__["a" /* isitAllPlainObject */],
  regexp: __WEBPACK_IMPORTED_MODULE_17__isitRegExp__["a" /* isitAllRegExp */],
  set: __WEBPACK_IMPORTED_MODULE_19__isitSet__["a" /* isitAllSet */],
  string: __WEBPACK_IMPORTED_MODULE_20__isitString__["a" /* isitAllString */],
  symbol: __WEBPACK_IMPORTED_MODULE_21__isitSymbol__["a" /* isitAllSymbol */],
  typedArray: __WEBPACK_IMPORTED_MODULE_22__isitTypedArray__["a" /* isitAllTypedArray */],
  undefined: __WEBPACK_IMPORTED_MODULE_23__isitUndefined__["a" /* isitAllUndefined */]
};

var any = {
  arguments: __WEBPACK_IMPORTED_MODULE_0__isitArguments__["b" /* isitAnyArguments */],
  array: __WEBPACK_IMPORTED_MODULE_1__isitArray__["b" /* isitAnyArray */],
  boolean: __WEBPACK_IMPORTED_MODULE_2__isitBoolean__["b" /* isitAnyBoolean */],
  char: __WEBPACK_IMPORTED_MODULE_3__isitChar__["b" /* isitAnyChar */],
  date: __WEBPACK_IMPORTED_MODULE_4__isitDate__["b" /* isitAnyDate */],
  decimal: __WEBPACK_IMPORTED_MODULE_5__isitDecimal__["b" /* isitAnyDecimal */],
  error: __WEBPACK_IMPORTED_MODULE_6__isitError__["b" /* isitAnyError */],
  function: __WEBPACK_IMPORTED_MODULE_7__isitFunction__["b" /* isitAnyFunction */],
  generator: __WEBPACK_IMPORTED_MODULE_8__isitGenerator__["b" /* isitAnyGenerator */],
  integer: __WEBPACK_IMPORTED_MODULE_9__isitInteger__["b" /* isitAnyInteger */],
  json: __WEBPACK_IMPORTED_MODULE_10__isitJson__["b" /* isitAnyJson */],
  map: __WEBPACK_IMPORTED_MODULE_11__isitMap__["b" /* isitAnyMap */],
  nan: __WEBPACK_IMPORTED_MODULE_12__isitNaN__["b" /* isitAnyNaN */],
  null: __WEBPACK_IMPORTED_MODULE_13__isitNull__["b" /* isitAnyNull */],
  number: __WEBPACK_IMPORTED_MODULE_14__isitNumber__["b" /* isitAnyNumber */],
  object: __WEBPACK_IMPORTED_MODULE_15__isitObject__["b" /* isitAnyObject */],
  plainObject: __WEBPACK_IMPORTED_MODULE_16__isitPlainObject__["b" /* isitAnyPlainObject */],
  regexp: __WEBPACK_IMPORTED_MODULE_17__isitRegExp__["b" /* isitAnyRegExp */],
  set: __WEBPACK_IMPORTED_MODULE_19__isitSet__["b" /* isitAnySet */],
  string: __WEBPACK_IMPORTED_MODULE_20__isitString__["b" /* isitAnyString */],
  symbol: __WEBPACK_IMPORTED_MODULE_21__isitSymbol__["b" /* isitAnySymbol */],
  typedArray: __WEBPACK_IMPORTED_MODULE_22__isitTypedArray__["b" /* isitAnyTypedArray */],
  undefined: __WEBPACK_IMPORTED_MODULE_23__isitUndefined__["b" /* isitAnyUndefined */]
};

var not = {
  arguments: __WEBPACK_IMPORTED_MODULE_0__isitArguments__["c" /* isitNotArguments */],
  array: __WEBPACK_IMPORTED_MODULE_1__isitArray__["c" /* isitNotArray */],
  boolean: __WEBPACK_IMPORTED_MODULE_2__isitBoolean__["c" /* isitNotBoolean */],
  char: __WEBPACK_IMPORTED_MODULE_3__isitChar__["c" /* isitNotChar */],
  date: __WEBPACK_IMPORTED_MODULE_4__isitDate__["c" /* isitNotDate */],
  decimal: __WEBPACK_IMPORTED_MODULE_5__isitDecimal__["c" /* isitNotDecimal */],
  error: __WEBPACK_IMPORTED_MODULE_6__isitError__["c" /* isitNotError */],
  function: __WEBPACK_IMPORTED_MODULE_7__isitFunction__["c" /* isitNotFunction */],
  generator: __WEBPACK_IMPORTED_MODULE_8__isitGenerator__["c" /* isitNotGenerator */],
  integer: __WEBPACK_IMPORTED_MODULE_9__isitInteger__["c" /* isitNotInteger */],
  json: __WEBPACK_IMPORTED_MODULE_10__isitJson__["c" /* isitNotJson */],
  map: __WEBPACK_IMPORTED_MODULE_11__isitMap__["c" /* isitNotMap */],
  nan: __WEBPACK_IMPORTED_MODULE_12__isitNaN__["c" /* isitNotNaN */],
  null: __WEBPACK_IMPORTED_MODULE_13__isitNull__["c" /* isitNotNull */],
  number: __WEBPACK_IMPORTED_MODULE_14__isitNumber__["c" /* isitNotNumber */],
  object: __WEBPACK_IMPORTED_MODULE_15__isitObject__["c" /* isitNotObject */],
  plainObject: __WEBPACK_IMPORTED_MODULE_16__isitPlainObject__["c" /* isitNotPlainObject */],
  regexp: __WEBPACK_IMPORTED_MODULE_17__isitRegExp__["c" /* isitNotRegExp */],
  sameType: __WEBPACK_IMPORTED_MODULE_18__isitSameType__["a" /* isitNotSameType */],
  set: __WEBPACK_IMPORTED_MODULE_19__isitSet__["c" /* isitNotSet */],
  string: __WEBPACK_IMPORTED_MODULE_20__isitString__["c" /* isitNotString */],
  symbol: __WEBPACK_IMPORTED_MODULE_21__isitSymbol__["c" /* isitNotSymbol */],
  typedArray: __WEBPACK_IMPORTED_MODULE_22__isitTypedArray__["c" /* isitNotTypedArray */],
  undefined: __WEBPACK_IMPORTED_MODULE_23__isitUndefined__["c" /* isitNotUndefined */]
};

/* harmony default export */ __webpack_exports__["default"] = {
  arguments: __WEBPACK_IMPORTED_MODULE_0__isitArguments__["d" /* default */],
  array: __WEBPACK_IMPORTED_MODULE_1__isitArray__["d" /* default */],
  boolean: __WEBPACK_IMPORTED_MODULE_2__isitBoolean__["d" /* default */],
  char: __WEBPACK_IMPORTED_MODULE_3__isitChar__["d" /* default */],
  date: __WEBPACK_IMPORTED_MODULE_4__isitDate__["d" /* default */],
  decimal: __WEBPACK_IMPORTED_MODULE_5__isitDecimal__["d" /* default */],
  error: __WEBPACK_IMPORTED_MODULE_6__isitError__["d" /* default */],
  function: __WEBPACK_IMPORTED_MODULE_7__isitFunction__["d" /* default */],
  generator: __WEBPACK_IMPORTED_MODULE_8__isitGenerator__["d" /* default */],
  integer: __WEBPACK_IMPORTED_MODULE_9__isitInteger__["d" /* default */],
  json: __WEBPACK_IMPORTED_MODULE_10__isitJson__["d" /* default */],
  map: __WEBPACK_IMPORTED_MODULE_11__isitMap__["d" /* default */],
  nan: __WEBPACK_IMPORTED_MODULE_12__isitNaN__["d" /* default */],
  null: __WEBPACK_IMPORTED_MODULE_13__isitNull__["d" /* default */],
  number: __WEBPACK_IMPORTED_MODULE_14__isitNumber__["d" /* default */],
  object: __WEBPACK_IMPORTED_MODULE_15__isitObject__["d" /* default */],
  plainObject: __WEBPACK_IMPORTED_MODULE_16__isitPlainObject__["d" /* default */],
  regexp: __WEBPACK_IMPORTED_MODULE_17__isitRegExp__["d" /* default */],
  sameType: __WEBPACK_IMPORTED_MODULE_18__isitSameType__["b" /* default */],
  set: __WEBPACK_IMPORTED_MODULE_19__isitSet__["d" /* default */],
  string: __WEBPACK_IMPORTED_MODULE_20__isitString__["d" /* default */],
  symbol: __WEBPACK_IMPORTED_MODULE_21__isitSymbol__["d" /* default */],
  typedArray: __WEBPACK_IMPORTED_MODULE_22__isitTypedArray__["d" /* default */],
  undefined: __WEBPACK_IMPORTED_MODULE_23__isitUndefined__["d" /* default */]
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyArguments; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// utils



var isitArguments = function isitArguments(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Arguments') || !!(object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && 'callee' in object);
};

var isitAllArguments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitArguments);
var isitNotArguments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitArguments);
var isitAnyArguments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitArguments);

/* harmony default export */ __webpack_exports__["d"] = isitArguments;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyArray; });
// utils



var isitArray = Array.isArray || function (object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Array');
};

var isitAllArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitArray);
var isitNotArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitArray);
var isitAnyArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitArray);

/* harmony default export */ __webpack_exports__["d"] = isitArray;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyBoolean; });
// utils



var isitBoolean = function isitBoolean(object) {
  return object === true || object === false || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Boolean');
};

var isitAllBoolean = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitBoolean);
var isitNotBoolean = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitBoolean);
var isitAnyBoolean = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitBoolean);

/* harmony default export */ __webpack_exports__["d"] = isitBoolean;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitString__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyChar; });
// utils


// types


var isitChar = function isitChar(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitString__["d" /* default */])(object) && object.length === 1;
};

var isitAllChar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitChar);
var isitNotChar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitChar);
var isitAnyChar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitChar);

/* harmony default export */ __webpack_exports__["d"] = isitChar;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyDate; });
// type



var isitDate = function isitDate(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Date');
};

var isitAllDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitDate);
var isitNotDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitDate);
var isitAnyDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitDate);

/* harmony default export */ __webpack_exports__["d"] = isitDate;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNumber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyDecimal; });
// types


// utils


var isitDecimal = function isitDecimal(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitNumber__["d" /* default */])(object) && object % 1 !== 0;
};

var isitAllDecimal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitDecimal);
var isitNotDecimal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitDecimal);
var isitAnyDecimal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitDecimal);

/* harmony default export */ __webpack_exports__["d"] = isitDecimal;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyError; });
// utils


var isitError = function isitError(object) {
  return object instanceof Error;
};

var isitAllError = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitError);
var isitNotError = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitError);
var isitAnyError = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitError);

/* harmony default export */ __webpack_exports__["d"] = isitError;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitFunction__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_typeUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyGenerator; });
// types


// utils



var isitGenerator = function isitGenerator(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitFunction__["d" /* default */])(object) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_typeUtils__["b" /* getObjectClass */])('GeneratorFunction');
};

var isitAllGenerator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitGenerator);
var isitNotGenerator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitGenerator);
var isitAnyGenerator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitGenerator);

/* harmony default export */ __webpack_exports__["d"] = isitGenerator;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNumber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyInteger; });
// types


// utils


var isitInteger = function isitInteger(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitNumber__["d" /* default */])(object) && object % 1 === 0;
};

var isitAllInteger = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitInteger);
var isitNotInteger = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitInteger);
var isitAnyInteger = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitInteger);

/* harmony default export */ __webpack_exports__["d"] = isitInteger;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyJson; });
// utils


var isitJson = function isitJson(object) {
  try {
    JSON.parse(object);

    return true;
  } catch (e) {
    return false;
  }
};

var isitAllJson = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitJson);
var isitNotJson = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitJson);
var isitAnyJson = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitJson);

/* harmony default export */ __webpack_exports__["d"] = isitJson;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyMap; });
// type



var isitMap = function isitMap(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Map');
};

var isitAllMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitMap);
var isitNotMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitMap);
var isitAnyMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitMap);

/* harmony default export */ __webpack_exports__["d"] = isitMap;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotNull; });
// utils


var isitNull = function isitNull(object) {
  return object === null;
};

var isitAllNull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitNull);
var isitAnyNull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitNull);
var isitNotNull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitNull);

/* harmony default export */ __webpack_exports__["d"] = isitNull;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitFunction__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitObject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_typeUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyPlainObject; });
// types



// utils



var isStandardObject = function isStandardObject(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitObject__["d" /* default */])(object) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_typeUtils__["b" /* getObjectClass */])('Object');
};

var isitPlainObject = function isitPlainObject(object) {
  if (!isStandardObject(object)) {
    return false;
  }

  var constructor = object.constructor;

  // test if the contructor has been modified
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitFunction__["d" /* default */])(constructor)) {
    return false;
  }

  var prototype = Object.getPrototypeOf(object);

  // test if prototype does not include a normal object property
  if (!isStandardObject(prototype) || !prototype.hasOwnProperty('isPrototypeOf')) {
    return false;
  }

  // it is likely an object
  return true;
};

var isitAllPlainObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitPlainObject);
var isitNotPlainObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitPlainObject);
var isitAnyPlainObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAnyMethod */])(isitPlainObject);

/* harmony default export */ __webpack_exports__["d"] = isitPlainObject;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyRegExp; });
// utils


var isitRegExp = function isitRegExp(object) {
  return object instanceof RegExp;
};

var isitAllRegExp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitRegExp);
var isitNotRegExp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitRegExp);
var isitAnyRegExp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitRegExp);

/* harmony default export */ __webpack_exports__["d"] = isitRegExp;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotSameType; });
// utils



var isitSameType = function isitSameType(object1, object2) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object1) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object2);
};

var isitNotSameType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitSameType);

/* harmony default export */ __webpack_exports__["b"] = isitSameType;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnySet; });
// type



var isitSet = function isitSet(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Set');
};

var isitAllSet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitSet);
var isitNotSet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitSet);
var isitAnySet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitSet);

/* harmony default export */ __webpack_exports__["d"] = isitSet;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnySymbol; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// utils


var isitSymbol = function isitSymbol(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'symbol';
};

var isitAllSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitSymbol);
var isitNotSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitSymbol);
var isitAnySymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitSymbol);

/* harmony default export */ __webpack_exports__["d"] = isitSymbol;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllTypedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotTypedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyTypedArray; });
// utils



var isitTypedArray = function isitTypedArray(object) {
  var objectToString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object);

  return objectToString === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Int8Array') || objectToString === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Uint8Array') || objectToString === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Uint8ClampedArray') || objectToString === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Int16Array') || objectToString === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Uint16Array') || objectToString === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Int32Array') || objectToString === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Uint32Array') || objectToString === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Float32Array') || objectToString === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Float64Array');
};

var isitAllTypedArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitTypedArray);
var isitNotTypedArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitTypedArray);
var isitAnyTypedArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitTypedArray);

/* harmony default export */ __webpack_exports__["d"] = isitTypedArray;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotUndefined; });
// utils


var isitUndefined = function isitUndefined(object) {
  return object === void 0;
};

var isitAllUndefined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitUndefined);
var isitAnyUndefined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitUndefined);
var isitNotUndefined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitUndefined);

/* harmony default export */ __webpack_exports__["d"] = isitUndefined;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ })
/******/ ]);
});
//# sourceMappingURL=isit-types.js.map