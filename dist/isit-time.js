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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAllDate; });
/* unused harmony export isitNotDate */
/* unused harmony export isitAnyDate */
// type



var isitDate = function isitDate(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["a" /* toString */])(object) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_typeUtils__["b" /* getObjectClass */])('Date');
};

var isitAllDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitDate);
var isitNotDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsNotMethod */])(isitDate);
var isitAnyDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsAnyMethod */])(isitDate);

/* harmony default export */ __webpack_exports__["a"] = isitDate;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotInDateRange; });
// types


// utils


var isitInDateRange = function isitInDateRange(object, minimumDate, maximumDate) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitDate__["b" /* isitAllDate */])(object, minimumDate, maximumDate)) {
    return false;
  }

  var objectTime = object.getTime();

  return objectTime >= minimumDate.getTime() && objectTime <= maximumDate.getTime();
};

var isitNotInDateRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitInDateRange);

/* harmony default export */ __webpack_exports__["b"] = isitInDateRange;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNaN__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* unused harmony export isitAllNumber */
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

/* harmony default export */ __webpack_exports__["a"] = isitNumber;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotSameDate; });
// types


// utils


var isitSameDate = function isitSameDate(object, day) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitDate__["b" /* isitAllDate */])(object, day)) {
    return false;
  }

  return object.toDateString() === day.toDateString();
};

var isitNotSameDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitSameDate);

/* harmony default export */ __webpack_exports__["b"] = isitSameDate;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DAY_STRINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MONTH_STRINGS; });
var DAY_STRINGS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

var MONTH_STRINGS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* unused harmony export isitAllString */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitDaylightSavingsTime__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitDayOfWeek__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitFuture__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitInDateRange__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isitInLastMonth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isitInLastWeek__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isitInLastYear__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isitInNextMonth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__isitInNextWeek__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__isitInNextYear__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__isitInQuarter__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__isitLeapYear__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__isitPast__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__isitSameDate__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__isitSameDay__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__isitSameMonth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__isitSameYear__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__isitToday__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__isitTomorrow__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__isitWeekday__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__isitWeekend__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__isitYesterday__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
// time























var all = {
  daylightSavingsTime: __WEBPACK_IMPORTED_MODULE_0__isitDaylightSavingsTime__["a" /* isitAllDaylightSavingsTime */],
  future: __WEBPACK_IMPORTED_MODULE_2__isitFuture__["a" /* isitAllFuture */],
  inLastMonth: __WEBPACK_IMPORTED_MODULE_4__isitInLastMonth__["a" /* isitAllInLastMonth */],
  inLastWeek: __WEBPACK_IMPORTED_MODULE_5__isitInLastWeek__["a" /* isitAllInLastWeek */],
  inLastYear: __WEBPACK_IMPORTED_MODULE_6__isitInLastYear__["a" /* isitAllInLastYear */],
  inNextMonth: __WEBPACK_IMPORTED_MODULE_7__isitInNextMonth__["a" /* isitAllInNextMonth */],
  inNextWeek: __WEBPACK_IMPORTED_MODULE_8__isitInNextWeek__["a" /* isitAllInNextWeek */],
  inNextYear: __WEBPACK_IMPORTED_MODULE_9__isitInNextYear__["a" /* isitAllInNextYear */],
  leapYear: __WEBPACK_IMPORTED_MODULE_11__isitLeapYear__["a" /* isitAllLeapYear */],
  past: __WEBPACK_IMPORTED_MODULE_12__isitPast__["a" /* isitAllPast */],
  today: __WEBPACK_IMPORTED_MODULE_17__isitToday__["a" /* isitAllToday */],
  tomorrow: __WEBPACK_IMPORTED_MODULE_18__isitTomorrow__["a" /* isitAllTomorrow */],
  weekday: __WEBPACK_IMPORTED_MODULE_19__isitWeekday__["a" /* isitAllWeekday */],
  weekend: __WEBPACK_IMPORTED_MODULE_20__isitWeekend__["a" /* isitAllWeekend */],
  yesterday: __WEBPACK_IMPORTED_MODULE_21__isitYesterday__["a" /* isitAllYesterday */]
};

