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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createIsAllMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createIsNotMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createIsAnyMethod; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return HAS_WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NAVIGATOR; });
/* unused harmony export NAVIGATOR_IN_WINDOW */
/* unused harmony export getNavigatorPropertyIfExists */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return USER_AGENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return VENDOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return APP_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return ANDROID_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return APPLE_COMPUTER_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return APPLE_WEBKIT_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return BB10_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return BLACKBERRY_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return CHROME_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return CHROME_OR_CHROMIUM_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return EDGE_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return FIREFOX_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return GECKO_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return GOOGLE_INC_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return IPAD_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return IPHONE_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return IPOD_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LIKE_GECKO_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LINUX_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return MAC_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return MOBILE_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return MSIE_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return OPERA_LEGACY_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return OPERA_MODERN_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PHONE_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return RV11_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SAFARI_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOUCH_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TRIDENT_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return UNIX_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WIN_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return WINDOWS_NT_REGEXP; });
var HAS_WINDOW = typeof window !== 'undefined';
var NAVIGATOR = HAS_WINDOW ? window.navigator : {};
var NAVIGATOR_IN_WINDOW = HAS_WINDOW && 'navigator' in window;

/**
 * Returns property from navigator object exists, else returns false
 *
 * @param {string} property
 * @returns {boolean|string}
 */
var getNavigatorPropertyIfExists = function getNavigatorPropertyIfExists(property) {
  return NAVIGATOR_IN_WINDOW && property in navigator && navigator[property].toLowerCase();
};

var USER_AGENT = getNavigatorPropertyIfExists('userAgent');
var VENDOR = getNavigatorPropertyIfExists('vendor');
var APP_VERSION = getNavigatorPropertyIfExists('appVersion');
var ANDROID_REGEXP = /android/i;
var APPLE_COMPUTER_REGEXP = /apple computer/i;
var APPLE_WEBKIT_REGEXP = /applewebkit/i;
var BB10_REGEXP = /BB10/i;
var BLACKBERRY_REGEXP = /blackberry/i;
var CHROME_REGEXP = /chrome/i;
var CHROME_OR_CHROMIUM_REGEXP = /chrome|chromium/i;
var EDGE_REGEXP = /edge/i;
var FIREFOX_REGEXP = /firefox/i;
var GECKO_REGEXP = /gecko/i;
var GOOGLE_INC_REGEXP = /google inc/i;
var IPAD_REGEXP = /ipad/i;
var IPHONE_REGEXP = /iphone/i;
var IPOD_REGEXP = /ipod/i;
var LIKE_GECKO_REGEXP = /like gecko/i;
var LINUX_REGEXP = /linux/i;
var MAC_REGEXP = /mac/i;
var MOBILE_REGEXP = /mobile/i;
var MSIE_REGEXP = /msie/i;
var OPERA_LEGACY_REGEXP = /^Opera\//;
var OPERA_MODERN_REGEXP = /\x20OPR\//;
var PHONE_REGEXP = /phone/i;
var RV11_REGEXP = /rv:11/;
var SAFARI_REGEXP = /safari/i;
var TOUCH_REGEXP = /touch/i;
var TRIDENT_REGEXP = /trident/i;
var UNIX_REGEXP = /X11/;
var WIN_REGEXP = /win/i;
var WINDOWS_NT_REGEXP = /windows nt/i;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotAndroid; });
// constants


// utils


var isAndroidTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["H" /* ANDROID_REGEXP */]);

var isitAndroid = function isitAndroid() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isAndroidTest(userAgent);
};

var isitAllAndroid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitAndroid);
var isitAnyAndroid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitAndroid);
var isitNotAndroid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitAndroid);

/* harmony default export */ __webpack_exports__["d"] = isitAndroid;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllIpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyIpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotIpad; });
// constants


// utils


var isIpadTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["t" /* IPAD_REGEXP */]);

var isitIpad = function isitIpad() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isIpadTest(userAgent);
};

var isitAllIpad = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitIpad);
var isitAnyIpad = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitIpad);
var isitNotIpad = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitIpad);

/* harmony default export */ __webpack_exports__["d"] = isitIpad;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllIphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyIphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotIphone; });
// constants


// utils


var isIphoneTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["r" /* IPHONE_REGEXP */]);
var isIpodTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["s" /* IPOD_REGEXP */]);

var isitIphone = function isitIphone() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isIphoneTest(userAgent) && !isIpodTest(userAgent);
};

var isitAllIphone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitIphone);
var isitAnyIphone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitIphone);
var isitNotIphone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitIphone);

/* harmony default export */ __webpack_exports__["d"] = isitIphone;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllIpod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyIpod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotIpod; });
// constants


// utils


var isIpodTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["s" /* IPOD_REGEXP */]);

var isitIpod = function isitIpod() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isIpodTest(userAgent);
};

var isitAllIpod = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitIpod);
var isitAnyIpod = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitIpod);
var isitNotIpod = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitIpod);

/* harmony default export */ __webpack_exports__["d"] = isitIpod;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotWindows; });
// constants


// utils


var isWindowsTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["f" /* WIN_REGEXP */]);

var isitWindows = function isitWindows() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$appVersion = _ref.appVersion,
      appVersion = _ref$appVersion === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["c" /* APP_VERSION */] : _ref$appVersion;

  return isWindowsTest(appVersion);
};

var isitAllWindows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitWindows);
var isitAnyWindows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitWindows);
var isitNotWindows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitWindows);

/* harmony default export */ __webpack_exports__["d"] = isitWindows;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitWindows__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllWindowsPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyWindowsPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotWindowsPhone; });
// constants


// environment


// utils


var isPhoneTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["e" /* PHONE_REGEXP */]);

var isitWindowsPhone = function isitWindowsPhone() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$appVersion = _ref.appVersion,
      appVersion = _ref$appVersion === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["c" /* APP_VERSION */] : _ref$appVersion,
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitWindows__["d" /* default */])({ appVersion: appVersion, userAgent: userAgent }) && isPhoneTest(appVersion);
};

var isitAllWindowsPhone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAllMethod */])(isitWindowsPhone);
var isitAnyWindowsPhone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsAnyMethod */])(isitWindowsPhone);
var isitNotWindowsPhone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["d" /* createIsNotMethod */])(isitWindowsPhone);

/* harmony default export */ __webpack_exports__["d"] = isitWindowsPhone;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitAndroid__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllAndroidPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyAndroidPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotAndroidPhone; });
// constants


// environment


// utils


var isMobileTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["G" /* MOBILE_REGEXP */]);

var isitAndroidPhone = function isitAndroidPhone() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitAndroid__["d" /* default */])({ userAgent: userAgent }) && isMobileTest(userAgent);
};

var isitAllAndroidPhone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAllMethod */])(isitAndroidPhone);
var isitAnyAndroidPhone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsAnyMethod */])(isitAndroidPhone);
var isitNotAndroidPhone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["d" /* createIsNotMethod */])(isitAndroidPhone);

/* harmony default export */ __webpack_exports__["d"] = isitAndroidPhone;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitAndroid__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllAndroidTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyAndroidTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotAndroidTablet; });
// constants


// environment


// utils


var isMobileTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["G" /* MOBILE_REGEXP */]);

var isitAndroidTablet = function isitAndroidTablet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitAndroid__["d" /* default */])({ userAgent: userAgent }) && !isMobileTest(userAgent);
};

var isitAllAndroidTablet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAllMethod */])(isitAndroidTablet);
var isitAnyAndroidTablet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsAnyMethod */])(isitAndroidTablet);
var isitNotAndroidTablet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["d" /* createIsNotMethod */])(isitAndroidTablet);

/* harmony default export */ __webpack_exports__["d"] = isitAndroidTablet;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllBlackberry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyBlackberry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotBlackberry; });
// constants


// utils


var isBB10Test = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["E" /* BB10_REGEXP */]);
var isBlackberryTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["F" /* BLACKBERRY_REGEXP */]);

var isitBlackberry = function isitBlackberry() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isBlackberryTest(userAgent) || isBB10Test(userAgent);
};

var isitAllBlackberry = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitBlackberry);
var isitAnyBlackberry = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitBlackberry);
var isitNotBlackberry = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitBlackberry);

/* harmony default export */ __webpack_exports__["d"] = isitBlackberry;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotEdge; });
// constants


// utils


var isEdgeTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["A" /* EDGE_REGEXP */]);

var isitEdge = function isitEdge() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isEdgeTest(userAgent);
};

var isitAllEdge = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitEdge);
var isitAnyEdge = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitEdge);
var isitNotEdge = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitEdge);

/* harmony default export */ __webpack_exports__["d"] = isitEdge;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllIe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyIe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotIe; });
// constants


// utils


var isMsieTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["u" /* MSIE_REGEXP */]);
var isRv11Test = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["v" /* RV11_REGEXP */]);
var isWindowsNtTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["w" /* WINDOWS_NT_REGEXP */]);

var isitIe = function isitIe() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isMsieTest(userAgent) || isWindowsNtTest(userAgent) && isRv11Test(userAgent);
};

var isitAllIe = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitIe);
var isitAnyIe = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitIe);
var isitNotIe = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitIe);

/* harmony default export */ __webpack_exports__["d"] = isitIe;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllOnline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyOnline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotOnline; });
// constants


