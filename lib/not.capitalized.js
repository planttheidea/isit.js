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

	// not version of capitalized.js

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitNotCapitalized;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _interfaces = __webpack_require__(1);

	var _utils = __webpack_require__(2);

	var _capitalized = __webpack_require__(4);

	var _capitalized2 = _interopRequireDefault(_capitalized);

	function isitNotCapitalized() {
	    return (0, _interfaces.not)(_capitalized2["default"]).apply(null, _utils.arraySlice.call(arguments));
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

	// is obj a string of capitalized words?
	// NOTE: this will return true for start case ("I Am Capitalized")
	// or uppercase ("I AM UPPERCASE")

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitCapitalized;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _interfaces = __webpack_require__(1);

	var _string = __webpack_require__(5);

	var _string2 = _interopRequireDefault(_string);

	var _equal = __webpack_require__(6);

	var _equal2 = _interopRequireDefault(_equal);

	function isitCapitalized(obj) {
	    if ((0, _interfaces.not)(_string2["default"])(obj)) {
	        return false;
	    }

	    var words = obj.split(" "),
	        capitalized = [];

	    for (var i = 0, len = words.length; i < len; i++) {
	        if (words[i].charAt(0) === words[i].charAt(0).toUpperCase()) {
	            capitalized[capitalized.length] = words[i];
	        }
	    }

	    return (0, _equal2["default"])(words, capitalized);
	}

	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string value?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitString;

	var _utils = __webpack_require__(2);

	function isitString(obj) {
	    return _utils.toString.call(obj) === "[object String]";
	}

	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// is obj1 and obj2 equal?
	// NOTE: for arrays and objects, will check deeply via recursive calls
	// for decimals, will compare with Number.EPSILON rather than pure equality

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitEqual;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _interfaces = __webpack_require__(1);

	var _epsilon = __webpack_require__(7);

	var _epsilon2 = _interopRequireDefault(_epsilon);

	var _array = __webpack_require__(3);

	var _array2 = _interopRequireDefault(_array);

	var _boolean = __webpack_require__(8);

	var _boolean2 = _interopRequireDefault(_boolean);

	var _decimal = __webpack_require__(9);

	var _decimal2 = _interopRequireDefault(_decimal);

	var _number = __webpack_require__(10);

	var _number2 = _interopRequireDefault(_number);

	var _object = __webpack_require__(12);

	var _object2 = _interopRequireDefault(_object);

	var _regexp = __webpack_require__(13);

	var _regexp2 = _interopRequireDefault(_regexp);

	var _sameType = __webpack_require__(14);

	var _sameType2 = _interopRequireDefault(_sameType);

	var _string = __webpack_require__(5);

	var _string2 = _interopRequireDefault(_string);

	function isitEqual(_x, _x2) {
	    var _again = true;

	    _function: while (_again) {
	        var obj1 = _x,
	            obj2 = _x2;
	        i = len = obj1Keys = obj2Keys = i = len = key = index = undefined;
	        _again = false;

	        if ((0, _interfaces.not)(_sameType2["default"])(obj1, obj2)) {
	            return false;
	        }

	        if ((0, _interfaces.all)(_decimal2["default"])(obj1, obj2)) {
	            return Math.abs(obj1 - obj2) < _epsilon2["default"];
	        }

	        if ((0, _interfaces.all)(_number2["default"])(obj1, obj2)) {
	            return obj1 === obj2 && 1 / obj1 === 1 / obj2;
	        }

	        if ((0, _interfaces.all)(_string2["default"])(obj1, obj2) || (0, _interfaces.all)(_regexp2["default"])(obj1, obj2)) {
	            return "" + obj1 === "" + obj2;
	        }

	        if ((0, _interfaces.all)(_boolean2["default"])(obj1, obj2)) {
	            return obj1 === obj2;
	        }

	        if ((0, _interfaces.all)(_array2["default"])(obj1, obj2)) {
	            if (obj1.length !== obj2.length) {
	                return false;
	            }

	            for (var i = 0, len = obj1.length; i < len; i++) {
	                if ((0, _interfaces.not)(_sameType2["default"])(obj1, obj2)) {
	                    return false;
	                }

	                if ((0, _interfaces.all)(_array2["default"])(obj1[i], obj2[i]) || (0, _interfaces.all)(_object2["default"])(obj1[i], obj2[i])) {
	                    _x = obj1[i];
	                    _x2 = obj2[i];
	                    _again = true;
	                    continue _function;
	                } else if (obj1[i] !== obj2[i]) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        if ((0, _interfaces.all)(_object2["default"])(obj1, obj2)) {
	            var obj1Keys = Object.keys(obj1),
	                obj2Keys = Object.keys(obj2);

	            if (!isitEqual(obj1Keys, obj2Keys)) {
	                return false;
	            }

	            for (var i = 0, len = obj1Keys.length; i < len; i++) {
	                var key = obj1Keys[i],
	                    index = obj2Keys.indexOf(key);

	                if (index === -1) {
	                    return false;
	                }

	                if ((0, _interfaces.all)(_array2["default"])(obj1[key], obj2[key]) || (0, _interfaces.all)(_object2["default"])(obj1[key], obj2[key])) {
	                    _x = obj1[key];
	                    _x2 = obj2[key];
	                    _again = true;
	                    continue _function;
	                } else if (obj1[key] !== obj2[key]) {
	                    return false;
	                }

	                obj2Keys.splice(index, 1);
	            }

	            return obj2Keys.length === 0;
	        }

	        return false;
	    }
	}

	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	// simple polyfill for Number.EPSILON

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = "EPSILON" in Number ? Number.EPSILON : 2.220446049250313e-16;
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a boolean value?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitBoolean;

	var _utils = __webpack_require__(2);

	function isitBoolean(obj) {
	    return obj === true || obj === false || _utils.toString.call(obj) === "[object Boolean]";
	}

	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a decimal value?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitDecimal;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _number = __webpack_require__(10);

	var _number2 = _interopRequireDefault(_number);

	function isitDecimal(obj) {
	    return (0, _number2["default"])(obj) && obj % 1 !== 0;
	}

	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a number?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitNumber;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _interfaces = __webpack_require__(1);

	var _utils = __webpack_require__(2);

	var _nanJs = __webpack_require__(11);

	var _nanJs2 = _interopRequireDefault(_nanJs);

	// it doesn't like just "nan"

	function isitNumber(obj) {
	    return (0, _interfaces.not)(_nanJs2["default"])(obj) && _utils.toString.call(obj) === "[object Number]";
	}

	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	// is obj NaN (Not A Number)?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitNaN;

	function isitNaN(obj) {
	    return obj !== obj;
	}

	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports) {

	// is obj an object value?
	// NOTE: will return true for functions as well

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitObject;

	function isitObject(obj) {
	    var type = typeof obj;

	    return type === "function" || type === "object";
	}

	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a RegExp value?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitRegExp;

	var _utils = __webpack_require__(2);

	function isitRegExp(obj) {
	    return _utils.toString.call(obj) === "[object RegExp]";
	}

	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// is obj1 and obj2 the same type?

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isitSameType;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _interfaces = __webpack_require__(1);

	var _utils = __webpack_require__(2);

	var _nanJs = __webpack_require__(11);

	var _nanJs2 = _interopRequireDefault(_nanJs);

	function isitSameType(obj1, obj2) {
	    if ((0, _interfaces.all)(_nanJs2["default"])(obj1, obj2)) {
	        return (0, _nanJs2["default"])(obj1) === (0, _nanJs2["default"])(obj2);
	    }

	    return _utils.toString.call(obj1) === _utils.toString.call(obj2);
	}

	module.exports = exports["default"];

/***/ }
/******/ ]);