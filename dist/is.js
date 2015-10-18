(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["is"] = factory();
	else
		root["is"] = factory();
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "//localhost:3001/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// is.js
	// Author: Tony Quetano
	
	// Forked from: is.js
	// Original Author: Aras Atasaygin
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _helpers = __webpack_require__(2);
	
	// Type checks
	/* -------------------------------------------------------------------------- */
	
	var _isArguments = __webpack_require__(5);
	
	var _isArguments2 = _interopRequireDefault(_isArguments);
	
	var _isArray = __webpack_require__(7);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _isBoolean = __webpack_require__(8);
	
	var _isBoolean2 = _interopRequireDefault(_isBoolean);
	
	var _isChar = __webpack_require__(9);
	
	var _isChar2 = _interopRequireDefault(_isChar);
	
	var _isDate = __webpack_require__(11);
	
	var _isDate2 = _interopRequireDefault(_isDate);
	
	var _isError = __webpack_require__(12);
	
	var _isError2 = _interopRequireDefault(_isError);
	
	var _isFunction = __webpack_require__(13);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isJson = __webpack_require__(14);
	
	var _isJson2 = _interopRequireDefault(_isJson);
	
	var _isNan = __webpack_require__(15);
	
	var _isNan2 = _interopRequireDefault(_isNan);
	
	var _isNull = __webpack_require__(6);
	
	var _isNull2 = _interopRequireDefault(_isNull);
	
	var _isNumber = __webpack_require__(16);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	var _isObject = __webpack_require__(17);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	var _isRegexp = __webpack_require__(18);
	
	var _isRegexp2 = _interopRequireDefault(_isRegexp);
	
	var _isSameType = __webpack_require__(19);
	
	var _isSameType2 = _interopRequireDefault(_isSameType);
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	var _isSymbol = __webpack_require__(20);
	
	var _isSymbol2 = _interopRequireDefault(_isSymbol);
	
	var _isUndefined = __webpack_require__(21);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	// Presence checks
	/* -------------------------------------------------------------------------- */
	
	var _isEmpty = __webpack_require__(22);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _isExisty = __webpack_require__(23);
	
	var _isExisty2 = _interopRequireDefault(_isExisty);
	
	var _isFalsy = __webpack_require__(24);
	
	var _isFalsy2 = _interopRequireDefault(_isFalsy);
	
	var _isSpace = __webpack_require__(26);
	
	var _isSpace2 = _interopRequireDefault(_isSpace);
	
	var _isTruthy = __webpack_require__(25);
	
	var _isTruthy2 = _interopRequireDefault(_isTruthy);
	
	// Arithmetic checks
	/* -------------------------------------------------------------------------- */
	
	var _isAbove = __webpack_require__(27);
	
	var _isAbove2 = _interopRequireDefault(_isAbove);
	
	var _isDecimal = __webpack_require__(28);
	
	var _isDecimal2 = _interopRequireDefault(_isDecimal);
	
	var _isEqual = __webpack_require__(29);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _isEven = __webpack_require__(30);
	
	var _isEven2 = _interopRequireDefault(_isEven);
	
	var _isFinite = __webpack_require__(31);
	
	var _isFinite2 = _interopRequireDefault(_isFinite);
	
	var _isInfinite = __webpack_require__(32);
	
	var _isInfinite2 = _interopRequireDefault(_isInfinite);
	
	var _isInteger = __webpack_require__(33);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _isNegative = __webpack_require__(34);
	
	var _isNegative2 = _interopRequireDefault(_isNegative);
	
	var _isOdd = __webpack_require__(35);
	
	var _isOdd2 = _interopRequireDefault(_isOdd);
	
	var _isPositive = __webpack_require__(36);
	
	var _isPositive2 = _interopRequireDefault(_isPositive);
	
	var _isUnder = __webpack_require__(37);
	
	var _isUnder2 = _interopRequireDefault(_isUnder);
	
	var _isWithin = __webpack_require__(38);
	
	var _isWithin2 = _interopRequireDefault(_isWithin);
	
	// Regexp checks
	/* -------------------------------------------------------------------------- */
	
	var _isAffirmative = __webpack_require__(39);
	
	var _isAffirmative2 = _interopRequireDefault(_isAffirmative);
	
	var _isAlphaNumeric = __webpack_require__(41);
	
	var _isAlphaNumeric2 = _interopRequireDefault(_isAlphaNumeric);
	
	var _isCaPostalCode = __webpack_require__(42);
	
	var _isCaPostalCode2 = _interopRequireDefault(_isCaPostalCode);
	
	var _isCreditCard = __webpack_require__(43);
	
	var _isCreditCard2 = _interopRequireDefault(_isCreditCard);
	
	var _isDateString = __webpack_require__(44);
	
	var _isDateString2 = _interopRequireDefault(_isDateString);
	
	var _isEmail = __webpack_require__(45);
	
	var _isEmail2 = _interopRequireDefault(_isEmail);
	
	var _isEppPhone = __webpack_require__(46);
	
	var _isEppPhone2 = _interopRequireDefault(_isEppPhone);
	
	var _isHexadecimal = __webpack_require__(47);
	
	var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);
	
	var _isHexColor = __webpack_require__(48);
	
	var _isHexColor2 = _interopRequireDefault(_isHexColor);
	
	var _isIp = __webpack_require__(49);
	
	var _isIp2 = _interopRequireDefault(_isIp);
	
	var _isIpv4 = __webpack_require__(50);
	
	var _isIpv42 = _interopRequireDefault(_isIpv4);
	
	var _isIpv6 = __webpack_require__(51);
	
	var _isIpv62 = _interopRequireDefault(_isIpv6);
	
	var _isNanpPhone = __webpack_require__(52);
	
	var _isNanpPhone2 = _interopRequireDefault(_isNanpPhone);
	
	var _isSocialSecurityNumber = __webpack_require__(53);
	
	var _isSocialSecurityNumber2 = _interopRequireDefault(_isSocialSecurityNumber);
	
	var _isTimeString = __webpack_require__(54);
	
	var _isTimeString2 = _interopRequireDefault(_isTimeString);
	
	var _isUkPostalCode = __webpack_require__(55);
	
	var _isUkPostalCode2 = _interopRequireDefault(_isUkPostalCode);
	
	var _isUrl = __webpack_require__(56);
	
	var _isUrl2 = _interopRequireDefault(_isUrl);
	
	var _isUsZipCode = __webpack_require__(57);
	
	var _isUsZipCode2 = _interopRequireDefault(_isUsZipCode);
	
	var _isSetRegexp = __webpack_require__(58);
	
	var _isSetRegexp2 = _interopRequireDefault(_isSetRegexp);
	
	// String checks
	/* -------------------------------------------------------------------------- */
	
	var _isCapitalized = __webpack_require__(59);
	
	var _isCapitalized2 = _interopRequireDefault(_isCapitalized);
	
	var _isEndWith = __webpack_require__(60);
	
	var _isEndWith2 = _interopRequireDefault(_isEndWith);
	
	var _isInclude = __webpack_require__(61);
	
	var _isInclude2 = _interopRequireDefault(_isInclude);
	
	var _isLowercase = __webpack_require__(62);
	
	var _isLowercase2 = _interopRequireDefault(_isLowercase);
	
	var _isPalindrome = __webpack_require__(63);
	
	var _isPalindrome2 = _interopRequireDefault(_isPalindrome);
	
	var _isStartWith = __webpack_require__(64);
	
	var _isStartWith2 = _interopRequireDefault(_isStartWith);
	
	var _isUppercase = __webpack_require__(65);
	
	var _isUppercase2 = _interopRequireDefault(_isUppercase);
	
	// String checks
	/* -------------------------------------------------------------------------- */
	
	// Object checks
	/* -------------------------------------------------------------------------- */
	
	var _isDomNode = __webpack_require__(66);
	
	var _isDomNode2 = _interopRequireDefault(_isDomNode);
	
	var _isPropertyCount = __webpack_require__(67);
	
	var _isPropertyCount2 = _interopRequireDefault(_isPropertyCount);
	
	var _isPropertyDefined = __webpack_require__(68);
	
	var _isPropertyDefined2 = _interopRequireDefault(_isPropertyDefined);
	
	var _isWindowObject = __webpack_require__(69);
	
	var _isWindowObject2 = _interopRequireDefault(_isWindowObject);
	
	// Array checks
	/* -------------------------------------------------------------------------- */
	
	var _isInArray = __webpack_require__(70);
	
	var _isInArray2 = _interopRequireDefault(_isInArray);
	
	var _isSorted = __webpack_require__(71);
	
	var _isSorted2 = _interopRequireDefault(_isSorted);
	
	// Date checks
	/* -------------------------------------------------------------------------- */
	
	var _isToday = __webpack_require__(72);
	
	var _isToday2 = _interopRequireDefault(_isToday);
	
	// lots more to do
	
	// Environment checks
	/* -------------------------------------------------------------------------- */
	
	var _isBrowser = __webpack_require__(3);
	
	var _isBrowser2 = _interopRequireDefault(_isBrowser);
	
	var _isChrome = __webpack_require__(73);
	
	var _isChrome2 = _interopRequireDefault(_isChrome);
	
	var _isFirefox = __webpack_require__(74);
	
	var _isFirefox2 = _interopRequireDefault(_isFirefox);
	
	var _isNode = __webpack_require__(4);
	
	var _isNode2 = _interopRequireDefault(_isNode);
	
	function setInterfaces(options) {
	    for (var option in options) {
	        if (_utils.hasOwnProperty.call(options, option) && (0, _isFunction2["default"])(options[option])) {
	            var interfaces = options[option].api || defaultApi,
	                i = 0,
	                len = interfaces.length;
	
	            for (; i < len; i++) {
	                if (interfaces[i] === "all") {
	                    options.all[option] = (0, _helpers.all)(options[option]);
	                }
	
	                if (interfaces[i] === "any") {
	                    options.any[option] = (0, _helpers.any)(options[option]);
	                }
	
	                if (interfaces[i] === "not") {
	                    options.not[option] = (0, _helpers.not)(options[option]);
	                }
	            }
	        }
	    }
	}
	
	var defaultApi = ["all", "any", "not"];
	
	var is = {
	    all: {},
	    any: {},
	    not: {},
	    version: "1.0.0"
	};
	
	is.arguments = _isArguments2["default"];
	is.array = _isArray2["default"];
	is.boolean = _isBoolean2["default"];
	is.char = _isChar2["default"];
	is.date = _isDate2["default"];
	is.error = _isError2["default"];
	is["function"] = _isFunction2["default"];
	is.nan = _isNan2["default"];
	is["null"] = _isNull2["default"];
	is.number = _isNumber2["default"];
	is.object = _isObject2["default"];
	is.json = _isJson2["default"];
	is.regexp = _isRegexp2["default"];
	is.sameType = _isSameType2["default"];
	is.string = _isString2["default"];
	is.symbol = _isSymbol2["default"];
	is.undefined = _isUndefined2["default"];
	
	// api restrictions
	is.sameType.api = ["not"];
	
	is.empty = _isEmpty2["default"];
	is.existy = _isExisty2["default"];
	is.falsy = _isFalsy2["default"];
	is.space = _isSpace2["default"];
	is.truthy = _isTruthy2["default"];
	
	is.above = _isAbove2["default"];
	is.decimal = _isDecimal2["default"];
	is.equal = _isEqual2["default"];
	is.even = _isEven2["default"];
	is.finite = _isFinite2["default"];
	is.infinite = _isInfinite2["default"];
	is.integer = _isInteger2["default"];
	is.negative = _isNegative2["default"];
	is.odd = _isOdd2["default"];
	is.positive = _isPositive2["default"];
	is.under = _isUnder2["default"];
	is.within = _isWithin2["default"];
	
	// api restrictions
	is.above.api = ["not"];
	is.equal.api = ["not"];
	is.under.api = ["not"];
	is.within.api = ["not"];
	
	is.affirmative = _isAffirmative2["default"];
	is.alphaNumeric = _isAlphaNumeric2["default"];
	is.caPostalCode = _isCaPostalCode2["default"];
	is.creditCard = _isCreditCard2["default"];
	is.dateString = _isDateString2["default"];
	is.email = _isEmail2["default"];
	is.eppPhone = _isEppPhone2["default"];
	is.hexadecimal = _isHexadecimal2["default"];
	is.hexColor = _isHexColor2["default"];
	is.ip = _isIp2["default"];
	is.ipv4 = _isIpv42["default"];
	is.ipv6 = _isIpv62["default"];
	is.nanpPhone = _isNanpPhone2["default"];
	is.setRegexp = _isSetRegexp2["default"].bind(is);
	is.socialSecurityNumber = _isSocialSecurityNumber2["default"];
	is.timeString = _isTimeString2["default"];
	is.ukPostalCode = _isUkPostalCode2["default"];
	is.url = _isUrl2["default"];
	is.usZipCode = _isUsZipCode2["default"];
	
	is.capitalized = _isCapitalized2["default"];
	is.endWith = _isEndWith2["default"];
	is.include = _isInclude2["default"];
	is.lowercase = _isLowercase2["default"];
	is.palindrome = _isPalindrome2["default"];
	is.startWith = _isStartWith2["default"];
	is.uppercase = _isUppercase2["default"];
	
	// api restrictions
	is.endWith.api = ["not"];
	is.include.api = ["not"];
	is.startWith.api = ["not"];
	
	is.domNode = _isDomNode2["default"];
	is.propertyCount = _isPropertyCount2["default"];
	is.propertyDefined = _isPropertyDefined2["default"];
	is.windowObject = _isWindowObject2["default"];
	
	// api restrictions
	is.propertyCount.api = ["not"];
	is.propertyDefined.api = ["not"];
	
	is.inArray = _isInArray2["default"];
	is.sorted = _isSorted2["default"];
	
	// api restrictions
	is.inArray.api = ["not"];
	
	is.today = _isToday2["default"];
	
	is.browser = _isBrowser2["default"];
	is.chrome = _isChrome2["default"];
	is.firefox = _isFirefox2["default"];
	is.node = _isNode2["default"];
	
	// api restrictions
	is.browser.api = ["not"];
	is.chrome.api = ["not"];
	is.firefox.api = ["not"];
	is.ie.api = ["not"];
	is.node.api = ["not"];
	
	setInterfaces(is);
	
	// lots more to do
	
	exports["default"] = is;
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isBrowser = __webpack_require__(3);
	
	var _isBrowser2 = _interopRequireDefault(_isBrowser);
	
	var arraySlice = Array.prototype.slice;
	
	exports.arraySlice = arraySlice;
	var navigatorInfo = (function () {
	    if (!(0, _isBrowser2["default"])()) {
	        return {};
	    }
	
	    return {
	        appVersion: 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '',
	        userAgent: 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '',
	        vendor: 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || ''
	    };
	})();
	
	exports.navigatorInfo = navigatorInfo;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	exports.hasOwnProperty = hasOwnProperty;
	var toString = Object.prototype.toString;
	
	exports.toString = toString;
	exports["default"] = {
	    arraySlice: arraySlice,
	    hasOwnProperty: hasOwnProperty,
	    navigatorInfo: navigatorInfo,
	    toString: toString
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(1);
	
	function getParams(args) {
	    var params = _utils.arraySlice.call(args),
	        len = params.length;
	
	    if (len === 1 && is.array(params[0])) {
	        return {
	            length: params[0].length,
	            parameters: params[0]
	        };
	    }
	
	    return {
	        length: len,
	        parameters: params
	    };
	}
	
	var all = function all(func) {
	    return function () {
	        var _getParams = getParams(arguments);
	
	        var length = _getParams.length;
	        var parameters = _getParams.parameters;
	
	        for (var i = 0; i < length; i++) {
	            if (!func.call(null, parameters[i])) {
	                return false;
	            }
	        }
	
	        return true;
	    };
	};
	
	exports.all = all;
	var any = function any(func) {
	    return function () {
	        var _getParams2 = getParams(arguments);
	
	        var length = _getParams2.length;
	        var parameters = _getParams2.parameters;
	
	        for (var i = 0; i < length; i++) {
	            if (func.call(null, parameters[i])) {
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isBrowser;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isNode = __webpack_require__(4);
	
	var _isNode2 = _interopRequireDefault(_isNode);
	
	function isBrowser() {
	    return !(0, _isNode2["default"])();
	}
	
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isNode;
	
	function isNode() {
	    return typeof window === undefined;
	}
	
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isArguments;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _utils = __webpack_require__(1);
	
	var _isNull = __webpack_require__(6);
	
	var _isNull2 = _interopRequireDefault(_isNull);
	
	function isArguments(obj) {
	    return (0, _helpers.not)((0, _isNull2["default"])(obj)) && _utils.toString.call(obj) === "[object Arguments]" || typeof obj === "object" && "callee" in obj;
	}
	
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isNull;
	
	function isNull(obj) {
	    return obj === null;
	}
	
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(1);
	
	exports["default"] = Array.isArray || function isArray(obj) {
	    return _utils.toString.call(obj) === "[object Array]";
	};
	
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isBoolean;
	
	var _utils = __webpack_require__(1);
	
	function isBoolean(obj) {
	    return obj === true || obj === false || _utils.toString.call(obj) === "[object Boolean]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isChar;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function isChar(obj) {
	    return (0, _isString2["default"])(obj) && obj.length === 1;
	}
	
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isString;
	
	var _utils = __webpack_require__(1);
	
	function isString(obj) {
	    return _utils.toString.call(obj) === "[object String]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isDate;
	
	var _utils = __webpack_require__(1);
	
	function isDate(obj) {
	    return _utils.toString.call(obj) === "[object Date]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isError;
	
	var _utils = __webpack_require__(1);
	
	function isError(obj) {
	    return _utils.toString.call(obj) === "[object Error]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isFunction;
	
	var _utils = __webpack_require__(1);
	
	function isFunction(obj) {
	    return _utils.toString.call(obj) === "[object Function]" || typeof obj === "function";
	}
	
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isJson;
	
	var _utils = __webpack_require__(1);
	
	function isJson(obj) {
	    return _utils.toString.call(obj) === "[object Object]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isNaN;
	
	function isNaN(obj) {
	    return obj !== obj;
	}
	
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isNumber;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _utils = __webpack_require__(1);
	
	var _isNan = __webpack_require__(15);
	
	var _isNan2 = _interopRequireDefault(_isNan);
	
	function isNumber(obj) {
	    return (0, _helpers.not)((0, _isNan2["default"])(obj)) && _utils.toString.call(obj) === "[object Number]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isObject;
	
	function isObject(obj) {
	    var type = typeof obj;
	    return type === "function" || type === "object";
	}
	
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isRegExp;
	
	var _utils = __webpack_require__(1);
	
	function isRegExp(obj) {
	    return _utils.toString.call(obj) === "[object RegExp]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isSameType;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isNan = __webpack_require__(15);
	
	var _isNan2 = _interopRequireDefault(_isNan);
	
	function isSameType(obj1, obj2) {
	    if ((0, _isNan2["default"])(obj1) || (0, _isNan2["default"])(obj2)) {
	        return (0, _isNan2["default"])(obj1) === (0, _isNan2["default"])(obj2);
	    }
	
	    return _utils.toString.call(obj1) === _utils.toString.call(obj2);
	}
	
	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isSymbol;
	
	function isSymbol(obj) {
	    return typeof obj === "symbol";
	}
	
	module.exports = exports["default"];

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isUndefined;
	
	function isUndefined(obj) {
	    return obj === void 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isEmpty;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isArray = __webpack_require__(7);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _isArguments = __webpack_require__(5);
	
	var _isArguments2 = _interopRequireDefault(_isArguments);
	
	var _isObject = __webpack_require__(17);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	function isEmpty(obj) {
	    if ((0, _isObject2["default"])(obj)) {
	        var num = Object.getOwnPropertyNames(obj).length;
	
	        return num === 0 || num === 1 && (0, _isArray2["default"])(obj) || num === 2 && (0, _isArguments2["default"])(obj);
	    }
	
	    return value === "";
	}
	
	module.exports = exports["default"];

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isExisty;
	
	function isExisty(obj) {
	    return obj !== null && obj !== undefined;
	}
	
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isFalsy;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isTruthy = __webpack_require__(25);
	
	var _isTruthy2 = _interopRequireDefault(_isTruthy);
	
	function isFalsy(obj) {
	    return (0, _helpers.not)((0, _isTruthy2["default"])(obj));
	}
	
	;
	module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isTruthy;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isExisty = __webpack_require__(23);
	
	var _isExisty2 = _interopRequireDefault(_isExisty);
	
	var _isNan = __webpack_require__(15);
	
	var _isNan2 = _interopRequireDefault(_isNan);
	
	function isTruthy(obj) {
	    return (0, _isExisty2["default"])(obj) && obj !== false && (0, _helpers.not)((0, _isNan2["default"])(obj)) && value !== "" && value !== 0;
	}
	
	;
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isSpace;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isChar = __webpack_require__(9);
	
	var _isChar2 = _interopRequireDefault(_isChar);
	
	function isSpace(obj) {
	    if ((0, _isChar2["default"])(obj)) {
	        var charCode = obj.charCodeAt(0);
	
	        return charCode > 0 && charCode < 14 || charCode === 32;
	    }
	
	    return false;
	}
	
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isAbove;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isNumber = __webpack_require__(16);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	function isAbove(obj, min) {
	    return (0, _helpers.all)((0, _isNumber2["default"])(obj, min)) && obj > min;
	}
	
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isDecimal;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isNumber = __webpack_require__(16);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	function isDecimal(obj) {
	    return (0, _isNumber2["default"])(obj) && obj % 1 !== 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isEqual;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isBoolean = __webpack_require__(8);
	
	var _isBoolean2 = _interopRequireDefault(_isBoolean);
	
	var _isNumber = __webpack_require__(16);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	var _isRegexp = __webpack_require__(18);
	
	var _isRegexp2 = _interopRequireDefault(_isRegexp);
	
	var _isSameType = __webpack_require__(19);
	
	var _isSameType2 = _interopRequireDefault(_isSameType);
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function isEqual(obj1, obj2) {
	    if ((0, _helpers.not)((0, _isSameType2["default"])(obj1, obj2))) {
	        return false;
	    }
	
	    if ((0, _helpers.all)((0, _isNumber2["default"])(obj1, obj2))) {
	        return obj1 === obj2 && 1 / obj1 === 1 / obj2;
	    }
	
	    if ((0, _helpers.all)((0, _isString2["default"])(obj1, obj2)) || (0, _helpers.all)((0, _isRegexp2["default"])(obj1, obj2))) {
	        return "" + obj1 === "" + obj2;
	    }
	
	    if ((0, _helpers.all)((0, _isBoolean2["default"])(obj1, obj2))) {
	        return obj1 === obj2;
	    }
	
	    return false;
	}
	
	module.exports = exports["default"];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isEven;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isNumber = __webpack_require__(16);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	function isEven(obj) {
	    return (0, _isNumber2["default"])(obj) && obj % 2 === 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isNan = __webpack_require__(15);
	
	var _isNan2 = _interopRequireDefault(_isNan);
	
	exports["default"] = isFinite || function isFinite(obj) {
	    return obj !== Infinity && obj !== -Infinity && (0, _helpers.not)((0, _isNan2["default"])(obj));
	};
	
	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInfinite;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isFinite = __webpack_require__(31);
	
	var _isFinite2 = _interopRequireDefault(_isFinite);
	
	function isInfinite(obj) {
	    return (0, _helpers.not)((0, _isFinite2["default"])(obj));
	}
	
	module.exports = exports["default"];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInteger;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isNumber = __webpack_require__(16);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	function isInteger(obj) {
	    return (0, _isNumber2["default"])(obj) && obj % 1 === 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isNegative;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isNumber = __webpack_require__(16);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	function isNegative(obj) {
	    return (0, _isNumber2["default"])(obj) && obj < 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isOdd;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isNumber = __webpack_require__(16);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	function isOdd(obj) {
	    return (0, _isNumber2["default"])(obj) && obj % 2 !== 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isPositive;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isNumber = __webpack_require__(16);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	function isPositive(obj) {
	    return (0, _isNumber2["default"])(obj) && obj > 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isUnder;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isNumber = __webpack_require__(16);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	function isUnder(obj, max) {
	    return (0, _helpers.all)((0, _isNumber2["default"])(obj, max)) && obj < max;
	}
	
	module.exports = exports["default"];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isWithin;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isNumber = __webpack_require__(16);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	function isWithin(obj, min, max) {
	    return (0, _helpers.all)((0, _isNumber2["default"])(obj, min, max)) && obj > min && obj < max;
	}
	
	module.exports = exports["default"];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isAffirmative;
	
	var _regexps = __webpack_require__(40);
	
	function isAffirmative(obj) {
	    return _regexps.affirmative.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 40 */
/***/ function(module, exports) {

	
	
	// Steven Levithan, Jan Goyvaerts: Regular Expressions Cookbook
	// Scott Gonzalez: Email address validation
	
	// eppPhone match extensible provisioning protocol format
	// nanpPhone match north american number plan format
	// dateString match m/d/yy and mm/dd/yyyy, allowing any combination of one or two digits for the day and month, and two or four digits for the year
	// time match hours, minutes, and seconds, 24-hour clock
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
	    alphaNumeric: /^[A-Za-z0-9]+$/,
	    caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
	    creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
	    dateString: /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,
	    email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
	    eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
	    hexadecimal: /^[0-9a-fA-F]+$/,
	    hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
	    ip: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
	    ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
	    ipv6: /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
	    nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
	    socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
	    timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
	    ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
	    url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
	    usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/
	};
	module.exports = exports["default"];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isAlphaNumeric;
	
	var _regexps = __webpack_require__(40);
	
	function isAlphaNumeric(obj) {
	    return _regexps.alphaNumeric.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isCaPostalCode;
	
	var _regexps = __webpack_require__(40);
	
	function isCaPostalCode(obj) {
	    return _regexps.caPostalCode.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isCreditCard;
	
	var _regexps = __webpack_require__(40);
	
	function isCreditCard(obj) {
	    return _regexps.creditCard.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isDateString;
	
	var _regexps = __webpack_require__(40);
	
	function isDateString(obj) {
	    return _regexps.dateString.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isEmail;
	
	var _regexps = __webpack_require__(40);
	
	function isEmail(obj) {
	    return _regexps.email.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isEppPhone;
	
	var _regexps = __webpack_require__(40);
	
	function isEppPhone(obj) {
	    return _regexps.eppPhone.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isHexadecimal;
	
	var _regexps = __webpack_require__(40);
	
	function isHexadecimal(obj) {
	    return _regexps.hexadecimal.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isHexColor;
	
	var _regexps = __webpack_require__(40);
	
	function isHexColor(obj) {
	    return _regexps.hexColor.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isIp;
	
	var _regexps = __webpack_require__(40);
	
	function isIp(obj) {
	    return _regexps.ip.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isIpv4;
	
	var _regexps = __webpack_require__(40);
	
	function isIpv4(obj) {
	    return _regexps.ipv4.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isIpv6;
	
	var _regexps = __webpack_require__(40);
	
	function isIpv6(obj) {
	    return _regexps.ipv6.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isNanpPhone;
	
	var _regexps = __webpack_require__(40);
	
	function isNanpPhone(obj) {
	    return _regexps.nanpPhone.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isSocialSecurityNumber;
	
	var _regexps = __webpack_require__(40);
	
	function isSocialSecurityNumber(obj) {
	    return _regexps.socialSecurityNumber.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isTimeString;
	
	var _regexps = __webpack_require__(40);
	
	function isTimeString(obj) {
	    return _regexps.timeString.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isUkPostalCode;
	
	var _regexps = __webpack_require__(40);
	
	function isUkPostalCode(obj) {
	    return _regexps.ukPostalCode.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isUrl;
	
	var _regexps = __webpack_require__(40);
	
	function isUrl(obj) {
	    return _regexps.url.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isUsZipCode;
	
	var _regexps = __webpack_require__(40);
	
	function isUsZipCode(obj) {
	    return _regexps.usZipCode.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = setRegexp;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _regexps = __webpack_require__(40);
	
	var _regexps2 = _interopRequireDefault(_regexps);
	
	function setRegexp(regexp, regexpName) {
	    for (var r in _regexps2["default"]) {
	        if (_utils.hasOwnProperty.call(_regexps2["default"], r) && regexpName === r) {
	            this[is + regexpName.charAt(0).toUpperCase() + regexpName.slice(1)] = regexp;
	        }
	    }
	}
	
	module.exports = exports["default"];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isCapitalized;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	var _isTruthy = __webpack_require__(25);
	
	var _isTruthy2 = _interopRequireDefault(_isTruthy);
	
	function isCapitalized(obj) {
	    if ((0, _helpers.not)((0, _isString2["default"])(obj))) {
	        return false;
	    }
	
	    var words = obj.split(" "),
	        capitalized = [];
	
	    for (var i = 0, len = words.length; i < len; i++) {
	        capitalized[i] = words[i][0] === words[i][0].toUpperCase();
	    }
	
	    return (0, _helpers.all)(_isTruthy2["default"].apply(null, capitalized));
	}
	
	module.exports = exports["default"];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isEndWith;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function isEndWith(obj, endStr) {
	    return (0, _isString2["default"])(obj) && str.indexOf(endStr) === str.length - endStr.length;
	}
	
	module.exports = exports["default"];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInclude;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isArray = __webpack_require__(7);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function isInclude(obj, substr) {
	    return ((0, _isArray2["default"])(obj) || (0, _isString2["default"])(obj)) && obj.indexOf(substr) !== -1;
	}
	
	module.exports = exports["default"];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isLowercase;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function isLowercase(obj) {
	    return (0, _isString2["default"])(obj) && str === str.toLowerCase();
	}
	
	module.exports = exports["default"];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isPalindrome;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function isPalindrome(obj) {
	    return (0, _isString2["default"])(obj) && str === str.split("").reverse().join("");
	}
	
	module.exports = exports["default"];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isStartWith;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function isStartWith(obj, startStr) {
	    return (0, _isString2["default"])(obj) && str.indexOf(startStr) === 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isUppercase;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function isUppercase(obj) {
	    return (0, _isString2["default"])(obj) && str === str.toUpperCase();
	}
	
	module.exports = exports["default"];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isDomNode;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isObject = __webpack_require__(17);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	function isDomNode(obj) {
	    return (0, _isObject2["default"])(obj) && obj.nodeType > 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isPropertyCount;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isNumber = __webpack_require__(16);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	var _isObject = __webpack_require__(17);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	function isPropertyCount(obj, count) {
	    if (!(0, _isObject2["default"])(obj) || !(0, _isNumber2["default"])(count)) {
	        return false;
	    }
	
	    if (Object.keys) {
	        return Object.keys(obj).length === count;
	    }
	
	    var props = [],
	        prop = undefined;
	
	    for (prop in obj) {
	        if (_helpers.hasOwnProperty.call(obj, prop)) {
	            props[props.length] = prop;
	        }
	    }
	
	    return props.length === count;
	}
	
	module.exports = exports["default"];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isPropertyDefined;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isObject = __webpack_require__(17);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function isPropertyDefined(obj, prop) {
	    return (0, _isObject2["default"])(obj) && (0, _isString2["default"])(prop) && prop in obj;
	}
	
	module.exports = exports["default"];

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isWindowObject;
	
	function isWindowObject(obj) {
	    return typeof obj === "object" && "setInterval" in obj;
	}
	
	module.exports = exports["default"];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInArray;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isArray = __webpack_require__(7);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	function isInArray(obj, arr) {
	    if ((0, _helpers.not)((0, _isArray2["default"])(arr))) {
	        return false;
	    }
	
	    var i = 0,
	        len = arr.length;
	
	    for (; i < len; i++) {
	        if (arr[i] === obj) {
	            return true;
	        }
	    }
	
	    return false;
	}
	
	module.exports = exports["default"];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isSorted;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isArray = __webpack_require__(7);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	function isSorted(arr) {
	    if ((0, _helpers.not)((0, _isArray2["default"])(arr))) {
	        return false;
	    }
	
	    var i = 0,
	        len = arr.length;
	
	    for (; i < len; i++) {
	        if (arr[i] > arr[i + 1]) {
	            return false;
	        }
	    }
	
	    return true;
	}
	
	module.exports = exports["default"];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isToday;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isDate = __webpack_require__(11);
	
	var _isDate2 = _interopRequireDefault(_isDate);
	
	function isToday(obj) {
	    return (0, _isDate2["default"])(obj) && obj.toDateString() === new Date().toDateString();
	}
	
	module.exports = exports["default"];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isChrome;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isBrowser = __webpack_require__(3);
	
	var _isBrowser2 = _interopRequireDefault(_isBrowser);
	
	function isChrome() {
	    return (0, _isBrowser2["default"])() && /chrome|chromium/i.test(_utils.navigatorInfo.userAgent) && /google inc/.test(_utils.navigatorInfo.vendor);
	}
	
	module.exports = exports["default"];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isFirefox;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isBrowser = __webpack_require__(3);
	
	var _isBrowser2 = _interopRequireDefault(_isBrowser);
	
	function isFirefox() {
	    return (0, _isBrowser2["default"])() && /firefox/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=is.js.map