// utils


var isitOnline = function isitOnline() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      onLine = _ref.onLine;

  return !!onLine;
};

var isitAllOnline = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitOnline);
var isitAnyOnline = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitOnline);
var isitNotOnline = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitOnline);

/* harmony default export */ __webpack_exports__["d"] = isitOnline;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitWindows__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitWindowsPhone__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllWindowsTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyWindowsTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotWindowsTablet; });
// constants


// environment



// utils


var isTouchTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["a" /* TOUCH_REGEXP */]);

var isitWindowsTablet = function isitWindowsTablet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$appVersion = _ref.appVersion,
      appVersion = _ref$appVersion === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["c" /* APP_VERSION */] : _ref$appVersion,
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitWindows__["d" /* default */])({ appVersion: appVersion, userAgent: userAgent }) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isitWindowsPhone__["d" /* default */])({ appVersion: appVersion, userAgent: userAgent }) && isTouchTest(appVersion);
};

var isitAllWindowsTablet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__["b" /* createIsAllMethod */])(isitWindowsTablet);
var isitAnyWindowsTablet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__["c" /* createIsAnyMethod */])(isitWindowsTablet);
var isitNotWindowsTablet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__["d" /* createIsNotMethod */])(isitWindowsTablet);

/* harmony default export */ __webpack_exports__["d"] = isitWindowsTablet;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isitAndroid__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitAndroidPhone__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitAndroidTablet__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitBlackberry__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isitBlink__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isitBrowser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isitChrome__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isitEdge__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__isitFirefox__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__isitGecko__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__isitIe__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__isitIeVersion__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__isitIos__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__isitIpad__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__isitIpod__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__isitIphone__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__isitLinux__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__isitMac__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__isitMobile__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__isitOffline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__isitOnline__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__isitOpera__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__isitPresto__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__isitSafari__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__isitServer__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__isitTablet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__isitTouchDevice__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__isitTrident__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__isitWebkit__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__isitWindows__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__isitWindowsPhone__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__isitWindowsTablet__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
// environment

































var all = {
  android: __WEBPACK_IMPORTED_MODULE_0__isitAndroid__["a" /* isitAllAndroid */],
  androidPhone: __WEBPACK_IMPORTED_MODULE_1__isitAndroidPhone__["a" /* isitAllAndroidPhone */],
  androidTablet: __WEBPACK_IMPORTED_MODULE_2__isitAndroidTablet__["a" /* isitAllAndroidTablet */],
  blackberry: __WEBPACK_IMPORTED_MODULE_3__isitBlackberry__["a" /* isitAllBlackberry */],
  blink: __WEBPACK_IMPORTED_MODULE_4__isitBlink__["a" /* isitAllBlink */],
  chrome: __WEBPACK_IMPORTED_MODULE_6__isitChrome__["a" /* isitAllChrome */],
  edge: __WEBPACK_IMPORTED_MODULE_7__isitEdge__["a" /* isitAllEdge */],
  firefox: __WEBPACK_IMPORTED_MODULE_8__isitFirefox__["a" /* isitAllFirefox */],
  gecko: __WEBPACK_IMPORTED_MODULE_9__isitGecko__["a" /* isitAllGecko */],
  ie: __WEBPACK_IMPORTED_MODULE_10__isitIe__["a" /* isitAllIe */],
  ios: __WEBPACK_IMPORTED_MODULE_12__isitIos__["a" /* isitAllIos */],
  ipad: __WEBPACK_IMPORTED_MODULE_13__isitIpad__["a" /* isitAllIpad */],
  ipod: __WEBPACK_IMPORTED_MODULE_14__isitIpod__["a" /* isitAllIpod */],
  iphone: __WEBPACK_IMPORTED_MODULE_15__isitIphone__["a" /* isitAllIphone */],
  linux: __WEBPACK_IMPORTED_MODULE_16__isitLinux__["a" /* isitAllLinux */],
  mac: __WEBPACK_IMPORTED_MODULE_17__isitMac__["a" /* isitAllMac */],
  mobile: __WEBPACK_IMPORTED_MODULE_18__isitMobile__["a" /* isitAllMobile */],
  offline: __WEBPACK_IMPORTED_MODULE_19__isitOffline__["a" /* isitAllOffline */],
  online: __WEBPACK_IMPORTED_MODULE_20__isitOnline__["a" /* isitAllOnline */],
  opera: __WEBPACK_IMPORTED_MODULE_21__isitOpera__["a" /* isitAllOpera */],
  presto: __WEBPACK_IMPORTED_MODULE_22__isitPresto__["a" /* isitAllPresto */],
  safari: __WEBPACK_IMPORTED_MODULE_23__isitSafari__["a" /* isitAllSafari */],
  tablet: __WEBPACK_IMPORTED_MODULE_25__isitTablet__["a" /* isitAllTablet */],
  trident: __WEBPACK_IMPORTED_MODULE_27__isitTrident__["a" /* isitAllTrident */],
  webkit: __WEBPACK_IMPORTED_MODULE_28__isitWebkit__["a" /* isitAllWebkit */],
  windows: __WEBPACK_IMPORTED_MODULE_29__isitWindows__["a" /* isitAllWindows */],
  windowsPhone: __WEBPACK_IMPORTED_MODULE_30__isitWindowsPhone__["a" /* isitAllWindowsPhone */],
  windowsTablet: __WEBPACK_IMPORTED_MODULE_31__isitWindowsTablet__["a" /* isitAllWindowsTablet */]
};