var any = {
  daylightSavingsTime: __WEBPACK_IMPORTED_MODULE_0__isitDaylightSavingsTime__["b" /* isitAnyDaylightSavingsTime */],
  future: __WEBPACK_IMPORTED_MODULE_2__isitFuture__["b" /* isitAnyFuture */],
  inLastMonth: __WEBPACK_IMPORTED_MODULE_4__isitInLastMonth__["b" /* isitAnyInLastMonth */],
  inLastWeek: __WEBPACK_IMPORTED_MODULE_5__isitInLastWeek__["b" /* isitAnyInLastWeek */],
  inLastYear: __WEBPACK_IMPORTED_MODULE_6__isitInLastYear__["b" /* isitAnyInLastYear */],
  inNextMonth: __WEBPACK_IMPORTED_MODULE_7__isitInNextMonth__["b" /* isitAnyInNextMonth */],
  inNextWeek: __WEBPACK_IMPORTED_MODULE_8__isitInNextWeek__["b" /* isitAnyInNextWeek */],
  inNextYear: __WEBPACK_IMPORTED_MODULE_9__isitInNextYear__["b" /* isitAnyInNextYear */],
  leapYear: __WEBPACK_IMPORTED_MODULE_11__isitLeapYear__["b" /* isitAnyLeapYear */],
  past: __WEBPACK_IMPORTED_MODULE_12__isitPast__["b" /* isitAnyPast */],
  today: __WEBPACK_IMPORTED_MODULE_17__isitToday__["b" /* isitAnyToday */],
  tomorrow: __WEBPACK_IMPORTED_MODULE_18__isitTomorrow__["b" /* isitAnyTomorrow */],
  weekday: __WEBPACK_IMPORTED_MODULE_19__isitWeekday__["b" /* isitAnyWeekday */],
  weekend: __WEBPACK_IMPORTED_MODULE_20__isitWeekend__["b" /* isitAnyWeekend */],
  yesterday: __WEBPACK_IMPORTED_MODULE_21__isitYesterday__["b" /* isitAnyYesterday */]
};

var not = {
  daylightSavingsTime: __WEBPACK_IMPORTED_MODULE_0__isitDaylightSavingsTime__["c" /* isitNotDaylightSavingsTime */],
  dayOfWeek: __WEBPACK_IMPORTED_MODULE_1__isitDayOfWeek__["a" /* isitNotDayOfWeek */],
  future: __WEBPACK_IMPORTED_MODULE_2__isitFuture__["c" /* isitNotFuture */],
  inDateRange: __WEBPACK_IMPORTED_MODULE_3__isitInDateRange__["a" /* isitNotInDateRange */],
  inLastMonth: __WEBPACK_IMPORTED_MODULE_4__isitInLastMonth__["c" /* isitNotInLastMonth */],
  inLastWeek: __WEBPACK_IMPORTED_MODULE_5__isitInLastWeek__["c" /* isitNotInLastWeek */],
  inLastYear: __WEBPACK_IMPORTED_MODULE_6__isitInLastYear__["c" /* isitNotInLastYear */],
  inNextMonth: __WEBPACK_IMPORTED_MODULE_7__isitInNextMonth__["c" /* isitNotInNextMonth */],
  inNextWeek: __WEBPACK_IMPORTED_MODULE_8__isitInNextWeek__["c" /* isitNotInNextWeek */],
  inNextYear: __WEBPACK_IMPORTED_MODULE_9__isitInNextYear__["c" /* isitNotInNextYear */],
  inQuarter: __WEBPACK_IMPORTED_MODULE_10__isitInQuarter__["a" /* isitNotInQuarter */],
  leapYear: __WEBPACK_IMPORTED_MODULE_11__isitLeapYear__["c" /* isitNotLeapYear */],
  past: __WEBPACK_IMPORTED_MODULE_12__isitPast__["c" /* isitNotPast */],
  sameDate: __WEBPACK_IMPORTED_MODULE_13__isitSameDate__["a" /* isitNotSameDate */],
  sameDay: __WEBPACK_IMPORTED_MODULE_14__isitSameDay__["a" /* isitNotSameDay */],
  sameMonth: __WEBPACK_IMPORTED_MODULE_15__isitSameMonth__["a" /* isitNotSameMonth */],
  sameYear: __WEBPACK_IMPORTED_MODULE_16__isitSameYear__["a" /* isitNotSameYear */],
  today: __WEBPACK_IMPORTED_MODULE_17__isitToday__["c" /* isitNotToday */],
  tomorrow: __WEBPACK_IMPORTED_MODULE_18__isitTomorrow__["c" /* isitNotTomorrow */],
  weekday: __WEBPACK_IMPORTED_MODULE_19__isitWeekday__["c" /* isitNotWeekday */],
  weekend: __WEBPACK_IMPORTED_MODULE_20__isitWeekend__["c" /* isitNotWeekend */],
  yesterday: __WEBPACK_IMPORTED_MODULE_21__isitYesterday__["c" /* isitNotYesterday */]
};

