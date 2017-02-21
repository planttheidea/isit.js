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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createIsAllMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createIsNotMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createIsAnyMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createRegExpTest; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAllString; });
/* unused harmony export isitNotString */
/* unused harmony export isitAnyString */
// utils


var isitString = function isitString(object) {
  return typeof object === 'string';
};

var isitAllString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitString);
var isitNotString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitString);
var isitAnyString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitString);

/* harmony default export */ __webpack_exports__["a"] = isitString;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DATA_URL_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DOUBLE_BYTE_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HTML_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPLIT_WORDS_REGEXP; });
/* unused harmony export WHITESPACE_REGEXP */
/* eslint-disable max-len */
var DATA_URL_REGEXP = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
/* eslint-enable */
var DOUBLE_BYTE_REGEXP = /[^\u0000-\u00ff]/;
var HTML_REGEXP = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/;
var SPLIT_WORDS_REGEXP = /[_|\-|\s\s*]/;
var WHITESPACE_REGEXP = /^\s\s*/;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stringConstants__ = __webpack_require__(2);
/* unused harmony export getArrayOfWords */
/* unused harmony export createConvertStringMethod */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return toKebabCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toSnakeCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toStartCase; });
// constants


var getArrayOfWords = function getArrayOfWords(string) {
  return string.split(__WEBPACK_IMPORTED_MODULE_0__stringConstants__["a" /* SPLIT_WORDS_REGEXP */]).reduce(function (words, word) {
    if (word.trim() === '') {
      return words;
    }

    var spacedWord = word.charAt(0) + word.slice(1).replace(/([A-Z])/g, ' $1');

    return words.concat(spacedWord.split(__WEBPACK_IMPORTED_MODULE_0__stringConstants__["a" /* SPLIT_WORDS_REGEXP */]));
  }, []);
};

var createConvertStringMethod = function createConvertStringMethod(fn) {
  return function (string) {
    var words = getArrayOfWords(string);

    return words.reduce(fn, '');
  };
};

/**
 * Converts string passed to camelCase spelling
 *
 * @param {any} string
 * @returns {string}
 */
var toCamelCase = createConvertStringMethod(function (camelCaseString, word) {
  return !camelCaseString ? word.toLowerCase() : '' + camelCaseString + (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
});

/**
 * Converts string passed to kebab-case spelling
 *
 * @param {any} string
 * @returns {string}
 */
var toKebabCase = createConvertStringMethod(function (kebabCaseString, word) {
  var lowerCaseWord = word.toLowerCase();

  return !kebabCaseString ? lowerCaseWord : kebabCaseString + '-' + lowerCaseWord;
});

/**
 * Converts string passed to snake_case spelling
 *
 * @param {any} string
 * @returns {string}
 */
var toSnakeCase = createConvertStringMethod(function (snakeCaseString, word) {
  var lowerCaseWord = word.toLowerCase();

  return !snakeCaseString ? lowerCaseWord : snakeCaseString + '_' + lowerCaseWord;
});

/**
 * Converts string passed to Start Case spelling
 *
 * @param {any} string
 * @returns {string}
 */
var toStartCase = createConvertStringMethod(function (startCaseString, word) {
  var startCaseWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  return !startCaseString ? startCaseWord : startCaseString + ' ' + startCaseWord;
});

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAllArray; });
/* unused harmony export isitNotArray */
/* unused harmony export isitAnyArray */
// utils



var isitArray = Array.isArray || function (object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Array');
};

var isitAllArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitArray);
var isitNotArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitArray);
var isitAnyArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitArray);

/* harmony default export */ __webpack_exports__["a"] = isitArray;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNaN__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllNumber; });
/* unused harmony export isitNotNumber */
/* unused harmony export isitAnyNumber */
// types


// utils


var isitNumber = function isitNumber(object) {
  return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitNaN__["a" /* default */])(object) && typeof object === 'number';
};

var isitAllNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitNumber);
var isitNotNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitNumber);
var isitAnyNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitNumber);