var any = {
  android: __WEBPACK_IMPORTED_MODULE_0__isitAndroid__["b" /* isitAnyAndroid */],
  androidPhone: __WEBPACK_IMPORTED_MODULE_1__isitAndroidPhone__["b" /* isitAnyAndroidPhone */],
  androidTablet: __WEBPACK_IMPORTED_MODULE_2__isitAndroidTablet__["b" /* isitAnyAndroidTablet */],
  blackberry: __WEBPACK_IMPORTED_MODULE_3__isitBlackberry__["b" /* isitAnyBlackberry */],
  blink: __WEBPACK_IMPORTED_MODULE_4__isitBlink__["b" /* isitAnyBlink */],
  chrome: __WEBPACK_IMPORTED_MODULE_6__isitChrome__["b" /* isitAnyChrome */],
  edge: __WEBPACK_IMPORTED_MODULE_7__isitEdge__["b" /* isitAnyEdge */],
  firefox: __WEBPACK_IMPORTED_MODULE_8__isitFirefox__["b" /* isitAnyFirefox */],
  gecko: __WEBPACK_IMPORTED_MODULE_9__isitGecko__["b" /* isitAnyGecko */],
  ie: __WEBPACK_IMPORTED_MODULE_10__isitIe__["b" /* isitAnyIe */],
  ios: __WEBPACK_IMPORTED_MODULE_12__isitIos__["b" /* isitAnyIos */],
  ipad: __WEBPACK_IMPORTED_MODULE_13__isitIpad__["b" /* isitAnyIpad */],
  ipod: __WEBPACK_IMPORTED_MODULE_14__isitIpod__["b" /* isitAnyIpod */],
  iphone: __WEBPACK_IMPORTED_MODULE_15__isitIphone__["b" /* isitAnyIphone */],
  linux: __WEBPACK_IMPORTED_MODULE_16__isitLinux__["b" /* isitAnyLinux */],
  mac: __WEBPACK_IMPORTED_MODULE_17__isitMac__["b" /* isitAnyMac */],
  mobile: __WEBPACK_IMPORTED_MODULE_18__isitMobile__["b" /* isitAnyMobile */],
  offline: __WEBPACK_IMPORTED_MODULE_19__isitOffline__["b" /* isitAnyOffline */],
  online: __WEBPACK_IMPORTED_MODULE_20__isitOnline__["b" /* isitAnyOnline */],
  opera: __WEBPACK_IMPORTED_MODULE_21__isitOpera__["b" /* isitAnyOpera */],
  presto: __WEBPACK_IMPORTED_MODULE_22__isitPresto__["b" /* isitAnyPresto */],
  safari: __WEBPACK_IMPORTED_MODULE_23__isitSafari__["b" /* isitAnySafari */],
  tablet: __WEBPACK_IMPORTED_MODULE_25__isitTablet__["b" /* isitAnyTablet */],
  trident: __WEBPACK_IMPORTED_MODULE_27__isitTrident__["b" /* isitAnyTrident */],
  webkit: __WEBPACK_IMPORTED_MODULE_28__isitWebkit__["b" /* isitAnyWebkit */],
  windows: __WEBPACK_IMPORTED_MODULE_29__isitWindows__["b" /* isitAnyWindows */],
  windowsPhone: __WEBPACK_IMPORTED_MODULE_30__isitWindowsPhone__["b" /* isitAnyWindowsPhone */],
  windowsTablet: __WEBPACK_IMPORTED_MODULE_31__isitWindowsTablet__["b" /* isitAnyWindowsTablet */]
};