/* harmony default export */ __webpack_exports__["default"] = {
  daylightSavingsTime: __WEBPACK_IMPORTED_MODULE_0__isitDaylightSavingsTime__["d" /* default */],
  dayOfWeek: __WEBPACK_IMPORTED_MODULE_1__isitDayOfWeek__["b" /* default */],
  future: __WEBPACK_IMPORTED_MODULE_2__isitFuture__["d" /* default */],
  inDateRange: __WEBPACK_IMPORTED_MODULE_3__isitInDateRange__["b" /* default */],
  inLastMonth: __WEBPACK_IMPORTED_MODULE_4__isitInLastMonth__["d" /* default */],
  inLastWeek: __WEBPACK_IMPORTED_MODULE_5__isitInLastWeek__["d" /* default */],
  inLastYear: __WEBPACK_IMPORTED_MODULE_6__isitInLastYear__["d" /* default */],
  inNextMonth: __WEBPACK_IMPORTED_MODULE_7__isitInNextMonth__["d" /* default */],
  inNextWeek: __WEBPACK_IMPORTED_MODULE_8__isitInNextWeek__["d" /* default */],
  inNextYear: __WEBPACK_IMPORTED_MODULE_9__isitInNextYear__["d" /* default */],
  inQuarter: __WEBPACK_IMPORTED_MODULE_10__isitInQuarter__["b" /* default */],
  leapYear: __WEBPACK_IMPORTED_MODULE_11__isitLeapYear__["d" /* default */],
  past: __WEBPACK_IMPORTED_MODULE_12__isitPast__["d" /* default */],
  sameDate: __WEBPACK_IMPORTED_MODULE_13__isitSameDate__["b" /* default */],
  sameDay: __WEBPACK_IMPORTED_MODULE_14__isitSameDay__["b" /* default */],
  sameMonth: __WEBPACK_IMPORTED_MODULE_15__isitSameMonth__["b" /* default */],
  sameYear: __WEBPACK_IMPORTED_MODULE_16__isitSameYear__["b" /* default */],
  today: __WEBPACK_IMPORTED_MODULE_17__isitToday__["d" /* default */],
  tomorrow: __WEBPACK_IMPORTED_MODULE_18__isitTomorrow__["d" /* default */],
  weekday: __WEBPACK_IMPORTED_MODULE_19__isitWeekday__["d" /* default */],
  weekend: __WEBPACK_IMPORTED_MODULE_20__isitWeekend__["d" /* default */],
  yesterday: __WEBPACK_IMPORTED_MODULE_21__isitYesterday__["d" /* default */]
};

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_timeConstants__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitNumber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitString__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotDayOfWeek; });
// constants


// types




// utils


var isitDayOfWeek = function isitDayOfWeek(object, day) {
  var dayNumber = +day;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitDate__["a" /* default */])(object) && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isitString__["a" /* default */])(day) && day.toLowerCase() === __WEBPACK_IMPORTED_MODULE_0__internal_timeConstants__["b" /* DAY_STRINGS */][object.getDay()] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isitNumber__["a" /* default */])(dayNumber) && dayNumber === object.getDay());
};

var isitNotDayOfWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__["c" /* createIsNotMethod */])(isitDayOfWeek);

/* harmony default export */ __webpack_exports__["b"] = isitDayOfWeek;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllDaylightSavingsTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyDaylightSavingsTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotDaylightSavingsTime; });
// types


// utils


var isitDaylightSavingsTime = function isitDaylightSavingsTime(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitDate__["a" /* default */])(object)) {
    return false;
  }

  var objectYear = object.getFullYear();
  var january = new Date(objectYear, 0, 1);
  var july = new Date(objectYear, 6, 1);

  return object.getTimezoneOffset() < Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
};

var isitAllDaylightSavingsTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitDaylightSavingsTime);
var isitAnyDaylightSavingsTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitDaylightSavingsTime);
var isitNotDaylightSavingsTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitDaylightSavingsTime);

/* harmony default export */ __webpack_exports__["d"] = isitDaylightSavingsTime;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllFuture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyFuture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotFuture; });
// types


// utils


var isitFuture = function isitFuture(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitDate__["a" /* default */])(object) && object.valueOf() > Date.now();
};

var isitAllFuture = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitFuture);
var isitAnyFuture = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitFuture);
var isitNotFuture = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitFuture);