/* harmony default export */ __webpack_exports__["b"] = isitNumber;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitCamelCase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitCapitalized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitDataUrl__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitDoubleByte__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isitEndsWith__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isitHtml__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isitIncludes__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isitKebabCase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__isitLowerCase__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__isitPalindrome__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__isitSnakeCase__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__isitStartCase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__isitStartsWith__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__isitUpperCase__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
// string















var all = {
  camelCase: __WEBPACK_IMPORTED_MODULE_0__isitCamelCase__["a" /* isitAllCamelCase */],
  capitalized: __WEBPACK_IMPORTED_MODULE_1__isitCapitalized__["a" /* isitAllCapitalized */],
  dataUrl: __WEBPACK_IMPORTED_MODULE_2__isitDataUrl__["a" /* isitAllDataUrl */],
  doubleByte: __WEBPACK_IMPORTED_MODULE_3__isitDoubleByte__["a" /* isitAllDoubleByte */],
  html: __WEBPACK_IMPORTED_MODULE_5__isitHtml__["a" /* isitAllHtml */],
  kebabCase: __WEBPACK_IMPORTED_MODULE_7__isitKebabCase__["a" /* isitAllKebabCase */],
  lowerCase: __WEBPACK_IMPORTED_MODULE_8__isitLowerCase__["a" /* isitAllLowerCase */],
  palindrome: __WEBPACK_IMPORTED_MODULE_9__isitPalindrome__["a" /* isitAllPalindrome */],
  snakeCase: __WEBPACK_IMPORTED_MODULE_10__isitSnakeCase__["a" /* isitAllSnakeCase */],
  startCase: __WEBPACK_IMPORTED_MODULE_11__isitStartCase__["a" /* isitAllStartCase */],
  upperCase: __WEBPACK_IMPORTED_MODULE_13__isitUpperCase__["a" /* isitAllUpperCase */]
};

var any = {
  camelCase: __WEBPACK_IMPORTED_MODULE_0__isitCamelCase__["b" /* isitAnyCamelCase */],
  capitalized: __WEBPACK_IMPORTED_MODULE_1__isitCapitalized__["b" /* isitAnyCapitalized */],
  dataUrl: __WEBPACK_IMPORTED_MODULE_2__isitDataUrl__["b" /* isitAnyDataUrl */],
  doubleByte: __WEBPACK_IMPORTED_MODULE_3__isitDoubleByte__["b" /* isitAnyDoubleByte */],
  html: __WEBPACK_IMPORTED_MODULE_5__isitHtml__["b" /* isitAnyHtml */],
  kebabCase: __WEBPACK_IMPORTED_MODULE_7__isitKebabCase__["b" /* isitAnyKebabCase */],
  lowerCase: __WEBPACK_IMPORTED_MODULE_8__isitLowerCase__["b" /* isitAnyLowerCase */],
  palindrome: __WEBPACK_IMPORTED_MODULE_9__isitPalindrome__["b" /* isitAnyPalindrome */],
  snakeCase: __WEBPACK_IMPORTED_MODULE_10__isitSnakeCase__["b" /* isitAnySnakeCase */],
  startCase: __WEBPACK_IMPORTED_MODULE_11__isitStartCase__["b" /* isitAnyStartCase */],
  upperCase: __WEBPACK_IMPORTED_MODULE_13__isitUpperCase__["b" /* isitAnyUpperCase */]
};