var not = {
  android: __WEBPACK_IMPORTED_MODULE_0__isitAndroid__["c" /* isitNotAndroid */],
  androidPhone: __WEBPACK_IMPORTED_MODULE_1__isitAndroidPhone__["c" /* isitNotAndroidPhone */],
  androidTablet: __WEBPACK_IMPORTED_MODULE_2__isitAndroidTablet__["c" /* isitNotAndroidTablet */],
  blackberry: __WEBPACK_IMPORTED_MODULE_3__isitBlackberry__["c" /* isitNotBlackberry */],
  blink: __WEBPACK_IMPORTED_MODULE_4__isitBlink__["c" /* isitNotBlink */],
  browser: __WEBPACK_IMPORTED_MODULE_5__isitBrowser__["a" /* isitNotBrowser */],
  chrome: __WEBPACK_IMPORTED_MODULE_6__isitChrome__["c" /* isitNotChrome */],
  edge: __WEBPACK_IMPORTED_MODULE_7__isitEdge__["c" /* isitNotEdge */],
  firefox: __WEBPACK_IMPORTED_MODULE_8__isitFirefox__["c" /* isitNotFirefox */],
  gecko: __WEBPACK_IMPORTED_MODULE_9__isitGecko__["c" /* isitNotGecko */],
  ie: __WEBPACK_IMPORTED_MODULE_10__isitIe__["c" /* isitNotIe */],
  ieVersion: __WEBPACK_IMPORTED_MODULE_11__isitIeVersion__["a" /* isitNotIeVersion */],
  ios: __WEBPACK_IMPORTED_MODULE_12__isitIos__["c" /* isitNotIos */],
  ipad: __WEBPACK_IMPORTED_MODULE_13__isitIpad__["c" /* isitNotIpad */],
  ipod: __WEBPACK_IMPORTED_MODULE_14__isitIpod__["c" /* isitNotIpod */],
  iphone: __WEBPACK_IMPORTED_MODULE_15__isitIphone__["c" /* isitNotIphone */],
  linux: __WEBPACK_IMPORTED_MODULE_16__isitLinux__["c" /* isitNotLinux */],
  mac: __WEBPACK_IMPORTED_MODULE_17__isitMac__["c" /* isitNotMac */],
  mobile: __WEBPACK_IMPORTED_MODULE_18__isitMobile__["c" /* isitNotMobile */],
  offline: __WEBPACK_IMPORTED_MODULE_19__isitOffline__["c" /* isitNotOffline */],
  online: __WEBPACK_IMPORTED_MODULE_20__isitOnline__["c" /* isitNotOnline */],
  opera: __WEBPACK_IMPORTED_MODULE_21__isitOpera__["c" /* isitNotOpera */],
  presto: __WEBPACK_IMPORTED_MODULE_22__isitPresto__["c" /* isitNotPresto */],
  safari: __WEBPACK_IMPORTED_MODULE_23__isitSafari__["c" /* isitNotSafari */],
  server: __WEBPACK_IMPORTED_MODULE_24__isitServer__["a" /* isitNotServer */],
  tablet: __WEBPACK_IMPORTED_MODULE_25__isitTablet__["c" /* isitNotTablet */],
  touchDevice: __WEBPACK_IMPORTED_MODULE_26__isitTouchDevice__["a" /* isitNotTouchDevice */],
  trident: __WEBPACK_IMPORTED_MODULE_27__isitTrident__["c" /* isitNotTrident */],
  webkit: __WEBPACK_IMPORTED_MODULE_28__isitWebkit__["c" /* isitNotWebkit */],
  windows: __WEBPACK_IMPORTED_MODULE_29__isitWindows__["c" /* isitNotWindows */],
  windowsPhone: __WEBPACK_IMPORTED_MODULE_30__isitWindowsPhone__["c" /* isitNotWindowsPhone */],
  windowsTablet: __WEBPACK_IMPORTED_MODULE_31__isitWindowsTablet__["c" /* isitNotWindowsTablet */]
};

