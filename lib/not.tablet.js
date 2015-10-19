/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// not version of tablet.js

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitNotTablet;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _interfaces = __webpack_require__(1);

	var _utils = __webpack_require__(2);

	var _tablet = __webpack_require__(4);

	var _tablet2 = _interopRequireDefault(_tablet);

	function isitNotTablet() {
	    return (0, _interfaces.not)(_tablet2["default"]).apply(null, _utils.arraySlice.call(arguments));
	}

	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// helper functions, used for interfaces

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(2);

	var all = function all(func) {
	    return function () {
	        var _getParams = (0, _utils.getParams)(arguments);

	        var length = _getParams.length;
	        var parameters = _getParams.parameters;

	        for (var i = 0; i < length; i++) {
	            if (!func(parameters[i])) {
	                return false;
	            }
	        }

	        return true;
	    };
	};

	exports.all = all;
	var any = function any(func) {
	    return function () {
	        var _getParams2 = (0, _utils.getParams)(arguments);

	        var length = _getParams2.length;
	        var parameters = _getParams2.parameters;

	        for (var i = 0; i < length; i++) {
	            if (func(parameters[i])) {
	                return true;
	            }
	        }

	        return false;
	    };
	};

	exports.any = any;
	var not = function not(func) {
	    return function () {
	        return !func.apply(null, _utils.arraySlice.call(arguments));
	    };
	};

	exports.not = not;
	exports["default"] = {
	    all: all,
	    any: any,
	    not: not
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// utility functions, used all over the place

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _array = __webpack_require__(3);

	var _array2 = _interopRequireDefault(_array);

	var arraySlice = Array.prototype.slice;

	exports.arraySlice = arraySlice;
	var getParams = function getParams(args) {
	    var params = arraySlice.call(args),
	        len = params.length;

	    if (len === 1 && (0, _array2["default"])(params[0])) {
	        return {
	            length: params[0].length,
	            parameters: params[0]
	        };
	    }

	    return {
	        length: len,
	        parameters: params
	    };
	};

	exports.getParams = getParams;
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	exports.hasOwnProperty = hasOwnProperty;
	var toCamelCase = function toCamelCase(str) {
	    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
	        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
	    }).replace(/\s+/g, "");
	};

	exports.toCamelCase = toCamelCase;
	var toString = Object.prototype.toString;

	exports.toString = toString;
	exports["default"] = {
	    arraySlice: arraySlice,
	    getParams: getParams,
	    hasOwnProperty: hasOwnProperty,
	    toCamelCase: toCamelCase,
	    toString: toString
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// is obj an array value?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitArray;

	var _utils = __webpack_require__(2);

	function isitArray(obj) {
	    return _utils.toString.call(obj) === "[object Array]";
	}

	;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used a tablet?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitTablet;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _androidTablet = __webpack_require__(5);

	var _androidTablet2 = _interopRequireDefault(_androidTablet);

	var _browser = __webpack_require__(7);

	var _browser2 = _interopRequireDefault(_browser);

	var _ipad = __webpack_require__(8);

	var _ipad2 = _interopRequireDefault(_ipad);

	var _windowsTablet = __webpack_require__(9);

	var _windowsTablet2 = _interopRequireDefault(_windowsTablet);

	function isitTablet() {
	    return (0, _browser2["default"])() && ((0, _ipad2["default"])() || (0, _androidTablet2["default"])() || (0, _windowsTablet2["default"])());
	}

	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used an android tablet?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitAndroidTablet;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _navigator = __webpack_require__(6);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _browser = __webpack_require__(7);

	var _browser2 = _interopRequireDefault(_browser);

	var _browser3 = _interopRequireDefault(_browser);

	function isitAndroidTablet() {
	    return (0, _browser2["default"])() && (0, _browser3["default"])() && !/mobile/i.test(_navigator2["default"].userAgent);
	}

	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// navigator info from browser, captured once

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _browser = __webpack_require__(7);

	var _browser2 = _interopRequireDefault(_browser);

	var navigatorInfo = {};

	if ((0, _browser2["default"])()) {
	    navigatorInfo = {
	        appVersion: "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "",
	        userAgent: "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
	        vendor: "navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase() || ""
	    };
	}

	exports["default"] = navigatorInfo;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	// is the environment a browser?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitBrowser;

	function isitBrowser() {
	    return typeof window !== "undefined";
	}

	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used an iPad?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitIpad;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _navigator = __webpack_require__(6);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _browser = __webpack_require__(7);

	var _browser2 = _interopRequireDefault(_browser);

	function isitIpad() {
	    return (0, _browser2["default"])() && /ipad/i.test(_navigator2["default"].userAgent);
	}

	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used a tablet running on Windows?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitWindowsTablet;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _interfaces = __webpack_require__(1);

	var _navigator = __webpack_require__(6);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _browser = __webpack_require__(7);

	var _browser2 = _interopRequireDefault(_browser);

	var _windows = __webpack_require__(10);

	var _windows2 = _interopRequireDefault(_windows);

	var _windowsPhone = __webpack_require__(11);

	var _windowsPhone2 = _interopRequireDefault(_windowsPhone);

	function isitWindowsTablet() {
	    return (0, _browser2["default"])() && (0, _windows2["default"])() && (0, _interfaces.not)(_windowsPhone2["default"])() && /touch/i.test(_navigator2["default"].userAgent);
	}

	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used running on Windows?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitWindows;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _navigator = __webpack_require__(6);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _browser = __webpack_require__(7);

	var _browser2 = _interopRequireDefault(_browser);

	function isitWindows() {
	    return (0, _browser2["default"])() && /win/i.test(_navigator2["default"].appVersion);
	}

	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used a mobile phone running on Windows?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitWindowsPhone;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _navigator = __webpack_require__(6);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _browser = __webpack_require__(7);

	var _browser2 = _interopRequireDefault(_browser);

	var _windows = __webpack_require__(10);

	var _windows2 = _interopRequireDefault(_windows);

	function isitWindowsPhone() {
	    return (0, _browser2["default"])() && (0, _windows2["default"])() && /phone/i.test(_navigator2["default"].userAgent);
	}

	module.exports = exports["default"];

/***/ }
/******/ ]);