var not = {
  camelCase: __WEBPACK_IMPORTED_MODULE_0__isitCamelCase__["c" /* isitNotCamelCase */],
  capitalized: __WEBPACK_IMPORTED_MODULE_1__isitCapitalized__["c" /* isitNotCapitalized */],
  dataUrl: __WEBPACK_IMPORTED_MODULE_2__isitDataUrl__["c" /* isitNotDataUrl */],
  doubleByte: __WEBPACK_IMPORTED_MODULE_3__isitDoubleByte__["c" /* isitNotDoubleByte */],
  endsWith: __WEBPACK_IMPORTED_MODULE_4__isitEndsWith__["a" /* isitNotEndsWith */],
  html: __WEBPACK_IMPORTED_MODULE_5__isitHtml__["c" /* isitNotHtml */],
  includes: __WEBPACK_IMPORTED_MODULE_6__isitIncludes__["a" /* isitNotIncludes */],
  kebabCase: __WEBPACK_IMPORTED_MODULE_7__isitKebabCase__["c" /* isitNotKebabCase */],
  lowerCase: __WEBPACK_IMPORTED_MODULE_8__isitLowerCase__["c" /* isitNotLowerCase */],
  palindrome: __WEBPACK_IMPORTED_MODULE_9__isitPalindrome__["c" /* isitNotPalindrome */],
  snakeCase: __WEBPACK_IMPORTED_MODULE_10__isitSnakeCase__["c" /* isitNotSnakeCase */],
  startCase: __WEBPACK_IMPORTED_MODULE_11__isitStartCase__["c" /* isitNotStartCase */],
  startsWith: __WEBPACK_IMPORTED_MODULE_12__isitStartsWith__["a" /* isitNotStartsWith */],
  upperCase: __WEBPACK_IMPORTED_MODULE_13__isitUpperCase__["c" /* isitNotUpperCase */]
};

/* harmony default export */ __webpack_exports__["default"] = {
  camelCase: __WEBPACK_IMPORTED_MODULE_0__isitCamelCase__["d" /* default */],
  capitalized: __WEBPACK_IMPORTED_MODULE_1__isitCapitalized__["d" /* default */],
  dataUrl: __WEBPACK_IMPORTED_MODULE_2__isitDataUrl__["d" /* default */],
  doubleByte: __WEBPACK_IMPORTED_MODULE_3__isitDoubleByte__["d" /* default */],
  endsWith: __WEBPACK_IMPORTED_MODULE_4__isitEndsWith__["b" /* default */],
  html: __WEBPACK_IMPORTED_MODULE_5__isitHtml__["d" /* default */],
  includes: __WEBPACK_IMPORTED_MODULE_6__isitIncludes__["b" /* default */],
  kebabCase: __WEBPACK_IMPORTED_MODULE_7__isitKebabCase__["d" /* default */],
  lowerCase: __WEBPACK_IMPORTED_MODULE_8__isitLowerCase__["d" /* default */],
  palindrome: __WEBPACK_IMPORTED_MODULE_9__isitPalindrome__["d" /* default */],
  snakeCase: __WEBPACK_IMPORTED_MODULE_10__isitSnakeCase__["d" /* default */],
  startCase: __WEBPACK_IMPORTED_MODULE_11__isitStartCase__["d" /* default */],
  startsWith: __WEBPACK_IMPORTED_MODULE_12__isitStartsWith__["b" /* default */],
  upperCase: __WEBPACK_IMPORTED_MODULE_13__isitUpperCase__["d" /* default */]
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EPSILON; });
/* unused harmony export NEGATIVE_INFINITY */
/* unused harmony export POSITIVE_INFINITY */
var EPSILON = Number.EPSILON || 2.220446049250313e-16;
var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_stringUtils__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotCamelCase; });
// types


// utils



var isitCamelCase = function isitCamelCase(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitString__["a" /* default */])(object) && object === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_stringUtils__["d" /* toCamelCase */])(object);
};

var isitAllCamelCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitCamelCase);
var isitAnyCamelCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitCamelCase);
var isitNotCamelCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitCamelCase);

/* harmony default export */ __webpack_exports__["d"] = isitCamelCase;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitEqual__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllCapitalized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyCapitalized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotCapitalized; });
// types



// utils


var isitCapitalized = function isitCapitalized(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitString__["a" /* default */])(object)) {
    return false;
  }

  var words = object.split(' ');
  var capitalizedWords = words.map(function (word) {
    return '' + word.charAt(0).toUpperCase() + word.slice(1);
  });

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitEqual__["a" /* default */])(words, capitalizedWords);
};

var isitAllCapitalized = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitCapitalized);
var isitAnyCapitalized = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAnyMethod */])(isitCapitalized);
var isitNotCapitalized = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitCapitalized);

/* harmony default export */ __webpack_exports__["d"] = isitCapitalized;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_stringConstants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllDataUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyDataUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotDataUrl; });
// constants