/* harmony default export */ __webpack_exports__["default"] = {
  android: __WEBPACK_IMPORTED_MODULE_0__isitAndroid__["d" /* default */],
  androidPhone: __WEBPACK_IMPORTED_MODULE_1__isitAndroidPhone__["d" /* default */],
  androidTablet: __WEBPACK_IMPORTED_MODULE_2__isitAndroidTablet__["d" /* default */],
  blackberry: __WEBPACK_IMPORTED_MODULE_3__isitBlackberry__["d" /* default */],
  blink: __WEBPACK_IMPORTED_MODULE_4__isitBlink__["d" /* default */],
  browser: __WEBPACK_IMPORTED_MODULE_5__isitBrowser__["b" /* default */],
  chrome: __WEBPACK_IMPORTED_MODULE_6__isitChrome__["d" /* default */],
  edge: __WEBPACK_IMPORTED_MODULE_7__isitEdge__["d" /* default */],
  firefox: __WEBPACK_IMPORTED_MODULE_8__isitFirefox__["d" /* default */],
  gecko: __WEBPACK_IMPORTED_MODULE_9__isitGecko__["d" /* default */],
  ie: __WEBPACK_IMPORTED_MODULE_10__isitIe__["d" /* default */],
  ieVersion: __WEBPACK_IMPORTED_MODULE_11__isitIeVersion__["b" /* default */],
  ios: __WEBPACK_IMPORTED_MODULE_12__isitIos__["d" /* default */],
  ipad: __WEBPACK_IMPORTED_MODULE_13__isitIpad__["d" /* default */],
  ipod: __WEBPACK_IMPORTED_MODULE_14__isitIpod__["d" /* default */],
  iphone: __WEBPACK_IMPORTED_MODULE_15__isitIphone__["d" /* default */],
  linux: __WEBPACK_IMPORTED_MODULE_16__isitLinux__["d" /* default */],
  mac: __WEBPACK_IMPORTED_MODULE_17__isitMac__["d" /* default */],
  mobile: __WEBPACK_IMPORTED_MODULE_18__isitMobile__["d" /* default */],
  offline: __WEBPACK_IMPORTED_MODULE_19__isitOffline__["d" /* default */],
  online: __WEBPACK_IMPORTED_MODULE_20__isitOnline__["d" /* default */],
  opera: __WEBPACK_IMPORTED_MODULE_21__isitOpera__["d" /* default */],
  presto: __WEBPACK_IMPORTED_MODULE_22__isitPresto__["d" /* default */],
  safari: __WEBPACK_IMPORTED_MODULE_23__isitSafari__["d" /* default */],
  server: __WEBPACK_IMPORTED_MODULE_24__isitServer__["b" /* default */],
  tablet: __WEBPACK_IMPORTED_MODULE_25__isitTablet__["d" /* default */],
  touchDevice: __WEBPACK_IMPORTED_MODULE_26__isitTouchDevice__["b" /* default */],
  trident: __WEBPACK_IMPORTED_MODULE_27__isitTrident__["d" /* default */],
  webkit: __WEBPACK_IMPORTED_MODULE_28__isitWebkit__["d" /* default */],
  windows: __WEBPACK_IMPORTED_MODULE_29__isitWindows__["d" /* default */],
  windowsPhone: __WEBPACK_IMPORTED_MODULE_30__isitWindowsPhone__["d" /* default */],
  windowsTablet: __WEBPACK_IMPORTED_MODULE_31__isitWindowsTablet__["d" /* default */]
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createMatchFunction */
/* unused harmony export matchAll */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return matchAny; });
var createMatchFunction = function createMatchFunction(method) {
  return function () {
    for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, objects = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        objects[_key2] = arguments[_key2];
      }

      return functions[method](function (fn) {
        return !!fn.apply(undefined, objects);
      });
    };
  };
};

var matchAll = createMatchFunction('every');
var matchAny = createMatchFunction('some');

/* unused harmony default export */ var _unused_webpack_default_export = {
  all: matchAll,
  any: matchAny
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitEdge__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllBlink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyBlink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotBlink; });
// constants


// environment


// utils


var isChromeTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["D" /* CHROME_REGEXP */]);

var isitBlink = function isitBlink() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isChromeTest(userAgent) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitEdge__["c" /* isitNotEdge */])({ userAgent: userAgent });
};

var isitAllBlink = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAllMethod */])(isitBlink);
var isitAnyBlink = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsAnyMethod */])(isitBlink);
var isitNotBlink = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["d" /* createIsNotMethod */])(isitBlink);

/* harmony default export */ __webpack_exports__["d"] = isitBlink;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotBrowser; });
// utils


var isitBrowser = function isitBrowser() {
  return typeof window !== 'undefined';
};

var isitNotBrowser = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["d" /* createIsNotMethod */])(isitBrowser);

/* harmony default export */ __webpack_exports__["b"] = isitBrowser;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotChrome; });
// constants


// utils


var isChromeTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["B" /* CHROME_OR_CHROMIUM_REGEXP */]);
var isGoogleTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["C" /* GOOGLE_INC_REGEXP */]);

var isitChrome = function isitChrome() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent,
      _ref$vendor = _ref.vendor,
      vendor = _ref$vendor === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["l" /* VENDOR */] : _ref$vendor;

  return isChromeTest(userAgent) && isGoogleTest(vendor);
};

var isitAllChrome = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitChrome);
var isitAnyChrome = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitChrome);
var isitNotChrome = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitChrome);

/* harmony default export */ __webpack_exports__["d"] = isitChrome;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotFirefox; });
// constants


// utils


var isFirefoxTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["z" /* FIREFOX_REGEXP */]);

var isitFirefox = function isitFirefox() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isFirefoxTest(userAgent);
};

