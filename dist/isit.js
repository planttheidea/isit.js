(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
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

	// isit.js
	// Author: Tony Quetano
	
	// Forked from: isit.js
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
	
	var _isitArguments = __webpack_require__(5);
	
	var _isitArguments2 = _interopRequireDefault(_isitArguments);
	
	var _isitArray = __webpack_require__(3);
	
	var _isitArray2 = _interopRequireDefault(_isitArray);
	
	var _isitBoolean = __webpack_require__(7);
	
	var _isitBoolean2 = _interopRequireDefault(_isitBoolean);
	
	var _isitChar = __webpack_require__(8);
	
	var _isitChar2 = _interopRequireDefault(_isitChar);
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	var _isitError = __webpack_require__(11);
	
	var _isitError2 = _interopRequireDefault(_isitError);
	
	var _isitFunction = __webpack_require__(12);
	
	var _isitFunction2 = _interopRequireDefault(_isitFunction);
	
	var _isitJson = __webpack_require__(13);
	
	var _isitJson2 = _interopRequireDefault(_isitJson);
	
	var _isitNan = __webpack_require__(14);
	
	var _isitNan2 = _interopRequireDefault(_isitNan);
	
	var _isitNull = __webpack_require__(6);
	
	var _isitNull2 = _interopRequireDefault(_isitNull);
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	var _isitObject = __webpack_require__(16);
	
	var _isitObject2 = _interopRequireDefault(_isitObject);
	
	var _isitRegexp = __webpack_require__(17);
	
	var _isitRegexp2 = _interopRequireDefault(_isitRegexp);
	
	var _isitSameType = __webpack_require__(18);
	
	var _isitSameType2 = _interopRequireDefault(_isitSameType);
	
	var _isitString = __webpack_require__(9);
	
	var _isitString2 = _interopRequireDefault(_isitString);
	
	var _isitSymbol = __webpack_require__(19);
	
	var _isitSymbol2 = _interopRequireDefault(_isitSymbol);
	
	var _isitUndefined = __webpack_require__(20);
	
	var _isitUndefined2 = _interopRequireDefault(_isitUndefined);
	
	// Presence checks
	/* -------------------------------------------------------------------------- */
	
	var _isitEmpty = __webpack_require__(21);
	
	var _isitEmpty2 = _interopRequireDefault(_isitEmpty);
	
	var _isitExisty = __webpack_require__(22);
	
	var _isitExisty2 = _interopRequireDefault(_isitExisty);
	
	var _isitFalsy = __webpack_require__(23);
	
	var _isitFalsy2 = _interopRequireDefault(_isitFalsy);
	
	var _isitSpace = __webpack_require__(25);
	
	var _isitSpace2 = _interopRequireDefault(_isitSpace);
	
	var _isitTruthy = __webpack_require__(24);
	
	var _isitTruthy2 = _interopRequireDefault(_isitTruthy);
	
	// Arithmetic checks
	/* -------------------------------------------------------------------------- */
	
	var _isitAbove = __webpack_require__(26);
	
	var _isitAbove2 = _interopRequireDefault(_isitAbove);
	
	var _isitDecimal = __webpack_require__(27);
	
	var _isitDecimal2 = _interopRequireDefault(_isitDecimal);
	
	var _isitEqual = __webpack_require__(28);
	
	var _isitEqual2 = _interopRequireDefault(_isitEqual);
	
	var _isitEven = __webpack_require__(29);
	
	var _isitEven2 = _interopRequireDefault(_isitEven);
	
	var _isitFinite = __webpack_require__(30);
	
	var _isitFinite2 = _interopRequireDefault(_isitFinite);
	
	var _isitInfinite = __webpack_require__(31);
	
	var _isitInfinite2 = _interopRequireDefault(_isitInfinite);
	
	var _isitInteger = __webpack_require__(32);
	
	var _isitInteger2 = _interopRequireDefault(_isitInteger);
	
	var _isitNegative = __webpack_require__(33);
	
	var _isitNegative2 = _interopRequireDefault(_isitNegative);
	
	var _isitOdd = __webpack_require__(34);
	
	var _isitOdd2 = _interopRequireDefault(_isitOdd);
	
	var _isitPositive = __webpack_require__(35);
	
	var _isitPositive2 = _interopRequireDefault(_isitPositive);
	
	var _isitUnder = __webpack_require__(36);
	
	var _isitUnder2 = _interopRequireDefault(_isitUnder);
	
	var _isitWithin = __webpack_require__(37);
	
	var _isitWithin2 = _interopRequireDefault(_isitWithin);
	
	// Regexp checks
	/* -------------------------------------------------------------------------- */
	
	var _isitAffirmative = __webpack_require__(38);
	
	var _isitAffirmative2 = _interopRequireDefault(_isitAffirmative);
	
	var _isitAlphaNumeric = __webpack_require__(40);
	
	var _isitAlphaNumeric2 = _interopRequireDefault(_isitAlphaNumeric);
	
	var _isitCaPostalCode = __webpack_require__(41);
	
	var _isitCaPostalCode2 = _interopRequireDefault(_isitCaPostalCode);
	
	var _isitCreditCard = __webpack_require__(42);
	
	var _isitCreditCard2 = _interopRequireDefault(_isitCreditCard);
	
	var _isitDateString = __webpack_require__(43);
	
	var _isitDateString2 = _interopRequireDefault(_isitDateString);
	
	var _isitEmail = __webpack_require__(44);
	
	var _isitEmail2 = _interopRequireDefault(_isitEmail);
	
	var _isitEppPhone = __webpack_require__(45);
	
	var _isitEppPhone2 = _interopRequireDefault(_isitEppPhone);
	
	var _isitHexadecimal = __webpack_require__(46);
	
	var _isitHexadecimal2 = _interopRequireDefault(_isitHexadecimal);
	
	var _isitHexColor = __webpack_require__(47);
	
	var _isitHexColor2 = _interopRequireDefault(_isitHexColor);
	
	var _isitIp = __webpack_require__(48);
	
	var _isitIp2 = _interopRequireDefault(_isitIp);
	
	var _isitIpv4 = __webpack_require__(49);
	
	var _isitIpv42 = _interopRequireDefault(_isitIpv4);
	
	var _isitIpv6 = __webpack_require__(50);
	
	var _isitIpv62 = _interopRequireDefault(_isitIpv6);
	
	var _isitNanpPhone = __webpack_require__(51);
	
	var _isitNanpPhone2 = _interopRequireDefault(_isitNanpPhone);
	
	var _isitSocialSecurityNumber = __webpack_require__(52);
	
	var _isitSocialSecurityNumber2 = _interopRequireDefault(_isitSocialSecurityNumber);
	
	var _isitTimeString = __webpack_require__(53);
	
	var _isitTimeString2 = _interopRequireDefault(_isitTimeString);
	
	var _isitUkPostalCode = __webpack_require__(54);
	
	var _isitUkPostalCode2 = _interopRequireDefault(_isitUkPostalCode);
	
	var _isitUrl = __webpack_require__(55);
	
	var _isitUrl2 = _interopRequireDefault(_isitUrl);
	
	var _isitUsZipCode = __webpack_require__(56);
	
	var _isitUsZipCode2 = _interopRequireDefault(_isitUsZipCode);
	
	var _isitSetRegexp = __webpack_require__(57);
	
	var _isitSetRegexp2 = _interopRequireDefault(_isitSetRegexp);
	
	// String checks
	/* -------------------------------------------------------------------------- */
	
	var _isitCapitalized = __webpack_require__(58);
	
	var _isitCapitalized2 = _interopRequireDefault(_isitCapitalized);
	
	var _isitEndWith = __webpack_require__(59);
	
	var _isitEndWith2 = _interopRequireDefault(_isitEndWith);
	
	var _isitInclude = __webpack_require__(60);
	
	var _isitInclude2 = _interopRequireDefault(_isitInclude);
	
	var _isitLowercase = __webpack_require__(61);
	
	var _isitLowercase2 = _interopRequireDefault(_isitLowercase);
	
	var _isitPalindrome = __webpack_require__(62);
	
	var _isitPalindrome2 = _interopRequireDefault(_isitPalindrome);
	
	var _isitStartWith = __webpack_require__(63);
	
	var _isitStartWith2 = _interopRequireDefault(_isitStartWith);
	
	var _isitUppercase = __webpack_require__(64);
	
	var _isitUppercase2 = _interopRequireDefault(_isitUppercase);
	
	// String checks
	/* -------------------------------------------------------------------------- */
	
	// Object checks
	/* -------------------------------------------------------------------------- */
	
	var _isitDomNode = __webpack_require__(65);
	
	var _isitDomNode2 = _interopRequireDefault(_isitDomNode);
	
	var _isitPropertyCount = __webpack_require__(66);
	
	var _isitPropertyCount2 = _interopRequireDefault(_isitPropertyCount);
	
	var _isitPropertyDefined = __webpack_require__(67);
	
	var _isitPropertyDefined2 = _interopRequireDefault(_isitPropertyDefined);
	
	var _isitWindowObject = __webpack_require__(68);
	
	var _isitWindowObject2 = _interopRequireDefault(_isitWindowObject);
	
	// Array checks
	/* -------------------------------------------------------------------------- */
	
	var _isitInArray = __webpack_require__(69);
	
	var _isitInArray2 = _interopRequireDefault(_isitInArray);
	
	var _isitSorted = __webpack_require__(70);
	
	var _isitSorted2 = _interopRequireDefault(_isitSorted);
	
	// Date checks
	/* -------------------------------------------------------------------------- */
	
	var _isitDay = __webpack_require__(71);
	
	var _isitDay2 = _interopRequireDefault(_isitDay);
	
	var _isitDaylightSavingTime = __webpack_require__(73);
	
	var _isitDaylightSavingTime2 = _interopRequireDefault(_isitDaylightSavingTime);
	
	var _isitFuture = __webpack_require__(74);
	
	var _isitFuture2 = _interopRequireDefault(_isitFuture);
	
	var _isitInDateRange = __webpack_require__(75);
	
	var _isitInDateRange2 = _interopRequireDefault(_isitInDateRange);
	
	var _isitInLastMonth = __webpack_require__(76);
	
	var _isitInLastMonth2 = _interopRequireDefault(_isitInLastMonth);
	
	var _isitInLastWeek = __webpack_require__(77);
	
	var _isitInLastWeek2 = _interopRequireDefault(_isitInLastWeek);
	
	var _isitInLastYear = __webpack_require__(78);
	
	var _isitInLastYear2 = _interopRequireDefault(_isitInLastYear);
	
	var _isitLeapYear = __webpack_require__(79);
	
	var _isitLeapYear2 = _interopRequireDefault(_isitLeapYear);
	
	var _isitMonth = __webpack_require__(80);
	
	var _isitMonth2 = _interopRequireDefault(_isitMonth);
	
	var _isitInNextMonth = __webpack_require__(81);
	
	var _isitInNextMonth2 = _interopRequireDefault(_isitInNextMonth);
	
	var _isitInNextWeek = __webpack_require__(82);
	
	var _isitInNextWeek2 = _interopRequireDefault(_isitInNextWeek);
	
	var _isitInNextYear = __webpack_require__(83);
	
	var _isitInNextYear2 = _interopRequireDefault(_isitInNextYear);
	
	var _isitPast = __webpack_require__(84);
	
	var _isitPast2 = _interopRequireDefault(_isitPast);
	
	var _isitQuarterOfYear = __webpack_require__(85);
	
	var _isitQuarterOfYear2 = _interopRequireDefault(_isitQuarterOfYear);
	
	var _isitToday = __webpack_require__(86);
	
	var _isitToday2 = _interopRequireDefault(_isitToday);
	
	var _isitTomorrow = __webpack_require__(87);
	
	var _isitTomorrow2 = _interopRequireDefault(_isitTomorrow);
	
	var _isitWeekday = __webpack_require__(88);
	
	var _isitWeekday2 = _interopRequireDefault(_isitWeekday);
	
	var _isitWeekend = __webpack_require__(89);
	
	var _isitWeekend2 = _interopRequireDefault(_isitWeekend);
	
	var _isitYear = __webpack_require__(90);
	
	var _isitYear2 = _interopRequireDefault(_isitYear);
	
	var _isitYesterday = __webpack_require__(91);
	
	var _isitYesterday2 = _interopRequireDefault(_isitYesterday);
	
	// Environment checks
	/* -------------------------------------------------------------------------- */
	
	var _isitAndroid = __webpack_require__(92);
	
	var _isitAndroid2 = _interopRequireDefault(_isitAndroid);
	
	var _isitAndroidPhone = __webpack_require__(93);
	
	var _isitAndroidPhone2 = _interopRequireDefault(_isitAndroidPhone);
	
	var _isitAndroidTablet = __webpack_require__(94);
	
	var _isitAndroidTablet2 = _interopRequireDefault(_isitAndroidTablet);
	
	var _isitBlackberry = __webpack_require__(95);
	
	var _isitBlackberry2 = _interopRequireDefault(_isitBlackberry);
	
	var _isitBlink = __webpack_require__(96);
	
	var _isitBlink2 = _interopRequireDefault(_isitBlink);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	var _isitChrome = __webpack_require__(97);
	
	var _isitChrome2 = _interopRequireDefault(_isitChrome);
	
	var _isitDesktop = __webpack_require__(98);
	
	var _isitDesktop2 = _interopRequireDefault(_isitDesktop);
	
	var _isitIe = __webpack_require__(107);
	
	var _isitIe2 = _interopRequireDefault(_isitIe);
	
	var _isitFirefox = __webpack_require__(108);
	
	var _isitFirefox2 = _interopRequireDefault(_isitFirefox);
	
	var _isitGecko = __webpack_require__(109);
	
	var _isitGecko2 = _interopRequireDefault(_isitGecko);
	
	var _isitIos = __webpack_require__(110);
	
	var _isitIos2 = _interopRequireDefault(_isitIos);
	
	var _isitIpad = __webpack_require__(105);
	
	var _isitIpad2 = _interopRequireDefault(_isitIpad);
	
	var _isitIphone = __webpack_require__(100);
	
	var _isitIphone2 = _interopRequireDefault(_isitIphone);
	
	var _isitIpod = __webpack_require__(101);
	
	var _isitIpod2 = _interopRequireDefault(_isitIpod);
	
	var _isitLinux = __webpack_require__(111);
	
	var _isitLinux2 = _interopRequireDefault(_isitLinux);
	
	var _isitMac = __webpack_require__(112);
	
	var _isitMac2 = _interopRequireDefault(_isitMac);
	
	var _isitMobile = __webpack_require__(99);
	
	var _isitMobile2 = _interopRequireDefault(_isitMobile);
	
	var _isitNode = __webpack_require__(113);
	
	var _isitNode2 = _interopRequireDefault(_isitNode);
	
	var _isitOffline = __webpack_require__(114);
	
	var _isitOffline2 = _interopRequireDefault(_isitOffline);
	
	var _isitOnline = __webpack_require__(115);
	
	var _isitOnline2 = _interopRequireDefault(_isitOnline);
	
	var _isitOpera = __webpack_require__(116);
	
	var _isitOpera2 = _interopRequireDefault(_isitOpera);
	
	var _isitPresto = __webpack_require__(117);
	
	var _isitPresto2 = _interopRequireDefault(_isitPresto);
	
	var _isitRetina = __webpack_require__(118);
	
	var _isitRetina2 = _interopRequireDefault(_isitRetina);
	
	var _isitSafari = __webpack_require__(119);
	
	var _isitSafari2 = _interopRequireDefault(_isitSafari);
	
	var _isitTablet = __webpack_require__(104);
	
	var _isitTablet2 = _interopRequireDefault(_isitTablet);
	
	var _isitTouchDevice = __webpack_require__(120);
	
	var _isitTouchDevice2 = _interopRequireDefault(_isitTouchDevice);
	
	var _isitTrident = __webpack_require__(121);
	
	var _isitTrident2 = _interopRequireDefault(_isitTrident);
	
	var _isitWebkit = __webpack_require__(122);
	
	var _isitWebkit2 = _interopRequireDefault(_isitWebkit);
	
	var _isitWindows = __webpack_require__(103);
	
	var _isitWindows2 = _interopRequireDefault(_isitWindows);
	
	var _isitWindowsPhone = __webpack_require__(102);
	
	var _isitWindowsPhone2 = _interopRequireDefault(_isitWindowsPhone);
	
	var _isitWindowsTablet = __webpack_require__(106);
	
	var _isitWindowsTablet2 = _interopRequireDefault(_isitWindowsTablet);
	
	function setInterfaces(options) {
	    for (var option in options) {
	        if (_utils.hasOwnProperty.call(options, option) && (0, _isitFunction2["default"])(options[option])) {
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
	
	var isit = {
	    all: {},
	    any: {},
	    not: {},
	    version: "1.0.0"
	};
	
	isit.arguments = _isitArguments2["default"];
	isit.array = _isitArray2["default"];
	isit.boolean = _isitBoolean2["default"];
	isit.char = _isitChar2["default"];
	isit.date = _isitDate2["default"];
	isit.error = _isitError2["default"];
	isit["function"] = _isitFunction2["default"];
	isit.nan = _isitNan2["default"];
	isit["null"] = _isitNull2["default"];
	isit.number = _isitNumber2["default"];
	isit.object = _isitObject2["default"];
	isit.json = _isitJson2["default"];
	isit.regexp = _isitRegexp2["default"];
	isit.sameType = _isitSameType2["default"];
	isit.string = _isitString2["default"];
	isit.symbol = _isitSymbol2["default"];
	isit.undefined = _isitUndefined2["default"];
	
	// api restrictions
	isit.sameType.api = ["not"];
	
	isit.empty = _isitEmpty2["default"];
	isit.existy = _isitExisty2["default"];
	isit.falsy = _isitFalsy2["default"];
	isit.space = _isitSpace2["default"];
	isit.truthy = _isitTruthy2["default"];
	
	isit.above = _isitAbove2["default"];
	isit.decimal = _isitDecimal2["default"];
	isit.equal = _isitEqual2["default"];
	isit.even = _isitEven2["default"];
	isit.finite = _isitFinite2["default"];
	isit.infinite = _isitInfinite2["default"];
	isit.integer = _isitInteger2["default"];
	isit.negative = _isitNegative2["default"];
	isit.odd = _isitOdd2["default"];
	isit.positive = _isitPositive2["default"];
	isit.under = _isitUnder2["default"];
	isit.within = _isitWithin2["default"];
	
	// api restrictions
	isit.above.api = ["not"];
	isit.equal.api = ["not"];
	isit.under.api = ["not"];
	isit.within.api = ["not"];
	
	isit.affirmative = _isitAffirmative2["default"];
	isit.alphaNumeric = _isitAlphaNumeric2["default"];
	isit.caPostalCode = _isitCaPostalCode2["default"];
	isit.creditCard = _isitCreditCard2["default"];
	isit.dateString = _isitDateString2["default"];
	isit.email = _isitEmail2["default"];
	isit.eppPhone = _isitEppPhone2["default"];
	isit.hexadecimal = _isitHexadecimal2["default"];
	isit.hexColor = _isitHexColor2["default"];
	isit.ip = _isitIp2["default"];
	isit.ipv4 = _isitIpv42["default"];
	isit.ipv6 = _isitIpv62["default"];
	isit.nanpPhone = _isitNanpPhone2["default"];
	isit.setRegexp = _isitSetRegexp2["default"].bind(isit);
	isit.socialSecurityNumber = _isitSocialSecurityNumber2["default"];
	isit.timeString = _isitTimeString2["default"];
	isit.ukPostalCode = _isitUkPostalCode2["default"];
	isit.url = _isitUrl2["default"];
	isit.usZipCode = _isitUsZipCode2["default"];
	
	isit.capitalized = _isitCapitalized2["default"];
	isit.endWith = _isitEndWith2["default"];
	isit.include = _isitInclude2["default"];
	isit.lowercase = _isitLowercase2["default"];
	isit.palindrome = _isitPalindrome2["default"];
	isit.startWith = _isitStartWith2["default"];
	isit.uppercase = _isitUppercase2["default"];
	
	// api restrictions
	isit.endWith.api = ["not"];
	isit.include.api = ["not"];
	isit.startWith.api = ["not"];
	
	isit.domNode = _isitDomNode2["default"];
	isit.propertyCount = _isitPropertyCount2["default"];
	isit.propertyDefined = _isitPropertyDefined2["default"];
	isit.windowObject = _isitWindowObject2["default"];
	
	// api restrictions
	isit.propertyCount.api = ["not"];
	isit.propertyDefined.api = ["not"];
	
	isit.inArray = _isitInArray2["default"];
	isit.sorted = _isitSorted2["default"];
	
	// api restrictions
	isit.inArray.api = ["not"];
	
	isit.day = _isitDay2["default"];
	isit.daylightSavingTime = _isitDaylightSavingTime2["default"];
	isit.future = _isitFuture2["default"];
	isit.inDateRange = _isitInDateRange2["default"];
	isit.inLastMonth = _isitInLastMonth2["default"];
	isit.inLastWeek = _isitInLastWeek2["default"];
	isit.inLastYear = _isitInLastYear2["default"];
	isit.leaYear = _isitLeapYear2["default"];
	isit.month = _isitMonth2["default"];
	isit.inNextMonth = _isitInNextMonth2["default"];
	isit.inNextWeek = _isitInNextWeek2["default"];
	isit.inNextYear = _isitInNextYear2["default"];
	isit.past = _isitPast2["default"];
	isit.quarterOfYear = _isitQuarterOfYear2["default"];
	isit.today = _isitToday2["default"];
	isit.tomorrow = _isitTomorrow2["default"];
	isit.weekday = _isitWeekday2["default"];
	isit.weekend = _isitWeekend2["default"];
	isit.year = _isitYear2["default"];
	isit.yesterday = _isitYesterday2["default"];
	
	// api restrictions
	isit.day.api = ["not"];
	isit.inDateRange.api = ["not"];
	isit.month.api = ["not"];
	isit.quarterOfYear.api = ["not"];
	isit.year.api = ["not"];
	
	isit.android = _isitAndroid2["default"];
	isit.androidPhone = _isitAndroidPhone2["default"];
	isit.androidTablet = _isitAndroidTablet2["default"];
	isit.blackberry = _isitBlackberry2["default"];
	isit.blink = _isitBlink2["default"];
	isit.browser = _isitBrowser2["default"];
	isit.chrome = _isitChrome2["default"];
	isit.desktop = _isitDesktop2["default"];
	isit.firefox = _isitFirefox2["default"];
	isit.gecko = _isitGecko2["default"];
	isit.ie = _isitIe2["default"];
	isit.ios = _isitIos2["default"];
	isit.ipad = _isitIpad2["default"];
	isit.iphone = _isitIphone2["default"];
	isit.ipod = _isitIpod2["default"];
	isit.linux = _isitLinux2["default"];
	isit.mac = _isitMac2["default"];
	isit.mobile = _isitMobile2["default"];
	isit.node = _isitNode2["default"];
	isit.offline = _isitOffline2["default"];
	isit.online = _isitOnline2["default"];
	isit.opera = _isitOpera2["default"];
	isit.presto = _isitPresto2["default"];
	isit.retina = _isitRetina2["default"];
	isit.safari = _isitSafari2["default"];
	isit.tablet = _isitTablet2["default"];
	isit.touchDevice = _isitTouchDevice2["default"];
	isit.trident = _isitTrident2["default"];
	isit.webkit = _isitWebkit2["default"];
	isit.windows = _isitWindows2["default"];
	isit.windowsPhone = _isitWindowsPhone2["default"];
	isit.windowsTablet = _isitWindowsTablet2["default"];
	
	// api restrictions
	isit.android.api = ["not"];
	isit.androidPhone.api = ["not"];
	isit.androidTablet.api = ["not"];
	isit.blackberry.api = ["not"];
	isit.blink.api = ["not"];
	isit.browser.api = ["not"];
	isit.chrome.api = ["not"];
	isit.desktop.api = ["not"];
	isit.firefox.api = ["not"];
	isit.gecko.api = ["not"];
	isit.ie.api = ["not"];
	isit.ios.api = ["not"];
	isit.ipad.api = ["not"];
	isit.iphone.api = ["not"];
	isit.ipod.api = ["not"];
	isit.linux.api = ["not"];
	isit.mac.api = ["not"];
	isit.mobile.api = ["not"];
	isit.node.api = ["not"];
	isit.offline.api = ["not"];
	isit.online.api = ["not"];
	isit.opera.api = ["not"];
	isit.presto.api = ["not"];
	isit.retina.api = ["not"];
	isit.safari.api = ["not"];
	isit.tablet.api = ["not"];
	isit.touchDevice.api = ["not"];
	isit.trident.api = ["not"];
	isit.webkit.api = ["not"];
	isit.windows.api = ["not"];
	isit.windowsPhone.api = ["not"];
	isit.windowsTablet.api = ["not"];
	
	setInterfaces(isit);
	
	exports["default"] = isit;
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
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	var arraySlice = Array.prototype.slice;
	
	exports.arraySlice = arraySlice;
	var navigatorInfo = (function () {
	    if (!(0, _isitBrowser2["default"])()) {
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitArray = __webpack_require__(3);
	
	var _isitArray2 = _interopRequireDefault(_isitArray);
	
	function getParams(args) {
	    var params = _utils.arraySlice.call(args),
	        len = params.length;
	
	    if (len === 1 && (0, _isitArray2["default"])(params[0])) {
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
	
	var _utils = __webpack_require__(1);
	
	exports["default"] = Array.isArray || function isArray(obj) {
	    return _utils.toString.call(obj) === "[object Array]";
	};
	
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isBrowser;
	
	function isBrowser() {
	    return typeof window !== "undefined";
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
	
	var _isitNull = __webpack_require__(6);
	
	var _isitNull2 = _interopRequireDefault(_isitNull);
	
	function isArguments(obj) {
	    return (0, _helpers.not)((0, _isitNull2["default"])(obj)) && _utils.toString.call(obj) === "[object Arguments]" || typeof obj === "object" && "callee" in obj;
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
	exports["default"] = isBoolean;
	
	var _utils = __webpack_require__(1);
	
	function isBoolean(obj) {
	    return obj === true || obj === false || _utils.toString.call(obj) === "[object Boolean]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isChar;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitString = __webpack_require__(9);
	
	var _isitString2 = _interopRequireDefault(_isitString);
	
	function isChar(obj) {
	    return (0, _isitString2["default"])(obj) && obj.length === 1;
	}
	
	module.exports = exports["default"];

/***/ },
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isNumber;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _utils = __webpack_require__(1);
	
	var _isitNan = __webpack_require__(14);
	
	var _isitNan2 = _interopRequireDefault(_isitNan);
	
	function isNumber(obj) {
	    return (0, _helpers.not)((0, _isitNan2["default"])(obj)) && _utils.toString.call(obj) === "[object Number]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isSameType;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitNan = __webpack_require__(14);
	
	var _isitNan2 = _interopRequireDefault(_isitNan);
	
	function isSameType(obj1, obj2) {
	    if ((0, _isitNan2["default"])(obj1) || (0, _isitNan2["default"])(obj2)) {
	        return (0, _isitNan2["default"])(obj1) === (0, _isitNan2["default"])(obj2);
	    }
	
	    return _utils.toString.call(obj1) === _utils.toString.call(obj2);
	}
	
	module.exports = exports["default"];

/***/ },
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isEmpty;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitArray = __webpack_require__(3);
	
	var _isitArray2 = _interopRequireDefault(_isitArray);
	
	var _isitArguments = __webpack_require__(5);
	
	var _isitArguments2 = _interopRequireDefault(_isitArguments);
	
	var _isitObject = __webpack_require__(16);
	
	var _isitObject2 = _interopRequireDefault(_isitObject);
	
	function isEmpty(obj) {
	    if ((0, _isitObject2["default"])(obj)) {
	        var num = Object.getOwnPropertyNames(obj).length;
	
	        return num === 0 || num === 1 && (0, _isitArray2["default"])(obj) || num === 2 && (0, _isitArguments2["default"])(obj);
	    }
	
	    return value === "";
	}
	
	module.exports = exports["default"];

/***/ },
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isFalsy;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitTruthy = __webpack_require__(24);
	
	var _isitTruthy2 = _interopRequireDefault(_isitTruthy);
	
	function isFalsy(obj) {
	    return (0, _helpers.not)((0, _isitTruthy2["default"])(obj));
	}
	
	;
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isTruthy;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitExisty = __webpack_require__(22);
	
	var _isitExisty2 = _interopRequireDefault(_isitExisty);
	
	var _isitNan = __webpack_require__(14);
	
	var _isitNan2 = _interopRequireDefault(_isitNan);
	
	function isTruthy(obj) {
	    return (0, _isitExisty2["default"])(obj) && obj !== false && (0, _helpers.not)((0, _isitNan2["default"])(obj)) && value !== "" && value !== 0;
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
	exports["default"] = isSpace;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitChar = __webpack_require__(8);
	
	var _isitChar2 = _interopRequireDefault(_isitChar);
	
	function isSpace(obj) {
	    if ((0, _isitChar2["default"])(obj)) {
	        var charCode = obj.charCodeAt(0);
	
	        return charCode > 0 && charCode < 14 || charCode === 32;
	    }
	
	    return false;
	}
	
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isAbove;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	function isAbove(obj, min) {
	    return (0, _helpers.all)((0, _isitNumber2["default"])(obj, min)) && obj > min;
	}
	
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isDecimal;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	function isDecimal(obj) {
	    return (0, _isitNumber2["default"])(obj) && obj % 1 !== 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isEqual;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitBoolean = __webpack_require__(7);
	
	var _isitBoolean2 = _interopRequireDefault(_isitBoolean);
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	var _isitRegexp = __webpack_require__(17);
	
	var _isitRegexp2 = _interopRequireDefault(_isitRegexp);
	
	var _isitSameType = __webpack_require__(18);
	
	var _isitSameType2 = _interopRequireDefault(_isitSameType);
	
	var _isitString = __webpack_require__(9);
	
	var _isitString2 = _interopRequireDefault(_isitString);
	
	function isEqual(_x, _x2) {
	    var _again = true;
	
	    _function: while (_again) {
	        var obj1 = _x,
	            obj2 = _x2;
	        i = len = obj1Keys = obj2Keys = i = len = key = index = undefined;
	        _again = false;
	
	        if ((0, _helpers.not)((0, _isitSameType2["default"])(obj1, obj2))) {
	            return false;
	        }
	
	        if ((0, _helpers.all)((0, _isitNumber2["default"])(obj1, obj2))) {
	            return obj1 === obj2 && 1 / obj1 === 1 / obj2;
	        }
	
	        if ((0, _helpers.all)((0, _isitString2["default"])(obj1, obj2)) || (0, _helpers.all)((0, _isitRegexp2["default"])(obj1, obj2))) {
	            return "" + obj1 === "" + obj2;
	        }
	
	        if ((0, _helpers.all)((0, _isitBoolean2["default"])(obj1, obj2))) {
	            return obj1 === obj2;
	        }
	
	        if ((0, _helpers.all)(isArray(obj1, obj2))) {
	            if (obj1.length !== obj2.length) {
	                return false;
	            }
	
	            for (var i = 0, len = obj1.length; i < len; i++) {
	                if ((0, _helpers.not)((0, _isitSameType2["default"])(obj1, obj2))) {
	                    return false;
	                }
	
	                if ((0, _helpers.all)(isArray(obj1[i], obj2[i])) || (0, _helpers.all)(isObject(obj1[i], obj2[i]))) {
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
	
	        if ((0, _helpers.all)(isObject(obj1, obj2))) {
	            var obj1Keys = Object.keys(obj1),
	                obj2Keys = Object.keys(obj2);
	
	            if (!isEqual(obj1Keys, obj2Keys)) {
	                return false;
	            }
	
	            for (var i = 0, len = obj1Keys.length; i < len; i++) {
	                var key = obj1Keys[i],
	                    index = obj2Keys.indexOf(key);
	
	                if (index === -1) {
	                    return false;
	                }
	
	                if ((0, _helpers.all)(isArray(obj1[key], obj2[key])) || (0, _helpers.all)(isObject(obj1[key], obj2[keu]))) {
	                    _x = obj1[key];
	                    _x2 = obj2[key];
	                    _again = true;
	                    continue _function;
	                } else if (obj1[key] !== obj2[key]) {
	                    return false;
	                }
	
	                obj2Keys.splice(index, 1);
	            }
	
	            if (obj2Keys.length !== -1) {
	                return false;
	            }
	
	            return true;
	        }
	
	        return false;
	    }
	}
	
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isEven;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	function isEven(obj) {
	    return (0, _isitNumber2["default"])(obj) && obj % 2 === 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitNan = __webpack_require__(14);
	
	var _isitNan2 = _interopRequireDefault(_isitNan);
	
	exports["default"] = isFinite || function isFinite(obj) {
	    return obj !== Infinity && obj !== -Infinity && (0, _helpers.not)((0, _isitNan2["default"])(obj));
	};
	
	module.exports = exports["default"];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInfinite;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitFinite = __webpack_require__(30);
	
	var _isitFinite2 = _interopRequireDefault(_isitFinite);
	
	function isInfinite(obj) {
	    return (0, _helpers.not)((0, _isitFinite2["default"])(obj));
	}
	
	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInteger;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	function isInteger(obj) {
	    return (0, _isitNumber2["default"])(obj) && obj % 1 === 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isNegative;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	function isNegative(obj) {
	    return (0, _isitNumber2["default"])(obj) && obj < 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isOdd;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	function isOdd(obj) {
	    return (0, _isitNumber2["default"])(obj) && obj % 2 !== 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isPositive;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	function isPositive(obj) {
	    return (0, _isitNumber2["default"])(obj) && obj > 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isUnder;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	function isUnder(obj, max) {
	    return (0, _helpers.all)((0, _isitNumber2["default"])(obj, max)) && obj < max;
	}
	
	module.exports = exports["default"];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isWithin;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	function isWithin(obj, min, max) {
	    return (0, _helpers.all)((0, _isitNumber2["default"])(obj, min, max)) && obj > min && obj < max;
	}
	
	module.exports = exports["default"];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isAffirmative;
	
	var _regexps = __webpack_require__(39);
	
	function isAffirmative(obj) {
	    return _regexps.affirmative.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 39 */
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
	    hexColor: /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/,
	    ip: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
	    ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
	    ipv6: /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
	    nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
	    socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
	    timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
	    ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
	    url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
	    usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
	    whitespace: /^\s+$/
	};
	module.exports = exports["default"];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isAlphaNumeric;
	
	var _regexps = __webpack_require__(39);
	
	function isAlphaNumeric(obj) {
	    return _regexps.alphaNumeric.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isCaPostalCode;
	
	var _regexps = __webpack_require__(39);
	
	function isCaPostalCode(obj) {
	    return _regexps.caPostalCode.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isCreditCard;
	
	var _regexps = __webpack_require__(39);
	
	function isCreditCard(obj) {
	    return _regexps.creditCard.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isDateString;
	
	var _regexps = __webpack_require__(39);
	
	function isDateString(obj) {
	    return _regexps.dateString.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isEmail;
	
	var _regexps = __webpack_require__(39);
	
	function isEmail(obj) {
	    return _regexps.email.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isEppPhone;
	
	var _regexps = __webpack_require__(39);
	
	function isEppPhone(obj) {
	    return _regexps.eppPhone.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isHexadecimal;
	
	var _regexps = __webpack_require__(39);
	
	function isHexadecimal(obj) {
	    return _regexps.hexadecimal.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isHexColor;
	
	var _regexps = __webpack_require__(39);
	
	function isHexColor(obj) {
	    return _regexps.hexColor.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isIp;
	
	var _regexps = __webpack_require__(39);
	
	function isIp(obj) {
	    return _regexps.ip.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isIpv4;
	
	var _regexps = __webpack_require__(39);
	
	function isIpv4(obj) {
	    return _regexps.ipv4.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isIpv6;
	
	var _regexps = __webpack_require__(39);
	
	function isIpv6(obj) {
	    return _regexps.ipv6.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isNanpPhone;
	
	var _regexps = __webpack_require__(39);
	
	function isNanpPhone(obj) {
	    return _regexps.nanpPhone.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isSocialSecurityNumber;
	
	var _regexps = __webpack_require__(39);
	
	function isSocialSecurityNumber(obj) {
	    return _regexps.socialSecurityNumber.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isTimeString;
	
	var _regexps = __webpack_require__(39);
	
	function isTimeString(obj) {
	    return _regexps.timeString.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isUkPostalCode;
	
	var _regexps = __webpack_require__(39);
	
	function isUkPostalCode(obj) {
	    return _regexps.ukPostalCode.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isUrl;
	
	var _regexps = __webpack_require__(39);
	
	function isUrl(obj) {
	    return _regexps.url.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isUsZipCode;
	
	var _regexps = __webpack_require__(39);
	
	function isUsZipCode(obj) {
	    return _regexps.usZipCode.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = setRegexp;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _regexps = __webpack_require__(39);
	
	var _regexps2 = _interopRequireDefault(_regexps);
	
	function setRegexp(regexp, regexpName) {
	    for (var r in _regexps2["default"]) {
	        if (_utils.hasOwnProperty.call(_regexps2["default"], r) && regexpName === r) {
	            this[isit + regexpName.charAt(0).toUpperCase() + regexpName.slice(1)] = regexp;
	        }
	    }
	}
	
	module.exports = exports["default"];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isCapitalized;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitString = __webpack_require__(9);
	
	var _isitString2 = _interopRequireDefault(_isitString);
	
	var _isitTruthy = __webpack_require__(24);
	
	var _isitTruthy2 = _interopRequireDefault(_isitTruthy);
	
	function isCapitalized(obj) {
	    if ((0, _helpers.not)((0, _isitString2["default"])(obj))) {
	        return false;
	    }
	
	    var words = obj.split(" "),
	        capitalized = [];
	
	    for (var i = 0, len = words.length; i < len; i++) {
	        capitalized[i] = words[i][0] === words[i][0].toUpperCase();
	    }
	
	    return (0, _helpers.all)(_isitTruthy2["default"].apply(null, capitalized));
	}
	
	module.exports = exports["default"];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isEndWith;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitString = __webpack_require__(9);
	
	var _isitString2 = _interopRequireDefault(_isitString);
	
	function isEndWith(obj, endStr) {
	    return (0, _isitString2["default"])(obj) && str.indexOf(endStr) === str.length - endStr.length;
	}
	
	module.exports = exports["default"];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInclude;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitArray = __webpack_require__(3);
	
	var _isitArray2 = _interopRequireDefault(_isitArray);
	
	var _isitString = __webpack_require__(9);
	
	var _isitString2 = _interopRequireDefault(_isitString);
	
	function isInclude(obj, substr) {
	    return ((0, _isitArray2["default"])(obj) || (0, _isitString2["default"])(obj)) && obj.indexOf(substr) !== -1;
	}
	
	module.exports = exports["default"];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isLowercase;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitString = __webpack_require__(9);
	
	var _isitString2 = _interopRequireDefault(_isitString);
	
	function isLowercase(obj) {
	    return (0, _isitString2["default"])(obj) && str === str.toLowerCase();
	}
	
	module.exports = exports["default"];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isPalindrome;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitString = __webpack_require__(9);
	
	var _isitString2 = _interopRequireDefault(_isitString);
	
	function isPalindrome(obj) {
	    return (0, _isitString2["default"])(obj) && str === str.split("").reverse().join("");
	}
	
	module.exports = exports["default"];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isStartWith;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitString = __webpack_require__(9);
	
	var _isitString2 = _interopRequireDefault(_isitString);
	
	function isStartWith(obj, startStr) {
	    return (0, _isitString2["default"])(obj) && str.indexOf(startStr) === 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isUppercase;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitString = __webpack_require__(9);
	
	var _isitString2 = _interopRequireDefault(_isitString);
	
	function isUppercase(obj) {
	    return (0, _isitString2["default"])(obj) && str === str.toUpperCase();
	}
	
	module.exports = exports["default"];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isDomNode;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitObject = __webpack_require__(16);
	
	var _isitObject2 = _interopRequireDefault(_isitObject);
	
	function isDomNode(obj) {
	    return (0, _isitObject2["default"])(obj) && obj.nodeType > 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isPropertyCount;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	var _isitObject = __webpack_require__(16);
	
	var _isitObject2 = _interopRequireDefault(_isitObject);
	
	function isPropertyCount(obj, count) {
	    if (!(0, _isitObject2["default"])(obj) || !(0, _isitNumber2["default"])(count)) {
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isPropertyDefined;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitObject = __webpack_require__(16);
	
	var _isitObject2 = _interopRequireDefault(_isitObject);
	
	var _isitString = __webpack_require__(9);
	
	var _isitString2 = _interopRequireDefault(_isitString);
	
	function isPropertyDefined(obj, prop) {
	    return (0, _isitObject2["default"])(obj) && (0, _isitString2["default"])(prop) && prop in obj;
	}
	
	module.exports = exports["default"];

/***/ },
/* 68 */
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInArray;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitArray = __webpack_require__(3);
	
	var _isitArray2 = _interopRequireDefault(_isitArray);
	
	function isInArray(obj, arr) {
	    if ((0, _helpers.not)((0, _isitArray2["default"])(arr))) {
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isSorted;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitArray = __webpack_require__(3);
	
	var _isitArray2 = _interopRequireDefault(_isitArray);
	
	function isArraySortedAsc(arr) {
	    for (var i = 0, len = arr.length; i < len; i++) {
	        var next = arr[i + 1];
	
	        if (typeof next !== "undefined" && arr[i] > next) {
	            return false;
	        }
	    }
	
	    return true;
	}
	
	function isArraySortedDesc(arr) {
	    for (var i = 0, len = arr.length; i < len; i++) {
	        var next = arr[i + 1];
	
	        if (typeof next !== "undefined" && arr[i] < next) {
	            return false;
	        }
	    }
	
	    return true;
	}
	
	function isSorted(arr) {
	    if ((0, _helpers.not)((0, _isitArray2["default"])(arr))) {
	        return false;
	    }
	
	    return isArraySortedAsc(arr) || isArraySortedDesc(arr);
	}
	
	module.exports = exports["default"];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isDay;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	var _dateNames = __webpack_require__(72);
	
	function isDay(obj, dayString) {
	    return (0, _isitDate2["default"])(obj) && isString(dayString) && dayString.toLowerCase() === _dateNames.days[obj.getDay()];
	}
	
	module.exports = exports["default"];

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
	
	exports.days = days;
	var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
	
	exports.months = months;
	exports["default"] = {
	    days: days,
	    months: months
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isDaylightSavingTime;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	function isDaylightSavingTime(obj) {
	    if (!(0, _isitDate2["default"])(obj)) {
	        return false;
	    }
	
	    var objYear = obj.getFullYear(),
	        jan = new Date(objYear, 0, 1),
	        jul = new Date(objYear, 6, 1);
	
	    return obj.getTimezoneOffset() < Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
	}
	
	module.exports = exports["default"];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isFuture;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	function isFuture(obj) {
	    return (0, _isitDate2["default"])(obj) && obj.getTime() > new Date().getTime();
	}
	
	module.exports = exports["default"];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInDateRange;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	function isInDateRange(obj, startObj, endObj) {
	    if (!(0, _isitDate2["default"])(obj) || !(0, _isitDate2["default"])(startObj) || !(0, _isitDate2["default"])(endObj)) {
	        return false;
	    }
	
	    var objTime = obj.getTime();
	
	    return objTime > startObj.getTime() && objTime < endObj.getTime();
	}
	
	module.exports = exports["default"];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInLastMonth;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitInDateRange = __webpack_require__(75);
	
	var _isitInDateRange2 = _interopRequireDefault(_isitInDateRange);
	
	function isInLastMonth(obj) {
	    return (0, _isitInDateRange2["default"])(obj, new Date(new Date().setDate(new Date().getMonth() - 1)), new Date());
	}
	
	module.exports = exports["default"];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInLastWeek;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitInDateRange = __webpack_require__(75);
	
	var _isitInDateRange2 = _interopRequireDefault(_isitInDateRange);
	
	function isInLastWeek(obj) {
	    return (0, _isitInDateRange2["default"])(obj, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
	}
	
	module.exports = exports["default"];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInLastYear;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitInDateRange = __webpack_require__(75);
	
	var _isitInDateRange2 = _interopRequireDefault(_isitInDateRange);
	
	function isInLastYear(obj) {
	    return (0, _isitInDateRange2["default"])(obj, new Date(new Date().setDate(new Date().getFullYear() - 1)), new Date());
	}
	
	module.exports = exports["default"];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isLeapYear;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	function isLeapYear(obj) {
	    return (0, _isitNumber2["default"])(obj) && (obj % 4 === 0 && obj % 100 !== 0 || obj % 400 === 0);
	}
	
	module.exports = exports["default"];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isMonth;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	var _dateNames = __webpack_require__(72);
	
	function isMonth(obj, monthString) {
	    return (0, _isitDate2["default"])(obj) && isString(monthString) && monthString.toLowerCase() === _dateNames.months[obj.getMonth()];
	}
	
	module.exports = exports["default"];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInNextMonth;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitInDateRange = __webpack_require__(75);
	
	var _isitInDateRange2 = _interopRequireDefault(_isitInDateRange);
	
	function isInNextMonth(obj) {
	    return (0, _isitInDateRange2["default"])(obj, new Date(), new Date(new Date().setDate(new Date().getMonth() + 1)));
	}
	
	module.exports = exports["default"];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInNextWeek;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitInDateRange = __webpack_require__(75);
	
	var _isitInDateRange2 = _interopRequireDefault(_isitInDateRange);
	
	function isInNextWeek(obj) {
	    return (0, _isitInDateRange2["default"])(obj, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
	}
	
	module.exports = exports["default"];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isInNextYear;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitInDateRange = __webpack_require__(75);
	
	var _isitInDateRange2 = _interopRequireDefault(_isitInDateRange);
	
	function isInNextYear(obj) {
	    return (0, _isitInDateRange2["default"])(obj, new Date(), new Date(new Date().setDate(new Date().getFullYear() + 1)));
	}
	
	module.exports = exports["default"];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isPast;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	function isPast(obj) {
	    return (0, _isitDate2["default"])(obj) && obj.getTime() < new Date().getTime();
	}
	
	module.exports = exports["default"];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isQuarterOfYear;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	function isQuarterOfYear(obj, quarterNumber) {
	    return (0, _isitDate2["default"])(obj) && (0, _isitNumber2["default"])(quarterNumber) && quarterNumber === Math.floor((obj.getMonth() + 3) / 3);
	}
	
	module.exports = exports["default"];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isToday;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	function isToday(obj) {
	    return (0, _isitDate2["default"])(obj) && obj.toDateString() === new Date().toDateString();
	}
	
	module.exports = exports["default"];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isTomorrow;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	function isTomorrow(obj) {
	    var now = new Date(),
	        tomorrowString = new Date(now.setDate(now.getDate() + 1).toDateString());
	
	    return (0, _isitDate2["default"])(obj) && obj.toDateString() === tomorrowString;
	}
	
	module.exports = exports["default"];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isWeekday;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	function isWeekday(obj) {
	    if (!(0, _isitDate2["default"])(obj)) {
	        return false;
	    }
	
	    var day = obj.getDay();
	
	    return day !== 6 && day !== 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isWeekday;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	function isWeekday(obj) {
	    if (!(0, _isitDate2["default"])(obj)) {
	        return false;
	    }
	
	    var day = obj.getDay();
	
	    return day === 6 || day === 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isYear;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	var _isitNumber = __webpack_require__(15);
	
	var _isitNumber2 = _interopRequireDefault(_isitNumber);
	
	function isYear(obj, year) {
	    return (0, _isitDate2["default"])(obj) && (0, _isitNumber2["default"])(year) && year === obj.getFullYear();
	}
	
	module.exports = exports["default"];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isYesterday;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitDate = __webpack_require__(10);
	
	var _isitDate2 = _interopRequireDefault(_isitDate);
	
	function isYesterday(obj) {
	    var now = new Date(),
	        yesterdayString = new Date(now.setDate(now.getDate() - 1).toDateString());
	
	    return (0, _isitDate2["default"])(obj) && obj.toDateString() === yesterdayString;
	}
	
	module.exports = exports["default"];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isAndroid;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isAndroid() {
	    return (0, _isitBrowser2["default"])() && /android/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isAndroidPhone;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	var _isitBrowser3 = _interopRequireDefault(_isitBrowser);
	
	function isAndroidPhone() {
	    return (0, _isitBrowser2["default"])() && (0, _isitBrowser3["default"])() && /mobile/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isAndroidTablet;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	var _isitBrowser3 = _interopRequireDefault(_isitBrowser);
	
	function isAndroidTablet() {
	    return (0, _isitBrowser2["default"])() && (0, _isitBrowser3["default"])() && !/mobile/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isBlackberry;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isBlackberry() {
	    return (0, _isitBrowser2["default"])() && /blackberry/i.test(_utils.navigatorInfo.userAgent) || /BB10/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isBlink;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isBlink() {
	    return (0, _isitBrowser2["default"])() && /chrome/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isChrome;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isChrome() {
	    return (0, _isitBrowser2["default"])() && /chrome|chromium/i.test(_utils.navigatorInfo.userAgent) && /google inc/.test(_utils.navigatorInfo.vendor);
	}
	
	module.exports = exports["default"];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isDesktop;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	var _isitMobile = __webpack_require__(99);
	
	var _isitMobile2 = _interopRequireDefault(_isitMobile);
	
	var _isitTablet = __webpack_require__(104);
	
	var _isitTablet2 = _interopRequireDefault(_isitTablet);
	
	function isDesktop() {
	    return (0, _isitBrowser2["default"])() && !(0, _isitMobile2["default"])() && !(0, _isitTablet2["default"])();
	}
	
	module.exports = exports["default"];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isMobile;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitAndroidPhone = __webpack_require__(93);
	
	var _isitAndroidPhone2 = _interopRequireDefault(_isitAndroidPhone);
	
	var _isitBlackberry = __webpack_require__(95);
	
	var _isitBlackberry2 = _interopRequireDefault(_isitBlackberry);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	var _isitIphone = __webpack_require__(100);
	
	var _isitIphone2 = _interopRequireDefault(_isitIphone);
	
	var _isitIpod = __webpack_require__(101);
	
	var _isitIpod2 = _interopRequireDefault(_isitIpod);
	
	var _isitWindowsPhone = __webpack_require__(102);
	
	var _isitWindowsPhone2 = _interopRequireDefault(_isitWindowsPhone);
	
	function isMobile() {
	    return (0, _isitBrowser2["default"])() && ((0, _isitIphone2["default"])() || (0, _isitAndroidPhone2["default"])() || (0, _isitIpod2["default"])() || (0, _isitWindowsPhone2["default"])() || (0, _isitBlackberry2["default"])());
	}
	
	module.exports = exports["default"];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isIphone;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isIphone() {
	    return (0, _isitBrowser2["default"])() && /iphone/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isIpod;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isIpod() {
	    return (0, _isitBrowser2["default"])() && /ipod/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isWindowsPhone;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	var _isitWindows = __webpack_require__(103);
	
	var _isitWindows2 = _interopRequireDefault(_isitWindows);
	
	function isWindowsPhone() {
	    return (0, _isitBrowser2["default"])() && (0, _isitWindows2["default"])() && /phone/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isWindows;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isWindows() {
	    return (0, _isitBrowser2["default"])() && /win/i.test(_utils.navigatorInfo.appVersion);
	}
	
	module.exports = exports["default"];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isTablet;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitAndroidTablet = __webpack_require__(94);
	
	var _isitAndroidTablet2 = _interopRequireDefault(_isitAndroidTablet);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	var _isitIpad = __webpack_require__(105);
	
	var _isitIpad2 = _interopRequireDefault(_isitIpad);
	
	var _isitWindowsTablet = __webpack_require__(106);
	
	var _isitWindowsTablet2 = _interopRequireDefault(_isitWindowsTablet);
	
	function isTablet() {
	    return (0, _isitBrowser2["default"])() && ((0, _isitIpad2["default"])() || (0, _isitAndroidTablet2["default"])() || (0, _isitWindowsTablet2["default"])());
	}
	
	module.exports = exports["default"];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isIpad;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isIpad() {
	    return (0, _isitBrowser2["default"])() && /ipad/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isWindowsTablet;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	var _isitWindows = __webpack_require__(103);
	
	var _isitWindows2 = _interopRequireDefault(_isitWindows);
	
	var _isitWindowsPhone = __webpack_require__(102);
	
	var _isitWindowsPhone2 = _interopRequireDefault(_isitWindowsPhone);
	
	function isWindowsTablet() {
	    return (0, _isitBrowser2["default"])() && (0, _isitWindows2["default"])() && not(isWindowPhone()) && /touch/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isIe;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isIe(version) {
	    if (!(0, _isitBrowser2["default"])()) {
	        return false;
	    }
	
	    if (!version) {
	        return (/msie/.test(_utils.navigatorInfo.userAgent) || !window.ActiveXObject && "ActiveXObject" in window
	        );
	    }
	
	    if (version >= 11) {
	        return !window.ActiveXObject && "ActiveXObject" in window;
	    }
	
	    return new RegExp('msie ' + version).test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isFirefox;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isFirefox() {
	    return (0, _isitBrowser2["default"])() && /firefox/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isGecko;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isGecko() {
	    return (0, _isitBrowser2["default"])() && /gecko/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isIos;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitIpad = __webpack_require__(105);
	
	var _isitIpad2 = _interopRequireDefault(_isitIpad);
	
	var _isitIphone = __webpack_require__(100);
	
	var _isitIphone2 = _interopRequireDefault(_isitIphone);
	
	var _isitIpod = __webpack_require__(101);
	
	var _isitIpod2 = _interopRequireDefault(_isitIpod);
	
	function isIos() {
	    return (0, _isitIpad2["default"])() || (0, _isitIphone2["default"])() || (0, _isitIpod2["default"])();
	}
	
	module.exports = exports["default"];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isLinux;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isLinux() {
	    return (0, _isitBrowser2["default"])() && /linux|x11/i.test(_utils.navigatorInfo.appVersion);
	}
	
	module.exports = exports["default"];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isMac;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isMac() {
	    return (0, _isitBrowser2["default"])() && /mac/i.test(_utils.navigatorInfo.appVersion);
	}
	
	module.exports = exports["default"];

/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isNode;
	
	function isNode() {
	    return typeof window === "undefined";
	}
	
	module.exports = exports["default"];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isOffline;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _helpers = __webpack_require__(2);
	
	var _isitOnline = __webpack_require__(115);
	
	var _isitOnline2 = _interopRequireDefault(_isitOnline);
	
	function isOffline() {
	    return (0, _helpers.not)(_isitOnline2["default"]);
	}
	
	module.exports = exports["default"];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isOnline;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isOnline() {
	    return (0, _isitBrowser2["default"])() && navigator.onLine;
	}
	
	module.exports = exports["default"];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isOpera;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isOpera() {
	    return (0, _isitBrowser2["default"])() && /^opera/i.test(_utils.navigatorInfo.userAgent) || /OPR/.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isPresto;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isPresto() {
	    return (0, _isitBrowser2["default"])() && /opera/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isRetina;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isRetina() {
	    if ((0, _isitBrowser2["default"])() && window.matchMedia) {
	        var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and " + "(-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen " + "and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
	
	        return mq && mq.matches || window.devicePixelRatio > 1;
	    }
	}
	
	module.exports = exports["default"];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isSafari;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isSafari() {
	    return (0, _isitBrowser2["default"])() && /safari/i.test(_utils.navigatorInfo.userAgent) && /apple computer/.test(_utils.navigatorInfo.vendor);
	}
	
	module.exports = exports["default"];

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isTouchDevice;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isTouchDevice() {
	    return (0, _isitBrowser2["default"])() && "ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch;
	}
	
	module.exports = exports["default"];

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isTrident;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isTrident() {
	    return (0, _isitBrowser2["default"])() && /trident/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = isWebkit;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _isitBrowser = __webpack_require__(4);
	
	var _isitBrowser2 = _interopRequireDefault(_isitBrowser);
	
	function isWebkit() {
	    return (0, _isitBrowser2["default"])() && /applewebkit/i.test(_utils.navigatorInfo.userAgent);
	}
	
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=isit.js.map