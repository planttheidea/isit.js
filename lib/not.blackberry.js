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

	// not version of blackberry.js

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitNotBlackberry;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _interfaces = __webpack_require__(1);

	var _utils = __webpack_require__(2);

	var _blackberry = __webpack_require__(4);

	var _blackberry2 = _interopRequireDefault(_blackberry);

	function isitNotBlackberry() {
	    return (0, _interfaces.not)(_blackberry2["default"]).apply(null, _utils.arraySlice.call(blackberry));
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

	// is the device used a blackberry phone?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitBlackberry;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _navigator = __webpack_require__(5);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _browser = __webpack_require__(6);

	var _browser2 = _interopRequireDefault(_browser);

	function isitBlackberry() {
	    return (0, _browser2["default"])() && /blackberry/i.test(_navigator2["default"].userAgent) || /BB10/i.test(_navigator2["default"].userAgent);
	}

	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// navigator info from browser, captured once

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _browser = __webpack_require__(6);

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
/* 6 */
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

/***/ }
/******/ ]);