// types


// utils


var isDataUrlTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["d" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_stringConstants__["d" /* DATA_URL_REGEXP */]);

var isitDataUrl = function isitDataUrl(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitString__["a" /* default */])(object) && isDataUrlTest(object);
};

var isitAllDataUrl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitDataUrl);
var isitAnyDataUrl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAnyMethod */])(isitDataUrl);
var isitNotDataUrl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitDataUrl);

/* harmony default export */ __webpack_exports__["d"] = isitDataUrl;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNumber__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllDecimal; });
/* unused harmony export isitNotDecimal */
/* unused harmony export isitAnyDecimal */
// types


// utils


var isitDecimal = function isitDecimal(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitNumber__["b" /* default */])(object) && object % 1 !== 0;
};

var isitAllDecimal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitDecimal);
var isitNotDecimal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitDecimal);
var isitAnyDecimal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitDecimal);

/* unused harmony default export */ var _unused_webpack_default_export = isitDecimal;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_stringConstants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllDoubleByte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyDoubleByte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotDoubleByte; });
// constants


// types


// utils


var isDoubleByteTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["d" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_stringConstants__["c" /* DOUBLE_BYTE_REGEXP */]);

var isitDoubleByte = function isitDoubleByte(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitString__["a" /* default */])(object) && isDoubleByteTest(object);
};

var isitAllDoubleByte = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitDoubleByte);
var isitAnyDoubleByte = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAnyMethod */])(isitDoubleByte);
var isitNotDoubleByte = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitDoubleByte);

/* harmony default export */ __webpack_exports__["d"] = isitDoubleByte;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotEndsWith; });
// types


// utils


var isitEndsWith = function isitEndsWith(object, endingString) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitString__["b" /* isitAllString */])(object, endingString)) {
    return false;
  }

  var index = object.lastIndexOf(endingString);

  return ~index && index === object.length - endingString.length;
};

var isitNotEndsWith = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitEndsWith);

/* harmony default export */ __webpack_exports__["b"] = isitEndsWith;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arithmeticConstants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitArray__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitDecimal__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitMap__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isitNull__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isitNumber__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isitObject__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isitRegExp__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__isitSameType__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__isitSet__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__isitSymbol__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__isitUndefined__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__internal_functionUtils__ = __webpack_require__(0);
/* unused harmony export isitNotEqual */
// constants


// types













// utils


var getOwnPropertyNames = Object.getOwnPropertyNames;

var isitEqual = function isitEqual(object1, object2) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__isitSameType__["a" /* default */])(object1, object2)) {
    return false;
  }

  if (object1 === object2 || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__isitUndefined__["a" /* isitAllUndefined */])(object1, object2) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__isitNull__["a" /* isitAllNull */])(object1, object2)) {
    return true;
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__isitString__["b" /* isitAllString */])(object1, object2)) {
    return '' + object1 === '' + object2;
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isitDecimal__["a" /* isitAllDecimal */])(object1, object2)) {
    return Math.abs(object1 - object2) < __WEBPACK_IMPORTED_MODULE_0__internal_arithmeticConstants__["a" /* EPSILON */];
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__isitNumber__["a" /* isitAllNumber */])(object1, object2)) {
    return object1 === object2 && 1 / object1 === 1 / object2;
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__isitRegExp__["a" /* isitAllRegExp */])(object1, object2) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__isitSymbol__["a" /* isitAllSymbol */])(object1, object2)) {
    return object1.toString() === object2.toString();
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitArray__["b" /* isitAllArray */])(object1, object2)) {
    var length = object1.length;

    if (length !== object2.length) {
      return false;
    }

    var index = -1;

    while (++index < length) {
      if (!isitEqual(object1[index], object2[index])) {
        return false;
      }
    }

    return true;
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isitMap__["a" /* isitAllMap */])(object1, object2) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__isitSet__["a" /* isitAllSet */])(object1, object2)) {
    if (object1.size !== object2.size) {
      return false;
    }

    var keys = object1.keys(),
        keysIterator = keys.next(),
        key = void 0;

    while (!keysIterator.done) {
      key = keysIterator.value;

      if (!object2.has(key) || object1.get && object1.get(key) !== object2.get(key)) {
        return false;
      }

      keysIterator = keys.next();
    }

    return true;
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__isitObject__["a" /* isitAllObject */])(object1, object2)) {
    var object1Properties = getOwnPropertyNames(object1);
    var object2Properties = getOwnPropertyNames(object2);

    if (!isitEqual(object1Properties, object2Properties)) {
      return false;
    }

    var _length = object1Properties.length;

    var _index = -1;

    while (++_index < _length) {
      if (!isitEqual(object1Properties[_index], object2Properties[_index])) {
        return false;
      }
    }

    return true;
  }

  return false;
};