/* harmony default export */ __webpack_exports__["d"] = isitFuture;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitInDateRange__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllInLastMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyInLastMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotInLastMonth; });
// time


// types


// utils


var isitInLastMonth = function isitInLastMonth(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitDate__["a" /* default */])(object)) {
    return false;
  }

  var today = new Date();
  var oneMonthAgo = new Date(today).setMonth(today.getMonth() - 1);

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitInDateRange__["b" /* default */])(object, oneMonthAgo, today);
};

var isitAllInLastMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitInLastMonth);
var isitAnyInLastMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAnyMethod */])(isitInLastMonth);
var isitNotInLastMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitInLastMonth);

/* harmony default export */ __webpack_exports__["d"] = isitInLastMonth;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitInDateRange__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllInLastWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyInLastWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotInLastWeek; });
// time


// types


// utils


var isitInLastWeek = function isitInLastWeek(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitDate__["a" /* default */])(object)) {
    return false;
  }

  var today = new Date();
  var oneWeekAgo = new Date(today).setDate(today.getDate() - 7);

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitInDateRange__["b" /* default */])(object, oneWeekAgo, today);
};

var isitAllInLastWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitInLastWeek);
var isitAnyInLastWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAnyMethod */])(isitInLastWeek);
var isitNotInLastWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitInLastWeek);

/* harmony default export */ __webpack_exports__["d"] = isitInLastWeek;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitInDateRange__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllInLastYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyInLastYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotInLastYear; });
// time


// types


// utils


var isitInLastYear = function isitInLastYear(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitDate__["a" /* default */])(object)) {
    return false;
  }

  var today = new Date();
  var oneYearAgo = new Date(today).setFullYear(today.getFullYear() - 1);

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitInDateRange__["b" /* default */])(object, oneYearAgo, today);
};

var isitAllInLastYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitInLastYear);
var isitAnyInLastYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAnyMethod */])(isitInLastYear);
var isitNotInLastYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitInLastYear);

/* harmony default export */ __webpack_exports__["d"] = isitInLastYear;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitInDateRange__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllInNextMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyInNextMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotInNextMonth; });
// time


// types


// utils


var isitInNextMonth = function isitInNextMonth(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitDate__["a" /* default */])(object)) {
    return false;
  }

  var today = new Date();
  var oneMonthFromNow = new Date(today).setMonth(today.getMonth() + 1);

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitInDateRange__["b" /* default */])(object, today, oneMonthFromNow);
};

var isitAllInNextMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitInNextMonth);
var isitAnyInNextMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAnyMethod */])(isitInNextMonth);
var isitNotInNextMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitInNextMonth);

/* harmony default export */ __webpack_exports__["d"] = isitInNextMonth;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitInDateRange__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllInNextWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyInNextWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotInNextWeek; });
// time


// types


// utils


var isitInNextWeek = function isitInNextWeek(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitDate__["a" /* default */])(object)) {
    return false;
  }

  var today = new Date();
  var oneWeekFromNow = new Date(today).setDate(today.getDate() + 7);

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitInDateRange__["b" /* default */])(object, oneWeekFromNow, today);
};

var isitAllInNextWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitInNextWeek);
var isitAnyInNextWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAnyMethod */])(isitInNextWeek);
var isitNotInNextWeek = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitInNextWeek);

/* harmony default export */ __webpack_exports__["d"] = isitInNextWeek;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitInDateRange__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllInNextYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyInNextYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotInNextYear; });
// time


// types


// utils


var isitInNextYear = function isitInNextYear(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitDate__["a" /* default */])(object)) {
    return false;
  }

  var today = new Date();
  var oneYearFromNow = new Date(today).setFullYear(today.getFullYear() + 1);

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitInDateRange__["b" /* default */])(object, today, oneYearFromNow);
};

var isitAllInNextYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitInNextYear);
var isitAnyInNextYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAnyMethod */])(isitInNextYear);
var isitNotInNextYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitInNextYear);

/* harmony default export */ __webpack_exports__["d"] = isitInNextYear;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitNumber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotInQuarter; });
// types



// utils


var isitInQuarter = function isitInQuarter(object, quarterNumber) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitDate__["a" /* default */])(object) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitNumber__["a" /* default */])(quarterNumber) && quarterNumber === ~~((object.getQuarter() + 3) / 3);
};

var isitNotInQuarter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitInQuarter);

/* harmony default export */ __webpack_exports__["b"] = isitInQuarter;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNumber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllLeapYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyLeapYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotLeapYear; });
// types


// utils