var isitAllFirefox = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitFirefox);
var isitAnyFirefox = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitFirefox);
var isitNotFirefox = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitFirefox);

/* harmony default export */ __webpack_exports__["d"] = isitFirefox;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllGecko; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyGecko; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotGecko; });
// constants


// utils


var isGeckoTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["x" /* GECKO_REGEXP */]);
var isLikeGeckoTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["y" /* LIKE_GECKO_REGEXP */]);

var isitGecko = function isitGecko() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isGeckoTest(userAgent) && !isLikeGeckoTest(userAgent);
};

var isitAllGecko = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitGecko);
var isitAnyGecko = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitGecko);
var isitNotGecko = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitGecko);

/* harmony default export */ __webpack_exports__["d"] = isitGecko;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitIe__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotIeVersion; });
// compose


// constants


// environment


// utils


var createCaseInsensitiveRegexp = function createCaseInsensitiveRegexp(string) {
  return new RegExp(string, 'i');
};

var createIsMatchingVersion = function createIsMatchingVersion(version) {
  var msieRegexp = createCaseInsensitiveRegexp('msie ' + version);
  var rvRegexp = createCaseInsensitiveRegexp('rv:' + version);

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__compose__["a" /* matchAny */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__["a" /* createRegExpTest */])(msieRegexp), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__["a" /* createRegExpTest */])(rvRegexp));
};

var isitIeVersion = function isitIeVersion(version) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_1__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_1__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  var isMatchingVersion = createIsMatchingVersion(version);

  return !!version && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isitIe__["d" /* default */])({ userAgent: userAgent }) && isMatchingVersion(userAgent);
};

var isitNotIeVersion = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_functionUtils__["d" /* createIsNotMethod */])(isitIeVersion);

/* harmony default export */ __webpack_exports__["b"] = isitIeVersion;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitIpad__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitIpod__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitIphone__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllIos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyIos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotIos; });
// constants


// environment




// utils


var isitIos = function isitIos() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isitIphone__["d" /* default */])(userAgent) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitIpad__["d" /* default */])(userAgent) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isitIpod__["d" /* default */])(userAgent);
};

var isitAllIos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__["b" /* createIsAllMethod */])(isitIos);
var isitAnyIos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__["c" /* createIsAnyMethod */])(isitIos);
var isitNotIos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__["d" /* createIsNotMethod */])(isitIos);

/* harmony default export */ __webpack_exports__["d"] = isitIos;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllLinux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyLinux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotLinux; });
// constants


// utils


var isLinuxTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["p" /* LINUX_REGEXP */]);
var isUnixTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["q" /* UNIX_REGEXP */]);

var isitLinux = function isitLinux() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$appVersion = _ref.appVersion,
      appVersion = _ref$appVersion === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["c" /* APP_VERSION */] : _ref$appVersion;

  return isLinuxTest(appVersion) || isUnixTest(appVersion);
};

var isitAllLinux = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitLinux);
var isitAnyLinux = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitLinux);
var isitNotLinux = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitLinux);

/* harmony default export */ __webpack_exports__["d"] = isitLinux;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllMac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyMac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotMac; });
// constants


// utils


var isMacTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["o" /* MAC_REGEXP */]);

var isitMac = function isitMac() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$appVersion = _ref.appVersion,
      appVersion = _ref$appVersion === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["c" /* APP_VERSION */] : _ref$appVersion;

  return isMacTest(appVersion);
};

var isitAllMac = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitMac);
var isitAnyMac = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitMac);
var isitNotMac = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitMac);

/* harmony default export */ __webpack_exports__["d"] = isitMac;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitAndroidPhone__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitBlackberry__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitIpod__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isitIphone__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isitWindowsPhone__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotMobile; });
// constants


// environment






// utils


var isitMobile = function isitMobile() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__isitIphone__["d" /* default */])(userAgent) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitAndroidPhone__["d" /* default */])(userAgent) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__isitWindowsPhone__["d" /* default */])(userAgent) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isitIpod__["d" /* default */])(userAgent) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isitBlackberry__["d" /* default */])(userAgent);
};

var isitAllMobile = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal_functionUtils__["b" /* createIsAllMethod */])(isitMobile);
var isitAnyMobile = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal_functionUtils__["c" /* createIsAnyMethod */])(isitMobile);
var isitNotMobile = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__internal_functionUtils__["d" /* createIsNotMethod */])(isitMobile);

/* harmony default export */ __webpack_exports__["d"] = isitMobile;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitOnline__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllOffline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyOffline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotOffline; });
// constants


// environment


// utils


var isitOffline = function isitOffline() {
  var navigator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */];

  return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitOnline__["d" /* default */])(navigator);
};