var isitNotEqual = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__internal_functionUtils__["c" /* createIsNotMethod */])(isitEqual);

/* harmony default export */ __webpack_exports__["a"] = isitEqual;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_stringConstants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotHtml; });
// constants


// types


// utils


var isHtmlTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["d" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_stringConstants__["b" /* HTML_REGEXP */]);

var isitHtml = function isitHtml(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitString__["a" /* default */])(object) && isHtmlTest(object);
};

var isitAllHtml = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitHtml);
var isitAnyHtml = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAnyMethod */])(isitHtml);
var isitNotHtml = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitHtml);

/* harmony default export */ __webpack_exports__["d"] = isitHtml;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitArray__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotIncludes; });
// types



// utils


var isitIncludes = function isitIncludes(object, item) {
  return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitArray__["a" /* default */])(object) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitString__["a" /* default */])(object) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitString__["a" /* default */])(item)) && !!~object.indexOf(item);
};

var isitNotIncludes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitIncludes);

/* harmony default export */ __webpack_exports__["b"] = isitIncludes;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_stringUtils__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllKebabCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyKebabCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotKebabCase; });
// types


// utils



var isitKebabCase = function isitKebabCase(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitString__["a" /* default */])(object) && object.toLowerCase() === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_stringUtils__["c" /* toKebabCase */])(object);
};

var isitAllKebabCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitKebabCase);
var isitAnyKebabCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitKebabCase);
var isitNotKebabCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitKebabCase);

/* harmony default export */ __webpack_exports__["d"] = isitKebabCase;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllLowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyLowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotLowerCase; });
// types


// utils


var isitLowerCase = function isitLowerCase(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitString__["a" /* default */])(object) && object === object.toLowerCase();
};

var isitAllLowerCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitLowerCase);
var isitAnyLowerCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitLowerCase);
var isitNotLowerCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitLowerCase);

/* harmony default export */ __webpack_exports__["d"] = isitLowerCase;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllMap; });
/* unused harmony export isitNotMap */
/* unused harmony export isitAnyMap */
// type



var isitMap = function isitMap(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Map');
};

var isitAllMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitMap);
var isitNotMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitMap);
var isitAnyMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitMap);

/* unused harmony default export */ var _unused_webpack_default_export = isitMap;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* unused harmony export isitAllNaN */
/* unused harmony export isitNotNaN */
/* unused harmony export isitAnyNaN */
// utils


var isitNaN = function isitNaN(object) {
  return object !== object;
};

var isitAllNaN = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitNaN);
var isitNotNaN = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitNaN);
var isitAnyNaN = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitNaN);

/* harmony default export */ __webpack_exports__["a"] = isitNaN;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllNull; });
/* unused harmony export isitAnyNull */
/* unused harmony export isitNotNull */
// utils


var isitNull = function isitNull(object) {
  return object === null;
};

var isitAllNull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitNull);
var isitAnyNull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitNull);
var isitNotNull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitNull);

/* unused harmony default export */ var _unused_webpack_default_export = isitNull;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllObject; });
/* unused harmony export isitNotObject */
/* unused harmony export isitAnyObject */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// utils


var isitObject = function isitObject(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object';
};

var isitAllObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitObject);
var isitNotObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitObject);
var isitAnyObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitObject);

/* unused harmony default export */ var _unused_webpack_default_export = isitObject;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllPalindrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyPalindrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotPalindrome; });
// types