var isitLeapYear = function isitLeapYear(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitNumber__["a" /* default */])(object) && (object % 4 === 0 && object % 100 !== 0 || object % 400 === 0);
};

var isitAllLeapYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitLeapYear);
var isitAnyLeapYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitLeapYear);
var isitNotLeapYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitLeapYear);

/* harmony default export */ __webpack_exports__["d"] = isitLeapYear;

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllPast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyPast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotPast; });
// types


// utils


var isitPast = function isitPast(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitDate__["a" /* default */])(object) && object.valueOf() < Date.now();
};

var isitAllPast = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitPast);
var isitAnyPast = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitPast);
var isitNotPast = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitPast);

/* harmony default export */ __webpack_exports__["d"] = isitPast;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitNumber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotSameDay; });
// types



// utils


var isitSameDay = function isitSameDay(object, day) {
  var dayNumber = +day;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitDate__["a" /* default */])(object) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitNumber__["a" /* default */])(dayNumber) && dayNumber === object.getDate();
};

var isitNotSameDay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitSameDay);

/* harmony default export */ __webpack_exports__["b"] = isitSameDay;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_timeConstants__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitNumber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitString__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotSameMonth; });
// constants


// types




// utils


var isitSameMonth = function isitSameMonth(object, month) {
  var monthNumber = +month;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitDate__["a" /* default */])(object) && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isitString__["a" /* default */])(month) && month.toLowerCase() === __WEBPACK_IMPORTED_MODULE_0__internal_timeConstants__["a" /* MONTH_STRINGS */][object.getMonth()] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isitNumber__["a" /* default */])(monthNumber) && monthNumber === object.getMonth());
};

var isitNotSameMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__["c" /* createIsNotMethod */])(isitSameMonth);

/* harmony default export */ __webpack_exports__["b"] = isitSameMonth;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitNumber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotSameYear; });
// types



// utils


var isitSameYear = function isitSameYear(object, year) {
  var yearNumber = +year;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitDate__["a" /* default */])(object) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitNumber__["a" /* default */])(yearNumber) && yearNumber === object.getFullYear();
};

var isitNotSameYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsNotMethod */])(isitSameYear);

/* harmony default export */ __webpack_exports__["b"] = isitSameYear;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitSameDate__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotToday; });
// types


// utils


var isitToday = function isitToday(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitSameDate__["b" /* default */])(object, new Date());
};

var isitAllToday = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitToday);
var isitAnyToday = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitToday);
var isitNotToday = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitToday);

/* harmony default export */ __webpack_exports__["d"] = isitToday;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitSameDate__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllTomorrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyTomorrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotTomorrow; });
// types


// utils


var isitTomorrow = function isitTomorrow(object) {
  var today = new Date();

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitSameDate__["b" /* default */])(object, new Date(today.setDate(today.getDate() + 1)));
};

var isitAllTomorrow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitTomorrow);
var isitAnyTomorrow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitTomorrow);
var isitNotTomorrow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitTomorrow);

/* harmony default export */ __webpack_exports__["d"] = isitTomorrow;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllWeekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyWeekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotWeekday; });
// types


// utils


var isitWeekday = function isitWeekday(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitDate__["a" /* default */])(object)) {
    return false;
  }

  var day = object.getDay();

  return day !== 0 && day !== 6;
};

var isitAllWeekday = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitWeekday);
var isitAnyWeekday = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitWeekday);
var isitNotWeekday = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitWeekday);

/* harmony default export */ __webpack_exports__["d"] = isitWeekday;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitDate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllWeekend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyWeekend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotWeekend; });
// types


// utils


var isitWeekend = function isitWeekend(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitDate__["a" /* default */])(object)) {
    return false;
  }

  var day = object.getDay();

  return day === 0 && day === 6;
};

var isitAllWeekend = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitWeekend);
var isitAnyWeekend = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitWeekend);
var isitNotWeekend = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitWeekend);

/* harmony default export */ __webpack_exports__["d"] = isitWeekend;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitSameDate__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllYesterday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyYesterday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotYesterday; });
// types


// utils


var isitYesterday = function isitYesterday(object) {
  var today = new Date();

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitSameDate__["b" /* default */])(object, new Date(today.setDate(today.getDate() - 1)));
};

var isitAllYesterday = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitYesterday);
var isitAnyYesterday = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAnyMethod */])(isitYesterday);
var isitNotYesterday = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsNotMethod */])(isitYesterday);

/* harmony default export */ __webpack_exports__["d"] = isitYesterday;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ })
/******/ ]);
});
//# sourceMappingURL=isit-time.js.map