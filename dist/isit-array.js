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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(5);
/* unused harmony export isitAllArray */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllSortedAsc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnySortedAsc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotSortedAsc; });
// types


// utils


var isitSortedAsc = function isitSortedAsc(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitArray__["a" /* default */])(object)) {
    return false;
  }

  var shallowClone = [].concat(object);
  var length = shallowClone.length;

  shallowClone.sort();

  var index = -1;

  while (++index < length) {
    if (object[index] !== shallowClone[index]) {
      return false;
    }
  }

  return true;
};

var isitAllSortedAsc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitSortedAsc);
var isitAnySortedAsc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitSortedAsc);
var isitNotSortedAsc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitSortedAsc);

/* harmony default export */ __webpack_exports__["d"] = isitSortedAsc;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllSortedDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnySortedDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotSortedDesc; });
// types


// utils


var isitSortedDesc = function isitSortedDesc(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitArray__["a" /* default */])(object)) {
    return false;
  }

  var shallowClone = [].concat(object);
  var length = shallowClone.length;

  shallowClone.sort().reverse();

  var index = -1;

  while (++index < length) {
    if (object[index] !== shallowClone[index]) {
      return false;
    }
  }

  return true;
};

var isitAllSortedDesc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitSortedDesc);
var isitAnySortedDesc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitSortedDesc);
var isitNotSortedDesc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitSortedDesc);

/* harmony default export */ __webpack_exports__["d"] = isitSortedDesc;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitSorted__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitSortedAsc__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitSortedDesc__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
// array




var all = {
  sorted: __WEBPACK_IMPORTED_MODULE_0__isitSorted__["a" /* isitAllSorted */],
  sortedAsc: __WEBPACK_IMPORTED_MODULE_1__isitSortedAsc__["a" /* isitAllSortedAsc */],
  sortedDesc: __WEBPACK_IMPORTED_MODULE_2__isitSortedDesc__["a" /* isitAllSortedDesc */]
};

var any = {
  sorted: __WEBPACK_IMPORTED_MODULE_0__isitSorted__["b" /* isitAnySorted */],
  sortedAsc: __WEBPACK_IMPORTED_MODULE_1__isitSortedAsc__["b" /* isitAnySortedAsc */],
  sortedDesc: __WEBPACK_IMPORTED_MODULE_2__isitSortedDesc__["b" /* isitAnySortedDesc */]
};

var not = {
  sorted: __WEBPACK_IMPORTED_MODULE_0__isitSorted__["c" /* isitNotSorted */],
  sortedAsc: __WEBPACK_IMPORTED_MODULE_1__isitSortedAsc__["c" /* isitNotSortedAsc */],
  sortedDesc: __WEBPACK_IMPORTED_MODULE_2__isitSortedDesc__["c" /* isitNotSortedDesc */]
};

/* harmony default export */ __webpack_exports__["default"] = {
  sorted: __WEBPACK_IMPORTED_MODULE_0__isitSorted__["d" /* default */],
  sortedAsc: __WEBPACK_IMPORTED_MODULE_1__isitSortedAsc__["d" /* default */],
  sortedDesc: __WEBPACK_IMPORTED_MODULE_2__isitSortedDesc__["d" /* default */]
};

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitSortedAsc__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitSortedDesc__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllSorted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnySorted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotSorted; });
// types



// utils


var isitSorted = function isitSorted(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitSortedAsc__["d" /* default */])(object) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitSortedDesc__["d" /* default */])(object);
};

var isitAllSorted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitSorted);
var isitAnySorted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAnyMethod */])(isitSorted);
var isitNotSorted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitSorted);

/* harmony default export */ __webpack_exports__["d"] = isitSorted;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
});
//# sourceMappingURL=isit-array.js.map