var isitAllOffline = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["b" /* createIsAllMethod */])(isitOffline);
var isitAnyOffline = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["c" /* createIsAnyMethod */])(isitOffline);
var isitNotOffline = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_functionUtils__["d" /* createIsNotMethod */])(isitOffline);

/* harmony default export */ __webpack_exports__["d"] = isitOffline;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllOpera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyOpera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotOpera; });
// constants


// utils


var isOperaLegacyTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["m" /* OPERA_LEGACY_REGEXP */]);
var isOperaModernTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["n" /* OPERA_MODERN_REGEXP */]);

var isitOpera = function isitOpera() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isOperaModernTest(userAgent) || isOperaLegacyTest(userAgent);
};

var isitAllOpera = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitOpera);
var isitAnyOpera = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitOpera);
var isitNotOpera = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitOpera);

/* harmony default export */ __webpack_exports__["d"] = isitOpera;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllPresto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyPresto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotPresto; });
// constants


// utils


var isOperaLegacyTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["m" /* OPERA_LEGACY_REGEXP */]);

var isitPresto = function isitPresto() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isOperaLegacyTest(userAgent);
};

var isitAllPresto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitPresto);
var isitAnyPresto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitPresto);
var isitNotPresto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitPresto);

/* harmony default export */ __webpack_exports__["d"] = isitPresto;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnySafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotSafari; });
// constants


// utils


var isAppleComputerTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["j" /* APPLE_COMPUTER_REGEXP */]);
var isSafariTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["k" /* SAFARI_REGEXP */]);

var isitSafari = function isitSafari() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent,
      _ref$vendor = _ref.vendor,
      vendor = _ref$vendor === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["l" /* VENDOR */] : _ref$vendor;

  return isSafariTest(userAgent) && isAppleComputerTest(vendor);
};

var isitAllSafari = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitSafari);
var isitAnySafari = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitSafari);
var isitNotSafari = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitSafari);

/* harmony default export */ __webpack_exports__["d"] = isitSafari;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotServer; });
// utils


var isitServer = function isitServer() {
  return typeof window === 'undefined';
};

var isitNotServer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_functionUtils__["d" /* createIsNotMethod */])(isitServer);

/* harmony default export */ __webpack_exports__["b"] = isitServer;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isitAndroidTablet__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isitIpad__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isitWindowsTablet__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotTablet; });
// constants


// environment




// utils


var isitTablet = function isitTablet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isitIpad__["d" /* default */])(userAgent) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isitAndroidTablet__["d" /* default */])(userAgent) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isitWindowsTablet__["d" /* default */])(userAgent);
};

var isitAllTablet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__["b" /* createIsAllMethod */])(isitTablet);
var isitAnyTablet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__["c" /* createIsAnyMethod */])(isitTablet);
var isitNotTablet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_functionUtils__["d" /* createIsNotMethod */])(isitTablet);

/* harmony default export */ __webpack_exports__["d"] = isitTablet;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitNotTouchDevice; });
// constants


// utils


var isitTouchDevice = function isitTouchDevice() {
  return __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["i" /* HAS_WINDOW */] && ('ontouchstart' in window || 'DocumentTouch' in window) && document instanceof window.DocumentTouch;
};

var isitNotTouchDevice = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitTouchDevice);

/* harmony default export */ __webpack_exports__["b"] = isitTouchDevice;

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllTrident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyTrident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotTrident; });
// constants


// utils


var isTridentTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["h" /* TRIDENT_REGEXP */]);

var isitTrident = function isitTrident() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isTridentTest(userAgent);
};

var isitAllTrident = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitTrident);
var isitAnyTrident = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitTrident);
var isitNotTrident = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitTrident);

/* harmony default export */ __webpack_exports__["d"] = isitTrident;

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isitAllWebkit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isitAnyWebkit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isitNotWebkit; });
// constants


// utils


var isWebkitTest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["a" /* createRegExpTest */])(__WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["g" /* APPLE_WEBKIT_REGEXP */]);

var isitWebkit = function isitWebkit() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["b" /* NAVIGATOR */],
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === undefined ? __WEBPACK_IMPORTED_MODULE_0__internal_environmentConstants__["d" /* USER_AGENT */] : _ref$userAgent;

  return isWebkitTest(userAgent);
};

var isitAllWebkit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["b" /* createIsAllMethod */])(isitWebkit);
var isitAnyWebkit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["c" /* createIsAnyMethod */])(isitWebkit);
var isitNotWebkit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_functionUtils__["d" /* createIsNotMethod */])(isitWebkit);

/* harmony default export */ __webpack_exports__["d"] = isitWebkit;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ })
/******/ ]);
});
//# sourceMappingURL=isit-environment.js.map