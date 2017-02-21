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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createIsAllMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createIsNotMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createIsAnyMethod; });
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
/* unused harmony export isitAllNull */
/* unused harmony export isitAnyNull */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitNotNull; });
// utils


var isitNull = function isitNull(object) {
  return object === null;
};

var isitAllNull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitNull);
var isitAnyNull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsAnyMethod */])(isitNull);
var isitNotNull = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsNotMethod */])(isitNull);

/* harmony default export */ __webpack_exports__["a"] = isitNull;

/***/ }),
/* 2 */
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

var isitAllObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitObject);
var isitNotObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsNotMethod */])(isitObject);
var isitAnyObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsAnyMethod */])(isitObject);

/* harmony default export */ __webpack_exports__["a"] = isitObject;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNull__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitUndefined__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* unused harmony export isitAllExisty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotExisty; });
/* unused harmony export isitAnyExisty */
// types



// utils


var isitExisty = function isitExisty(object) {
  return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitNull__["a" /* default */])(object) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitUndefined__["a" /* default */])(object);
};

var isitAllExisty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitExisty);
var isitNotExisty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsNotMethod */])(isitExisty);
var isitAnyExisty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsAnyMethod */])(isitExisty);

/* harmony default export */ __webpack_exports__["b"] = isitExisty;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitDefinedProperty__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitDomNode__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitDomNodeList__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitElement__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isitJquery__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isitPropertyCount__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isitWindowObject__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
// object








var all = {
  domNode: __WEBPACK_IMPORTED_MODULE_1__isitDomNode__["a" /* isitAllDomNode */],
  domNodeList: __WEBPACK_IMPORTED_MODULE_2__isitDomNodeList__["a" /* isitAllDomNodeList */],
  element: __WEBPACK_IMPORTED_MODULE_3__isitElement__["a" /* isitAllElement */],
  jquery: __WEBPACK_IMPORTED_MODULE_4__isitJquery__["a" /* isitAllJquery */],
  windowObject: __WEBPACK_IMPORTED_MODULE_6__isitWindowObject__["a" /* isitAllWindowObject */]
};

var any = {
  domNode: __WEBPACK_IMPORTED_MODULE_1__isitDomNode__["b" /* isitAnyDomNode */],
  domNodeList: __WEBPACK_IMPORTED_MODULE_2__isitDomNodeList__["b" /* isitAnyDomNodeList */],
  element: __WEBPACK_IMPORTED_MODULE_3__isitElement__["b" /* isitAnyElement */],
  jquery: __WEBPACK_IMPORTED_MODULE_4__isitJquery__["a" /* isitAllJquery */],
  windowObject: __WEBPACK_IMPORTED_MODULE_6__isitWindowObject__["b" /* isitAnyWindowObject */]
};

var not = {
  definedProperty: __WEBPACK_IMPORTED_MODULE_0__isitDefinedProperty__["a" /* isitNotDefinedProperty */],
  domNode: __WEBPACK_IMPORTED_MODULE_1__isitDomNode__["c" /* isitNotDomNode */],
  domNodeList: __WEBPACK_IMPORTED_MODULE_2__isitDomNodeList__["c" /* isitNotDomNodeList */],
  element: __WEBPACK_IMPORTED_MODULE_3__isitElement__["c" /* isitNotElement */],
  jquery: __WEBPACK_IMPORTED_MODULE_4__isitJquery__["b" /* isitNotJquery */],
  propertyCount: __WEBPACK_IMPORTED_MODULE_5__isitPropertyCount__["a" /* isitNotPropertyCount */],
  windowObject: __WEBPACK_IMPORTED_MODULE_6__isitWindowObject__["c" /* isitNotWindowObject */]
};

/* harmony default export */ __webpack_exports__["default"] = {
  definedProperty: __WEBPACK_IMPORTED_MODULE_0__isitDefinedProperty__["b" /* default */],
  domNode: __WEBPACK_IMPORTED_MODULE_1__isitDomNode__["d" /* default */],
  domNodeList: __WEBPACK_IMPORTED_MODULE_2__isitDomNodeList__["d" /* default */],
  element: __WEBPACK_IMPORTED_MODULE_3__isitElement__["d" /* default */],
  jquery: __WEBPACK_IMPORTED_MODULE_4__isitJquery__["c" /* default */],
  propertyCount: __WEBPACK_IMPORTED_MODULE_5__isitPropertyCount__["b" /* default */],
  windowObject: __WEBPACK_IMPORTED_MODULE_6__isitWindowObject__["d" /* default */]
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNull__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitObject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotDefinedProperty; });
// types



// utils


var isitDefinedProperty = function isitDefinedProperty(object, property) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitObject__["a" /* default */])(object) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitNull__["a" /* default */])(object) && object.hasOwnProperty(property);
};

var isitNotDefinedProperty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsNotMethod */])(isitDefinedProperty);

/* harmony default export */ __webpack_exports__["b"] = isitDefinedProperty;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitExisty__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllDomNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotDomNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyDomNode; });
// types


// utils


var isitDomNode = function isitDomNode(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitExisty__["b" /* default */])(object) && object.nodeType > 0;
};

var isitAllDomNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createIsAllMethod */])(isitDomNode);
var isitNotDomNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsNotMethod */])(isitDomNode);
var isitAnyDomNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitDomNode);

/* harmony default export */ __webpack_exports__["d"] = isitDomNode;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllDomNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotDomNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyDomNodeList; });
// utils


var HAS_HTML_COLLECTION = typeof HTMLCollection === 'function';
var HAS_NODE_LIST = typeof NodeList === 'function';

var isitDomNodeList = function isitDomNodeList(object) {
  return HAS_HTML_COLLECTION && object instanceof HTMLCollection || HAS_NODE_LIST && object instanceof NodeList;
};

var isitAllDomNodeList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitDomNodeList);
var isitNotDomNodeList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsNotMethod */])(isitDomNodeList);
var isitAnyDomNodeList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsAnyMethod */])(isitDomNodeList);

/* harmony default export */ __webpack_exports__["d"] = isitDomNodeList;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNull__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitObject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitString__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyElement; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// types




// utils


var isitElement = function isitElement(object) {
  return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? object instanceof HTMLElement : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitObject__["a" /* default */])(object) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitNull__["b" /* isitNotNull */])(object) && object.nodeType === 1 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isitString__["a" /* default */])(object.nodeName);
};

var isitAllElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__["a" /* createIsAllMethod */])(isitElement);
var isitNotElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__["b" /* createIsNotMethod */])(isitElement);
var isitAnyElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__["c" /* createIsAnyMethod */])(isitElement);

/* harmony default export */ __webpack_exports__["d"] = isitElement;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* unused harmony export isitAllFunction */
/* unused harmony export isitNotFunction */
/* unused harmony export isitAnyFunction */
// utils


var isitFunction = function isitFunction(object) {
  return typeof object === 'function';
};

var isitAllFunction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitFunction);
var isitNotFunction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsNotMethod */])(isitFunction);
var isitAnyFunction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsAnyMethod */])(isitFunction);

/* harmony default export */ __webpack_exports__["a"] = isitFunction;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitExisty__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitFunction__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitNull__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitObject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllJquery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitNotJquery; });
/* unused harmony export isitAnyJquery */
// types





// utils


var isitJquery = function isitJquery(object) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitExisty__["a" /* isitNotExisty */])(object)) {
    return false;
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitFunction__["a" /* default */])(object)) {
    var $object = object();

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isitObject__["a" /* default */])($object) && !!$object.jquery;
  }

  return !!Object.getPrototypeOf(object).jquery;
};

var isitAllJquery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__["a" /* createIsAllMethod */])(isitJquery);
var isitNotJquery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__["b" /* createIsNotMethod */])(isitJquery);
var isitAnyJquery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__["c" /* createIsAnyMethod */])(isitJquery);

/* harmony default export */ __webpack_exports__["c"] = isitJquery;

/***/ }),
/* 11 */
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
var isitNotNaN = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsNotMethod */])(isitNaN);
var isitAnyNaN = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsAnyMethod */])(isitNaN);

/* harmony default export */ __webpack_exports__["a"] = isitNaN;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNaN__ = __webpack_require__(11);
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
var isitNotNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsNotMethod */])(isitNumber);
var isitAnyNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitNumber);

/* harmony default export */ __webpack_exports__["a"] = isitNumber;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNull__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitNumber__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitObject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotPropertyCount; });
// types




// utils


var isitPropertyCount = function isitPropertyCount(object, count) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isitObject__["a" /* default */])(object) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitNull__["a" /* default */])(object) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitNumber__["a" /* default */])(count)) {
    return false;
  }

  return Object.keys(object).length === count;
};

var isitNotPropertyCount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__["b" /* createIsNotMethod */])(isitPropertyCount);

/* harmony default export */ __webpack_exports__["b"] = isitPropertyCount;

/***/ }),
/* 14 */
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
var isitNotString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsNotMethod */])(isitString);
var isitAnyString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsAnyMethod */])(isitString);

/* harmony default export */ __webpack_exports__["a"] = isitString;

/***/ }),
/* 15 */
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

var isitAllUndefined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["a" /* createIsAllMethod */])(isitUndefined);
var isitAnyUndefined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["c" /* createIsAnyMethod */])(isitUndefined);
var isitNotUndefined = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["b" /* createIsNotMethod */])(isitUndefined);

/* harmony default export */ __webpack_exports__["a"] = isitUndefined;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitNull__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitObject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllWindowObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotWindowObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyWindowObject; });
// types



// utils


var isitWindowObject = function isitWindowObject(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitObject__["a" /* default */])(object) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isitNull__["a" /* default */])(object) && object.window === object;
};

var isitAllWindowObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createIsAllMethod */])(isitWindowObject);
var isitNotWindowObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsNotMethod */])(isitWindowObject);
var isitAnyWindowObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsAnyMethod */])(isitWindowObject);

/* harmony default export */ __webpack_exports__["d"] = isitWindowObject;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
});
//# sourceMappingURL=isit-object.js.map