// utils


var isitPalindrome = function isitPalindrome(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitString__["a" /* default */])(object)) {
    return false;
  }

  var spacelessString = object.replace(/\s/g, '');

  return spacelessString === spacelessString.split('').reverse().join('');
};

var isitAllPalindrome = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitPalindrome);
var isitAnyPalindrome = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitPalindrome);
var isitNotPalindrome = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitPalindrome);

/* harmony default export */ __webpack_exports__["d"] = isitPalindrome;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllRegExp; });
/* unused harmony export isitNotRegExp */
/* unused harmony export isitAnyRegExp */
// utils


var isitRegExp = function isitRegExp(object) {
  return object instanceof RegExp;
};

var isitAllRegExp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitRegExp);
var isitNotRegExp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitRegExp);
var isitAnyRegExp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitRegExp);

/* unused harmony default export */ var _unused_webpack_default_export = isitRegExp;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(4);
/* unused harmony export isitNotSameType */
// utils



var isitSameType = function isitSameType(object1, object2) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object1) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object2);
};

var isitNotSameType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitSameType);

/* harmony default export */ __webpack_exports__["a"] = isitSameType;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllSet; });
/* unused harmony export isitNotSet */
/* unused harmony export isitAnySet */
// type



var isitSet = function isitSet(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Set');
};

var isitAllSet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitSet);
var isitNotSet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitSet);
var isitAnySet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitSet);

/* unused harmony default export */ var _unused_webpack_default_export = isitSet;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_stringUtils__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllSnakeCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnySnakeCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotSnakeCase; });
// types


// utils



var isitSnakeCase = function isitSnakeCase(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitString__["a" /* default */])(object) && object.toLowerCase() === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_stringUtils__["b" /* toSnakeCase */])(object);
};

var isitAllSnakeCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitSnakeCase);
var isitAnySnakeCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitSnakeCase);
var isitNotSnakeCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitSnakeCase);

/* harmony default export */ __webpack_exports__["d"] = isitSnakeCase;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_stringUtils__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllStartCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyStartCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotStartCase; });
// types


// utils



var isitStartCase = function isitStartCase(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitString__["a" /* default */])(object) && object === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_stringUtils__["a" /* toStartCase */])(object);
};

var isitAllStartCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitStartCase);
var isitAnyStartCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitStartCase);
var isitNotStartCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitStartCase);

/* harmony default export */ __webpack_exports__["d"] = isitStartCase;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotStartsWith; });
// types


// utils


var isitStartsWith = function isitStartsWith(object, startingString) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitString__["b" /* isitAllString */])(object, startingString) && object.indexOf(startingString) === 0;
};

var isitNotStartsWith = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitStartsWith);

/* harmony default export */ __webpack_exports__["b"] = isitStartsWith;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllSymbol; });
/* unused harmony export isitNotSymbol */
/* unused harmony export isitAnySymbol */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// utils


var isitSymbol = function isitSymbol(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'symbol';
};

var isitAllSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitSymbol);
var isitNotSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitSymbol);
var isitAnySymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitSymbol);

/* unused harmony default export */ var _unused_webpack_default_export = isitSymbol;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllUndefined; });
/* unused harmony export isitAnyUndefined */
/* unused harmony export isitNotUndefined */
// utils


var isitUndefined = function isitUndefined(object) {
  return object === void 0;
};

var isitAllUndefined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitUndefined);
var isitAnyUndefined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitUndefined);
var isitNotUndefined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitUndefined);

/* unused harmony default export */ var _unused_webpack_default_export = isitUndefined;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitString__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllUpperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyUpperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotUpperCase; });
// types


// utils


var isitUpperCase = function isitUpperCase(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitString__["a" /* default */])(object) && object === object.toUpperCase();
};

var isitAllUpperCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitUpperCase);
var isitAnyUpperCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitUpperCase);
var isitNotUpperCase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitUpperCase);

/* harmony default export */ __webpack_exports__["d"] = isitUpperCase;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ })
/******/ ]);
});
//# sourceMappingURL=isit-string.js.map