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
	
	// Originally forked from: isit.js
	// Author: Aras Atasaygin
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _interfaces = __webpack_require__(3);
	
	// Type checks
	/* -------------------------------------------------------------------------- */
	
	var _arguments = __webpack_require__(4);
	
	var _arguments2 = _interopRequireDefault(_arguments);
	
	var _array = __webpack_require__(2);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _boolean = __webpack_require__(6);
	
	var _boolean2 = _interopRequireDefault(_boolean);
	
	var _char = __webpack_require__(7);
	
	var _char2 = _interopRequireDefault(_char);
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _error = __webpack_require__(10);
	
	var _error2 = _interopRequireDefault(_error);
	
	var _function = __webpack_require__(11);
	
	var _function2 = _interopRequireDefault(_function);
	
	var _json = __webpack_require__(12);
	
	var _json2 = _interopRequireDefault(_json);
	
	var _nanJs = __webpack_require__(13);
	
	var _nanJs2 = _interopRequireDefault(_nanJs);
	
	// it doesn't like just "nan"
	
	var _null = __webpack_require__(5);
	
	var _null2 = _interopRequireDefault(_null);
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _object = __webpack_require__(15);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _regexp = __webpack_require__(16);
	
	var _regexp2 = _interopRequireDefault(_regexp);
	
	var _sameType = __webpack_require__(17);
	
	var _sameType2 = _interopRequireDefault(_sameType);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _symbol = __webpack_require__(18);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typedArray = __webpack_require__(19);
	
	var _typedArray2 = _interopRequireDefault(_typedArray);
	
	var _undefined = __webpack_require__(20);
	
	var _undefined2 = _interopRequireDefault(_undefined);
	
	// Presence checks
	/* -------------------------------------------------------------------------- */
	
	var _empty = __webpack_require__(21);
	
	var _empty2 = _interopRequireDefault(_empty);
	
	var _existy = __webpack_require__(23);
	
	var _existy2 = _interopRequireDefault(_existy);
	
	var _falsy = __webpack_require__(24);
	
	var _falsy2 = _interopRequireDefault(_falsy);
	
	var _truthy = __webpack_require__(25);
	
	var _truthy2 = _interopRequireDefault(_truthy);
	
	var _whitespace = __webpack_require__(26);
	
	var _whitespace2 = _interopRequireDefault(_whitespace);
	
	// Arithmetic checks
	/* -------------------------------------------------------------------------- */
	
	var _above = __webpack_require__(27);
	
	var _above2 = _interopRequireDefault(_above);
	
	var _decimal = __webpack_require__(28);
	
	var _decimal2 = _interopRequireDefault(_decimal);
	
	var _equal = __webpack_require__(29);
	
	var _equal2 = _interopRequireDefault(_equal);
	
	var _even = __webpack_require__(31);
	
	var _even2 = _interopRequireDefault(_even);
	
	var _finite = __webpack_require__(32);
	
	var _finite2 = _interopRequireDefault(_finite);
	
	var _infinite = __webpack_require__(33);
	
	var _infinite2 = _interopRequireDefault(_infinite);
	
	var _integer = __webpack_require__(34);
	
	var _integer2 = _interopRequireDefault(_integer);
	
	var _negative = __webpack_require__(35);
	
	var _negative2 = _interopRequireDefault(_negative);
	
	var _odd = __webpack_require__(36);
	
	var _odd2 = _interopRequireDefault(_odd);
	
	var _positive = __webpack_require__(37);
	
	var _positive2 = _interopRequireDefault(_positive);
	
	var _under = __webpack_require__(38);
	
	var _under2 = _interopRequireDefault(_under);
	
	var _within = __webpack_require__(39);
	
	var _within2 = _interopRequireDefault(_within);
	
	// Regexp checks
	/* -------------------------------------------------------------------------- */
	
	var _affirmative = __webpack_require__(40);
	
	var _affirmative2 = _interopRequireDefault(_affirmative);
	
	var _alphaNumeric = __webpack_require__(41);
	
	var _alphaNumeric2 = _interopRequireDefault(_alphaNumeric);
	
	var _caPostalCode = __webpack_require__(42);
	
	var _caPostalCode2 = _interopRequireDefault(_caPostalCode);
	
	var _creditCard = __webpack_require__(43);
	
	var _creditCard2 = _interopRequireDefault(_creditCard);
	
	var _dateString = __webpack_require__(44);
	
	var _dateString2 = _interopRequireDefault(_dateString);
	
	var _email = __webpack_require__(45);
	
	var _email2 = _interopRequireDefault(_email);
	
	var _eppPhone = __webpack_require__(46);
	
	var _eppPhone2 = _interopRequireDefault(_eppPhone);
	
	var _hexadecimal = __webpack_require__(47);
	
	var _hexadecimal2 = _interopRequireDefault(_hexadecimal);
	
	var _hexColor = __webpack_require__(48);
	
	var _hexColor2 = _interopRequireDefault(_hexColor);
	
	var _ip = __webpack_require__(49);
	
	var _ip2 = _interopRequireDefault(_ip);
	
	var _ipv4 = __webpack_require__(50);
	
	var _ipv42 = _interopRequireDefault(_ipv4);
	
	var _ipv6 = __webpack_require__(51);
	
	var _ipv62 = _interopRequireDefault(_ipv6);
	
	var _isoDateString = __webpack_require__(52);
	
	var _isoDateString2 = _interopRequireDefault(_isoDateString);
	
	var _nanpPhone = __webpack_require__(53);
	
	var _nanpPhone2 = _interopRequireDefault(_nanpPhone);
	
	var _socialSecurityNumber = __webpack_require__(54);
	
	var _socialSecurityNumber2 = _interopRequireDefault(_socialSecurityNumber);
	
	var _timeString = __webpack_require__(55);
	
	var _timeString2 = _interopRequireDefault(_timeString);
	
	var _ukPostCode = __webpack_require__(56);
	
	var _ukPostCode2 = _interopRequireDefault(_ukPostCode);
	
	var _urlJs = __webpack_require__(57);
	
	var _urlJs2 = _interopRequireDefault(_urlJs);
	
	// it doesn't like just "url"
	
	var _usZipCode = __webpack_require__(58);
	
	var _usZipCode2 = _interopRequireDefault(_usZipCode);
	
	var _setRegexp = __webpack_require__(59);
	
	var _setRegexp2 = _interopRequireDefault(_setRegexp);
	
	// String checks
	/* -------------------------------------------------------------------------- */
	
	var _camelCase = __webpack_require__(60);
	
	var _camelCase2 = _interopRequireDefault(_camelCase);
	
	var _capitalized = __webpack_require__(61);
	
	var _capitalized2 = _interopRequireDefault(_capitalized);
	
	var _dataUrl = __webpack_require__(62);
	
	var _dataUrl2 = _interopRequireDefault(_dataUrl);
	
	var _doubleByte = __webpack_require__(63);
	
	var _doubleByte2 = _interopRequireDefault(_doubleByte);
	
	var _endWith = __webpack_require__(64);
	
	var _endWith2 = _interopRequireDefault(_endWith);
	
	var _html = __webpack_require__(65);
	
	var _html2 = _interopRequireDefault(_html);
	
	var _include = __webpack_require__(66);
	
	var _include2 = _interopRequireDefault(_include);
	
	var _kebabCase = __webpack_require__(67);
	
	var _kebabCase2 = _interopRequireDefault(_kebabCase);
	
	var _lowercase = __webpack_require__(68);
	
	var _lowercase2 = _interopRequireDefault(_lowercase);
	
	var _palindrome = __webpack_require__(69);
	
	var _palindrome2 = _interopRequireDefault(_palindrome);
	
	var _snakeCase = __webpack_require__(70);
	
	var _snakeCase2 = _interopRequireDefault(_snakeCase);
	
	var _startCase = __webpack_require__(71);
	
	var _startCase2 = _interopRequireDefault(_startCase);
	
	var _startWith = __webpack_require__(72);
	
	var _startWith2 = _interopRequireDefault(_startWith);
	
	var _uppercase = __webpack_require__(73);
	
	var _uppercase2 = _interopRequireDefault(_uppercase);
	
	// Object checks
	/* -------------------------------------------------------------------------- */
	
	var _domNode = __webpack_require__(74);
	
	var _domNode2 = _interopRequireDefault(_domNode);
	
	var _domNodeList = __webpack_require__(75);
	
	var _domNodeList2 = _interopRequireDefault(_domNodeList);
	
	var _jquery = __webpack_require__(76);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _plainObject = __webpack_require__(77);
	
	var _plainObject2 = _interopRequireDefault(_plainObject);
	
	var _propertyCount = __webpack_require__(78);
	
	var _propertyCount2 = _interopRequireDefault(_propertyCount);
	
	var _propertyDefined = __webpack_require__(79);
	
	var _propertyDefined2 = _interopRequireDefault(_propertyDefined);
	
	var _windowObject = __webpack_require__(80);
	
	var _windowObject2 = _interopRequireDefault(_windowObject);
	
	// Array checks
	/* -------------------------------------------------------------------------- */
	
	var _inArray = __webpack_require__(81);
	
	var _inArray2 = _interopRequireDefault(_inArray);
	
	var _sorted = __webpack_require__(82);
	
	var _sorted2 = _interopRequireDefault(_sorted);
	
	// Date checks
	/* -------------------------------------------------------------------------- */
	
	var _day = __webpack_require__(83);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _daylightSavingTime = __webpack_require__(85);
	
	var _daylightSavingTime2 = _interopRequireDefault(_daylightSavingTime);
	
	var _future = __webpack_require__(86);
	
	var _future2 = _interopRequireDefault(_future);
	
	var _inDateRange = __webpack_require__(87);
	
	var _inDateRange2 = _interopRequireDefault(_inDateRange);
	
	var _inLastMonth = __webpack_require__(88);
	
	var _inLastMonth2 = _interopRequireDefault(_inLastMonth);
	
	var _inLastWeek = __webpack_require__(89);
	
	var _inLastWeek2 = _interopRequireDefault(_inLastWeek);
	
	var _inLastYear = __webpack_require__(90);
	
	var _inLastYear2 = _interopRequireDefault(_inLastYear);
	
	var _leapYear = __webpack_require__(91);
	
	var _leapYear2 = _interopRequireDefault(_leapYear);
	
	var _month = __webpack_require__(92);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _inNextMonth = __webpack_require__(93);
	
	var _inNextMonth2 = _interopRequireDefault(_inNextMonth);
	
	var _inNextWeek = __webpack_require__(94);
	
	var _inNextWeek2 = _interopRequireDefault(_inNextWeek);
	
	var _inNextYear = __webpack_require__(95);
	
	var _inNextYear2 = _interopRequireDefault(_inNextYear);
	
	var _past = __webpack_require__(96);
	
	var _past2 = _interopRequireDefault(_past);
	
	var _quarterOfYear = __webpack_require__(97);
	
	var _quarterOfYear2 = _interopRequireDefault(_quarterOfYear);
	
	var _today = __webpack_require__(98);
	
	var _today2 = _interopRequireDefault(_today);
	
	var _tomorrow = __webpack_require__(99);
	
	var _tomorrow2 = _interopRequireDefault(_tomorrow);
	
	var _weekday = __webpack_require__(100);
	
	var _weekday2 = _interopRequireDefault(_weekday);
	
	var _weekend = __webpack_require__(101);
	
	var _weekend2 = _interopRequireDefault(_weekend);
	
	var _year = __webpack_require__(102);
	
	var _year2 = _interopRequireDefault(_year);
	
	var _yesterday = __webpack_require__(103);
	
	var _yesterday2 = _interopRequireDefault(_yesterday);
	
	// Environment checks
	/* -------------------------------------------------------------------------- */
	
	var _android = __webpack_require__(104);
	
	var _android2 = _interopRequireDefault(_android);
	
	var _androidPhone = __webpack_require__(107);
	
	var _androidPhone2 = _interopRequireDefault(_androidPhone);
	
	var _androidTablet = __webpack_require__(108);
	
	var _androidTablet2 = _interopRequireDefault(_androidTablet);
	
	var _blackberry = __webpack_require__(109);
	
	var _blackberry2 = _interopRequireDefault(_blackberry);
	
	var _blink = __webpack_require__(110);
	
	var _blink2 = _interopRequireDefault(_blink);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	var _chrome = __webpack_require__(111);
	
	var _chrome2 = _interopRequireDefault(_chrome);
	
	var _desktop = __webpack_require__(112);
	
	var _desktop2 = _interopRequireDefault(_desktop);
	
	var _ie = __webpack_require__(121);
	
	var _ie2 = _interopRequireDefault(_ie);
	
	var _firefox = __webpack_require__(122);
	
	var _firefox2 = _interopRequireDefault(_firefox);
	
	var _gecko = __webpack_require__(123);
	
	var _gecko2 = _interopRequireDefault(_gecko);
	
	var _ios = __webpack_require__(124);
	
	var _ios2 = _interopRequireDefault(_ios);
	
	var _ipad = __webpack_require__(119);
	
	var _ipad2 = _interopRequireDefault(_ipad);
	
	var _iphone = __webpack_require__(114);
	
	var _iphone2 = _interopRequireDefault(_iphone);
	
	var _ipod = __webpack_require__(115);
	
	var _ipod2 = _interopRequireDefault(_ipod);
	
	var _linux = __webpack_require__(125);
	
	var _linux2 = _interopRequireDefault(_linux);
	
	var _mac = __webpack_require__(126);
	
	var _mac2 = _interopRequireDefault(_mac);
	
	var _mobile = __webpack_require__(113);
	
	var _mobile2 = _interopRequireDefault(_mobile);
	
	var _node = __webpack_require__(127);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _offline = __webpack_require__(128);
	
	var _offline2 = _interopRequireDefault(_offline);
	
	var _online = __webpack_require__(129);
	
	var _online2 = _interopRequireDefault(_online);
	
	var _opera = __webpack_require__(130);
	
	var _opera2 = _interopRequireDefault(_opera);
	
	var _presto = __webpack_require__(131);
	
	var _presto2 = _interopRequireDefault(_presto);
	
	var _retina = __webpack_require__(132);
	
	var _retina2 = _interopRequireDefault(_retina);
	
	var _safari = __webpack_require__(133);
	
	var _safari2 = _interopRequireDefault(_safari);
	
	var _tablet = __webpack_require__(118);
	
	var _tablet2 = _interopRequireDefault(_tablet);
	
	var _touchDevice = __webpack_require__(134);
	
	var _touchDevice2 = _interopRequireDefault(_touchDevice);
	
	var _trident = __webpack_require__(135);
	
	var _trident2 = _interopRequireDefault(_trident);
	
	var _webkit = __webpack_require__(136);
	
	var _webkit2 = _interopRequireDefault(_webkit);
	
	var _windows = __webpack_require__(117);
	
	var _windows2 = _interopRequireDefault(_windows);
	
	var _windowsPhone = __webpack_require__(116);
	
	var _windowsPhone2 = _interopRequireDefault(_windowsPhone);
	
	var _windowsTablet = __webpack_require__(120);
	
	var _windowsTablet2 = _interopRequireDefault(_windowsTablet);
	
	var defaultApi = ["all", "any", "not"];
	
	var isit = {
	    all: {},
	    any: {},
	    not: {}
	};
	
	isit.arguments = _arguments2["default"];
	isit.array = _array2["default"];
	isit.boolean = _boolean2["default"];
	isit.char = _char2["default"];
	isit.date = _date2["default"];
	isit.error = _error2["default"];
	isit["function"] = _function2["default"];
	isit.json = _json2["default"];
	isit.nan = _nanJs2["default"];
	isit["null"] = _null2["default"];
	isit.number = _number2["default"];
	isit.object = _object2["default"];
	isit.regexp = _regexp2["default"];
	isit.sameType = _sameType2["default"];
	isit.string = _string2["default"];
	isit.symbol = _symbol2["default"];
	isit.typedArray = _typedArray2["default"];
	isit.undefined = _undefined2["default"];
	
	// api restrictions
	isit.sameType.api = ["not"];
	
	isit.empty = _empty2["default"];
	isit.existy = _existy2["default"];
	isit.falsy = _falsy2["default"];
	isit.truthy = _truthy2["default"];
	isit.whitespace = _whitespace2["default"];
	
	isit.above = _above2["default"];
	isit.decimal = _decimal2["default"];
	isit.equal = _equal2["default"];
	isit.even = _even2["default"];
	isit.finite = _finite2["default"];
	isit.infinite = _infinite2["default"];
	isit.integer = _integer2["default"];
	isit.negative = _negative2["default"];
	isit.odd = _odd2["default"];
	isit.positive = _positive2["default"];
	isit.under = _under2["default"];
	isit.within = _within2["default"];
	
	// api restrictions
	isit.above.api = ["not"];
	isit.equal.api = ["not"];
	isit.under.api = ["not"];
	isit.within.api = ["not"];
	
	isit.affirmative = _affirmative2["default"];
	isit.alphaNumeric = _alphaNumeric2["default"];
	isit.caPostalCode = _caPostalCode2["default"];
	isit.creditCard = _creditCard2["default"];
	isit.dateString = _dateString2["default"];
	isit.email = _email2["default"];
	isit.eppPhone = _eppPhone2["default"];
	isit.hexadecimal = _hexadecimal2["default"];
	isit.hexColor = _hexColor2["default"];
	isit.ip = _ip2["default"];
	isit.ipv4 = _ipv42["default"];
	isit.ipv6 = _ipv62["default"];
	isit.isoDateString = _isoDateString2["default"];
	isit.nanpPhone = _nanpPhone2["default"];
	isit.setRegexp = _setRegexp2["default"].bind(isit);
	isit.socialSecurityNumber = _socialSecurityNumber2["default"];
	isit.timeString = _timeString2["default"];
	isit.ukPostCode = _ukPostCode2["default"];
	isit.url = _urlJs2["default"];
	isit.usZipCode = _usZipCode2["default"];
	
	isit.camelCase = _camelCase2["default"];
	isit.capitalized = _capitalized2["default"];
	isit.dataUrl = _dataUrl2["default"];
	isit.doubleByte = _doubleByte2["default"];
	isit.endWith = _endWith2["default"];
	isit.html = _html2["default"];
	isit.include = _include2["default"];
	isit.kebabCase = _kebabCase2["default"];
	isit.lowercase = _lowercase2["default"];
	isit.palindrome = _palindrome2["default"];
	isit.snakeCase = _snakeCase2["default"];
	isit.startCase = _startCase2["default"];
	isit.startWith = _startWith2["default"];
	isit.uppercase = _uppercase2["default"];
	
	// api restrictions
	isit.endWith.api = ["not"];
	isit.include.api = ["not"];
	isit.startWith.api = ["not"];
	
	isit.domNode = _domNode2["default"];
	isit.domNodeList = _domNodeList2["default"];
	isit.jquery = _jquery2["default"];
	isit.plainObject = _plainObject2["default"];
	isit.propertyCount = _propertyCount2["default"];
	isit.propertyDefined = _propertyDefined2["default"];
	isit.windowObject = _windowObject2["default"];
	
	// api restrictions
	isit.propertyCount.api = ["not"];
	isit.propertyDefined.api = ["not"];
	
	isit.inArray = _inArray2["default"];
	isit.sorted = _sorted2["default"];
	
	// api restrictions
	isit.inArray.api = ["not"];
	
	isit.day = _day2["default"];
	isit.daylightSavingTime = _daylightSavingTime2["default"];
	isit.future = _future2["default"];
	isit.inDateRange = _inDateRange2["default"];
	isit.inLastMonth = _inLastMonth2["default"];
	isit.inLastWeek = _inLastWeek2["default"];
	isit.inLastYear = _inLastYear2["default"];
	isit.leaYear = _leapYear2["default"];
	isit.month = _month2["default"];
	isit.inNextMonth = _inNextMonth2["default"];
	isit.inNextWeek = _inNextWeek2["default"];
	isit.inNextYear = _inNextYear2["default"];
	isit.past = _past2["default"];
	isit.quarterOfYear = _quarterOfYear2["default"];
	isit.today = _today2["default"];
	isit.tomorrow = _tomorrow2["default"];
	isit.weekday = _weekday2["default"];
	isit.weekend = _weekend2["default"];
	isit.year = _year2["default"];
	isit.yesterday = _yesterday2["default"];
	
	// api restrictions
	isit.day.api = ["not"];
	isit.inDateRange.api = ["not"];
	isit.month.api = ["not"];
	isit.quarterOfYear.api = ["not"];
	isit.year.api = ["not"];
	
	isit.android = _android2["default"];
	isit.androidPhone = _androidPhone2["default"];
	isit.androidTablet = _androidTablet2["default"];
	isit.blackberry = _blackberry2["default"];
	isit.blink = _blink2["default"];
	isit.browser = _browser2["default"];
	isit.chrome = _chrome2["default"];
	isit.desktop = _desktop2["default"];
	isit.firefox = _firefox2["default"];
	isit.gecko = _gecko2["default"];
	isit.ie = _ie2["default"];
	isit.ios = _ios2["default"];
	isit.ipad = _ipad2["default"];
	isit.iphone = _iphone2["default"];
	isit.ipod = _ipod2["default"];
	isit.linux = _linux2["default"];
	isit.mac = _mac2["default"];
	isit.mobile = _mobile2["default"];
	isit.node = _node2["default"];
	isit.offline = _offline2["default"];
	isit.online = _online2["default"];
	isit.opera = _opera2["default"];
	isit.presto = _presto2["default"];
	isit.retina = _retina2["default"];
	isit.safari = _safari2["default"];
	isit.tablet = _tablet2["default"];
	isit.touchDevice = _touchDevice2["default"];
	isit.trident = _trident2["default"];
	isit.webkit = _webkit2["default"];
	isit.windows = _windows2["default"];
	isit.windowsPhone = _windowsPhone2["default"];
	isit.windowsTablet = _windowsTablet2["default"];
	
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
	
	function setInterfaces(options) {
	    for (var option in options) {
	        if (_utils.hasOwnProperty.call(options, option) && _function2["default"](options[option])) {
	            var interfaces = options[option].api || defaultApi,
	                i = 0,
	                len = interfaces.length;
	
	            for (; i < len; i++) {
	                if (interfaces[i] === "all") {
	                    options.all[option] = _interfaces.all(options[option]);
	                }
	
	                if (interfaces[i] === "any") {
	                    options.any[option] = _interfaces.any(options[option]);
	                }
	
	                if (interfaces[i] === "not") {
	                    options.not[option] = _interfaces.not(options[option]);
	                }
	            }
	        }
	    }
	}
	
	setInterfaces(isit);
	
	exports["default"] = isit;
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// utility functions, used all over the place
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _array = __webpack_require__(2);
	
	var _array2 = _interopRequireDefault(_array);
	
	var arraySlice = Array.prototype.slice;
	
	exports.arraySlice = arraySlice;
	var getParams = function getParams(args) {
	    var params = arraySlice.call(args),
	        len = params.length;
	
	    if (len === 1 && _array2["default"](params[0])) {
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// is obj an array value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitArray;
	
	var _utils = __webpack_require__(1);
	
	function isitArray(obj) {
	    return _utils.toString.call(obj) === "[object Array]";
	}
	
	;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// helper functions, used for interfaces
	
	"use strict";
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(1);
	
	var all = function all(func) {
	    return function () {
	        var _getParams = _utils.getParams(arguments);
	
	        var length = _getParams.length;
	        var parameters = _getParams.parameters;
	
	        if (!parameters.length) {
	            return false;
	        }
	
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
	        var _getParams2 = _utils.getParams(arguments);
	
	        var length = _getParams2.length;
	        var parameters = _getParams2.parameters;
	
	        if (!parameters.length) {
	            return false;
	        }
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a set of function arguments?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitArguments;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _utils = __webpack_require__(1);
	
	var _null = __webpack_require__(5);
	
	var _null2 = _interopRequireDefault(_null);
	
	function isitArguments(obj) {
	    return _interfaces.not(_null2["default"])(obj) && _utils.toString.call(obj) === "[object Arguments]" || typeof obj === "object" && "callee" in obj;
	}
	
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports) {

	// is obj a null value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitNull;
	
	function isitNull(obj) {
	    return obj === null;
	}
	
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a boolean value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitBoolean;
	
	var _utils = __webpack_require__(1);
	
	function isitBoolean(obj) {
	    return obj === true || obj === false || _utils.toString.call(obj) === "[object Boolean]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a char value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitChar;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitChar(obj) {
	    return _string2["default"](obj) && obj.length === 1;
	}
	
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitString;
	
	var _utils = __webpack_require__(1);
	
	function isitString(obj) {
	    return _utils.toString.call(obj) === "[object String]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a date value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitDate;
	
	var _utils = __webpack_require__(1);
	
	function isitDate(obj) {
	    return _utils.toString.call(obj) === "[object Date]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// is obj an error value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitError;
	
	var _utils = __webpack_require__(1);
	
	function isitError(obj) {
	    return _utils.toString.call(obj) === "[object Error]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a function?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitFunction;
	
	var _utils = __webpack_require__(1);
	
	function isitFunction(obj) {
	    return _utils.toString.call(obj) === "[object Function]" || typeof obj === "function";
	}
	
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a JSON value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitJSON;
	
	var _utils = __webpack_require__(1);
	
	function isitJSON(obj) {
	    return _utils.toString.call(obj) === "[object Object]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	// is obj NaN (Not A Number)?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitNaN;
	
	function isitNaN(obj) {
	    return obj !== obj;
	}
	
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a number?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitNumber;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _utils = __webpack_require__(1);
	
	var _nanJs = __webpack_require__(13);
	
	var _nanJs2 = _interopRequireDefault(_nanJs);
	
	// it doesn't like just "nan"
	
	function isitNumber(obj) {
	    return _interfaces.not(_nanJs2["default"])(obj) && _utils.toString.call(obj) === "[object Number]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports) {

	// is obj an object value?
	// NOTE: will return true for functions as well
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitObject;
	
	function isitObject(obj) {
	    var type = typeof obj;
	
	    return type === "function" || type === "object";
	}
	
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a RegExp value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitRegExp;
	
	var _utils = __webpack_require__(1);
	
	function isitRegExp(obj) {
	    return _utils.toString.call(obj) === "[object RegExp]";
	}
	
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// is obj1 and obj2 the same type?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitSameType;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _utils = __webpack_require__(1);
	
	var _nanJs = __webpack_require__(13);
	
	var _nanJs2 = _interopRequireDefault(_nanJs);
	
	function isitSameType(obj1, obj2) {
	    if (_interfaces.all(_nanJs2["default"])(obj1, obj2)) {
	        return _nanJs2["default"](obj1) === _nanJs2["default"](obj2);
	    }
	
	    return _utils.toString.call(obj1) === _utils.toString.call(obj2);
	}
	
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports) {

	// is obj a symbol value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitSymbol;
	
	function isitSymbol(obj) {
	    return typeof obj === "symbol";
	}
	
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a typed array value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitTypedArray;
	
	var _utils = __webpack_require__(1);
	
	function isitTypedArray(obj) {
	    switch (_utils.toString.call(obj)) {
	        case "[object Int8Array]":
	        case "[object Uint8Array]":
	        case "[object Unit8ClampedArray]":
	        case "[object Int16Array]":
	        case "[object Unit16Array]":
	        case "[object Int32Array]":
	        case "[object Unit32Array]":
	        case "[object Float32Array]":
	        case "[object Float64Array]":
	            return true;
	    }
	
	    return false;
	}
	
	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports) {

	// is obj an undefined value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitUndefined;
	
	function isitUndefined(obj) {
	    return obj === void 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// is obj an empty object / array, or not have a value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitEmpty;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _regexps = __webpack_require__(22);
	
	var _array = __webpack_require__(2);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _arguments = __webpack_require__(4);
	
	var _arguments2 = _interopRequireDefault(_arguments);
	
	var _null = __webpack_require__(5);
	
	var _null2 = _interopRequireDefault(_null);
	
	var _object = __webpack_require__(15);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _undefined = __webpack_require__(20);
	
	var _undefined2 = _interopRequireDefault(_undefined);
	
	function isitEmpty(obj) {
	    if (_object2["default"](obj)) {
	        var num = Object.getOwnPropertyNames(obj).length;
	
	        return num === 0 || num === 1 && _array2["default"](obj) || num === 2 && _arguments2["default"](obj);
	    }
	
	    return _regexps.whitespace.test(obj) || _null2["default"](obj) || _undefined2["default"](obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports) {

	// regex values to test a variety of values
	
	// Steven Levithan, Jan Goyvaerts: Regular Expressions Cookbook
	// Scott Gonzalez: Email address validation
	
	// eppPhone match extensible provisioning protocol format
	// nanpPhone match north american number plan format
	// dateString match m/d/yy and mm/dd/yyyy, allowing any combination of one or two digits for the day and month, and two or four digits for the year
	// time match hours, minutes, and seconds, 24-hour clock
	
	"use strict";
	
	exports.__esModule = true;
	var affirmative = /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/;
	exports.affirmative = affirmative;
	var alphaNumeric = /^[A-Za-z0-9]+$/;
	exports.alphaNumeric = alphaNumeric;
	var caPostalCode = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
	exports.caPostalCode = caPostalCode;
	var creditCard = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
	exports.creditCard = creditCard;
	var dataUrl = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
	exports.dataUrl = dataUrl;
	var dateString = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;
	exports.dateString = dateString;
	var doubleByte = /[^\u0000-\u00ff]/;
	exports.doubleByte = doubleByte;
	var email = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
	exports.email = email;
	var eppPhone = /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/;
	exports.eppPhone = eppPhone;
	var hexadecimal = /^[0-9a-fA-F]+$/;
	exports.hexadecimal = hexadecimal;
	var hexColor = /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/;
	exports.hexColor = hexColor;
	var html = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/;
	exports.html = html;
	var ip = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
	exports.ip = ip;
	var ipv4 = /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;
	exports.ipv4 = ipv4;
	var ipv6 = /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
	exports.ipv6 = ipv6;
	var isoDateString = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])-?[1-7]|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s](([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)?(\15([0-5]\d))?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
	exports.isoDateString = isoDateString;
	var nanpPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	exports.nanpPhone = nanpPhone;
	var socialSecurityNumber = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
	exports.socialSecurityNumber = socialSecurityNumber;
	var timeString = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;
	exports.timeString = timeString;
	var ukPostCode = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;
	exports.ukPostCode = ukPostCode;
	var url = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
	exports.url = url;
	var usZipCode = /^[0-9]{5}(?:-[0-9]{4})?$/;
	exports.usZipCode = usZipCode;
	var whitespace = /^\s+$/;
	
	exports.whitespace = whitespace;
	exports["default"] = {
	    affirmative: affirmative,
	    alphaNumeric: alphaNumeric,
	    caPostalCode: caPostalCode,
	    creditCard: creditCard,
	    dataUrl: dataUrl,
	    dateString: dateString,
	    doubleByte: doubleByte,
	    email: email,
	    eppPhone: eppPhone,
	    hexadecimal: hexadecimal,
	    hexColor: hexColor,
	    html: html,
	    ip: ip,
	    ipv4: ipv4,
	    ipv6: ipv6,
	    isoDateString: isoDateString,
	    nanpPhone: nanpPhone,
	    socialSecurityNumber: socialSecurityNumber,
	    timeString: timeString,
	    ukPostCode: ukPostCode,
	    url: url,
	    usZipCode: usZipCode,
	    whitespace: whitespace
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// is obj not null and not undefined?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitExisty;
	
	function isitExisty(obj) {
	    return obj !== null && obj !== undefined;
	}
	
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a falsy value?
	// NOTE: matches language, returns true for undefined, null, 0, and ""
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitFalsy;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _truthy = __webpack_require__(25);
	
	var _truthy2 = _interopRequireDefault(_truthy);
	
	function isitFalsy(obj) {
	    return _interfaces.not(_truthy2["default"])(obj);
	}
	
	;
	module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a truthy value?
	// NOTE: matches the language, so valid values are objects, functions,
	// arrays, strings with length, and integers greater than 0
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitTruthy;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _existy = __webpack_require__(23);
	
	var _existy2 = _interopRequireDefault(_existy);
	
	var _nanJs = __webpack_require__(13);
	
	var _nanJs2 = _interopRequireDefault(_nanJs);
	
	function isitTruthy(obj) {
	    return _existy2["default"](obj) && obj !== false && _interfaces.not(_nanJs2["default"])(obj) && obj !== "" && obj !== 0;
	}
	
	;
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// is obj only whitespace?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitWhitespace;
	
	var _regexps = __webpack_require__(22);
	
	function isitWhitespace(obj) {
	    return _regexps.whitespace.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// is number obj greater than the number min?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitAbove;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	function isitAbove(obj, min) {
	    return _interfaces.all(_number2["default"])(obj, min) && obj > min;
	}
	
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a decimal value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitDecimal;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	function isitDecimal(obj) {
	    return _number2["default"](obj) && obj % 1 !== 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// is obj1 and obj2 equal?
	// NOTE: for arrays and objects, will check deeply via recursive calls
	// for decimals, will compare with Number.EPSILON rather than pure equality
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitEqual;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _epsilon = __webpack_require__(30);
	
	var _epsilon2 = _interopRequireDefault(_epsilon);
	
	var _array = __webpack_require__(2);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _boolean = __webpack_require__(6);
	
	var _boolean2 = _interopRequireDefault(_boolean);
	
	var _decimal = __webpack_require__(28);
	
	var _decimal2 = _interopRequireDefault(_decimal);
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _object = __webpack_require__(15);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _regexp = __webpack_require__(16);
	
	var _regexp2 = _interopRequireDefault(_regexp);
	
	var _sameType = __webpack_require__(17);
	
	var _sameType2 = _interopRequireDefault(_sameType);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitEqual(_x, _x2) {
	    var _again = true;
	
	    _function: while (_again) {
	        var obj1 = _x,
	            obj2 = _x2;
	        i = len = obj1Keys = obj2Keys = i = len = key = index = undefined;
	        _again = false;
	
	        if (_interfaces.not(_sameType2["default"])(obj1, obj2)) {
	            return false;
	        }
	
	        if (_interfaces.all(_decimal2["default"])(obj1, obj2)) {
	            return Math.abs(obj1 - obj2) < _epsilon2["default"];
	        }
	
	        if (_interfaces.all(_number2["default"])(obj1, obj2)) {
	            return obj1 === obj2 && 1 / obj1 === 1 / obj2;
	        }
	
	        if (_interfaces.all(_string2["default"])(obj1, obj2) || _interfaces.all(_regexp2["default"])(obj1, obj2)) {
	            return "" + obj1 === "" + obj2;
	        }
	
	        if (_interfaces.all(_boolean2["default"])(obj1, obj2)) {
	            return obj1 === obj2;
	        }
	
	        if (_interfaces.all(_array2["default"])(obj1, obj2)) {
	            if (obj1.length !== obj2.length) {
	                return false;
	            }
	
	            for (var i = 0, len = obj1.length; i < len; i++) {
	                if (_interfaces.not(_sameType2["default"])(obj1, obj2)) {
	                    return false;
	                }
	
	                if (_interfaces.all(_array2["default"])(obj1[i], obj2[i]) || _interfaces.all(_object2["default"])(obj1[i], obj2[i])) {
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
	
	        if (_interfaces.all(_object2["default"])(obj1, obj2)) {
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
	
	                if (_interfaces.all(_array2["default"])(obj1[key], obj2[key]) || _interfaces.all(_object2["default"])(obj1[key], obj2[key])) {
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
/* 30 */
/***/ function(module, exports) {

	// simple polyfill for Number.EPSILON
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = "EPSILON" in Number ? Number.EPSILON : 2.220446049250313e-16;
	module.exports = exports["default"];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a number and is it even?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitEven;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	function isitEven(obj) {
	    return _number2["default"](obj) && obj % 2 === 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a finite value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitFinite;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _nanJs = __webpack_require__(13);
	
	var _nanJs2 = _interopRequireDefault(_nanJs);
	
	function isitFinite(obj) {
	    return obj !== Infinity && obj !== -Infinity && _interfaces.not(_nanJs2["default"])(obj);
	}
	
	;;
	module.exports = exports["default"];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// is obj not a finite value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isInfinite;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _finite = __webpack_require__(32);
	
	var _finite2 = _interopRequireDefault(_finite);
	
	function isInfinite(obj) {
	    return _interfaces.not(_finite2["default"])(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// is obj an integer value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitInteger;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	function isitInteger(obj) {
	    return _number2["default"](obj) && obj % 1 === 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a negative number?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitNegative;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	function isitNegative(obj) {
	    return _number2["default"](obj) && obj < 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// is obj an odd number?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitOdd;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	function isitOdd(obj) {
	    return _number2["default"](obj) && obj % 2 !== 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a positive number?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitPositive;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	function isitPositive(obj) {
	    return _number2["default"](obj) && obj > 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// are obj and max numbers, and is obj less than max?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitUnder;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	function isitUnder(obj, max) {
	    return _interfaces.all(_number2["default"])(obj, max) && obj < max;
	}
	
	module.exports = exports["default"];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// are obj, min, and max all numbers and is obj greater than min and less than max?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitWithin;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	function isitWithin(obj, min, max) {
	    return _interfaces.all(_number2["default"])(obj, min, max) && obj > min && obj < max;
	}
	
	module.exports = exports["default"];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitAffirmative;
	
	var _regexps = __webpack_require__(22);
	
	function isitAffirmative(obj) {
	    return _regexps.affirmative.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// is obj alphanumeric?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitAlphaNumeric;
	
	var _regexps = __webpack_require__(22);
	
	function isitAlphaNumeric(obj) {
	    return _regexps.alphaNumeric.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid Canada Postal Code?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitCAPostalCode;
	
	var _regexps = __webpack_require__(22);
	
	function isitCAPostalCode(obj) {
	    return _regexps.caPostalCode.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid credit card number?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitCreditCard;
	
	var _regexps = __webpack_require__(22);
	
	function isitCreditCard(obj) {
	    return _regexps.creditCard.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid date string?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitDateString;
	
	var _regexps = __webpack_require__(22);
	
	function isitDateString(obj) {
	    return _regexps.dateString.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid email address?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitEmail;
	
	var _regexps = __webpack_require__(22);
	
	function isitEmail(obj) {
	    return _regexps.email.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitEppPhone;
	
	var _regexps = __webpack_require__(22);
	
	function isitEppPhone(obj) {
	    return _regexps.eppPhone.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a hexadecimal value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitHexadecimal;
	
	var _regexps = __webpack_require__(22);
	
	function isitHexadecimal(obj) {
	    return _regexps.hexadecimal.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid hex color?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitHexColor;
	
	var _regexps = __webpack_require__(22);
	
	function isitHexColor(obj) {
	    return _regexps.hexColor.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid IP address?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitIp;
	
	var _regexps = __webpack_require__(22);
	
	function isitIp(obj) {
	    return _regexps.ip.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid IPv4 address?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitIpv4;
	
	var _regexps = __webpack_require__(22);
	
	function isitIpv4(obj) {
	    return _regexps.ipv4.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid IPv6 address?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitIpv6;
	
	var _regexps = __webpack_require__(22);
	
	function isitIpv6(obj) {
	    return _regexps.ipv6.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid date string?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitISODateString;
	
	var _regexps = __webpack_require__(22);
	
	function isitISODateString(obj) {
	    return _regexps.isoDateString.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitNanpPhone;
	
	var _regexps = __webpack_require__(22);
	
	function isitNanpPhone(obj) {
	    return _regexps.nanpPhone.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid social security number?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitSocialSecurityNumber;
	
	var _regexps = __webpack_require__(22);
	
	function isitSocialSecurityNumber(obj) {
	    return _regexps.socialSecurityNumber.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid time string?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitTimeString;
	
	var _regexps = __webpack_require__(22);
	
	function isitTimeString(obj) {
	    return _regexps.timeString.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid UK Postal Code?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitUKPostCode;
	
	var _regexps = __webpack_require__(22);
	
	function isitUKPostCode(obj) {
	    return _regexps.ukPostCode.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid URL?
	// NOTE: this is a little wonky, I can't seem to find a solid regex to encompass all possible values
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitUrl;
	
	var _regexps = __webpack_require__(22);
	
	function isitUrl(obj) {
	    return _regexps.url.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a valid US Zip Code?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitUSZipCode;
	
	var _regexps = __webpack_require__(22);
	
	function isitUSZipCode(obj) {
	    return _regexps.usZipCode.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// function to either override existing regex tests or create new ones
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = setRegexp;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _regexps = __webpack_require__(22);
	
	var _regexps2 = _interopRequireDefault(_regexps);
	
	function setRegexp(regexp, regexpName) {
	    for (var r in _regexps2["default"]) {
	        if (_utils.hasOwnProperty.call(_regexps2["default"], r) && regexpName === r) {
	            this["isit" + regexpName.charAt(0).toUpperCase() + regexpName.slice(1)] = regexp;
	        }
	    }
	}
	
	module.exports = exports["default"];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string and is camelCase?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitCamelCase;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _utils = __webpack_require__(1);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitCamelCase(obj) {
	    if (_interfaces.not(_string2["default"])(obj)) {
	        return false;
	    }
	
	    return obj === _utils.toCamelCase(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string of capitalized words?
	// NOTE: this will return true for start case ("I Am Capitalized")
	// or uppercase ("I AM UPPERCASE")
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitCapitalized;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _equal = __webpack_require__(29);
	
	var _equal2 = _interopRequireDefault(_equal);
	
	function isitCapitalized(obj) {
	    if (_interfaces.not(_string2["default"])(obj)) {
	        return false;
	    }
	
	    var words = obj.split(" "),
	        capitalized = [];
	
	    for (var i = 0, len = words.length; i < len; i++) {
	        if (words[i].charAt(0) === words[i].charAt(0).toUpperCase()) {
	            capitalized[capitalized.length] = words[i];
	        }
	    }
	
	    return _equal2["default"](words, capitalized);
	}
	
	module.exports = exports["default"];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitDataUrl;
	
	var _regexps = __webpack_require__(22);
	
	function isitDataUrl(obj) {
	    return _regexps.dataUrl.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string and does it contain two-byte (or non-Latin) characters?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitDoubleByte;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _regexps = __webpack_require__(22);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitDoubleByte(obj) {
	    return _string2["default"](obj) && _regexps.doubleByte.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string, and does it end with endStr?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitEndWith;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitEndWith(obj, endStr) {
	    return _string2["default"](obj) && obj.indexOf(endStr) === obj.length - endStr.length;
	}
	
	module.exports = exports["default"];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string and does it HTML tags?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitHtml;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _regexps = __webpack_require__(22);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitHtml(obj) {
	    return _string2["default"](obj) && _regexps.html.test(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// is obj either an array or a string, and does substr exist in it?
	// NOTE: this can be used as an alias for .inArray()
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitInclude;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _array = __webpack_require__(2);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitInclude(obj, substr) {
	    return (_array2["default"](obj) || _string2["default"](obj)) && obj.indexOf(substr) !== -1;
	}
	
	module.exports = exports["default"];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string and is camelCase?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitKebabCase;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _utils = __webpack_require__(1);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitKebabCase(obj) {
	    if (_interfaces.not(_string2["default"])(obj)) {
	        return false;
	    }
	
	    return obj === _utils.toCamelCase(obj).replace(/([A-Z])/g, function ($1) {
	        return "-" + $1.toLowerCase();
	    }).replace(/--/g, "-");
	}
	
	module.exports = exports["default"];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string and all lowercase?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitLowercase;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitLowercase(obj) {
	    return _string2["default"](obj) && obj === obj.toLowerCase();
	}
	
	module.exports = exports["default"];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string and a palindrome?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitPalindrome;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitPalindrome(obj) {
	    return _string2["default"](obj) && obj === obj.split("").reverse().join("");
	}
	
	module.exports = exports["default"];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string and is camelCase?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitSnakeCase;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _utils = __webpack_require__(1);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitSnakeCase(obj) {
	    if (_interfaces.not(_string2["default"])(obj)) {
	        return false;
	    }
	
	    return obj === _utils.toCamelCase(obj).replace(/([A-Z])/g, function ($1) {
	        return "_" + $1.toLowerCase();
	    });
	}
	
	module.exports = exports["default"];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string and is camelCase?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitStartCase;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitStartCase(obj) {
	    if (_interfaces.not(_string2["default"])(obj)) {
	        return false;
	    }
	
	    return obj === obj.replace(/\w\S*/g, function (txt) {
	        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	    });
	}
	
	module.exports = exports["default"];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string and does it start with startStr?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitStartWith;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitStartWith(obj, startStr) {
	    return _string2["default"](obj) && obj.indexOf(startStr) === 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a string and is it all uppercase?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitUppercase;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitUppercase(obj) {
	    return _string2["default"](obj) && obj === obj.toUpperCase();
	}
	
	module.exports = exports["default"];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a DOM node value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitDOMNode;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _object = __webpack_require__(15);
	
	var _object2 = _interopRequireDefault(_object);
	
	function isitDOMNode(obj) {
	    return _object2["default"](obj) && obj.nodeType > 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a NodeList value?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitDOMNodeList;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(1);
	
	var _object = __webpack_require__(15);
	
	var _object2 = _interopRequireDefault(_object);
	
	function isitDOMNodeList(obj) {
	    return _object2["default"](obj) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(_utils.toString.call(obj)) && _utils.hasOwnProperty.call(obj, "length") && obj.length === 0 || _object2["default"](obj[0]) && obj[0].nodeType > 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a jQuery object or jQuery itself?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitJquery;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _function = __webpack_require__(11);
	
	var _function2 = _interopRequireDefault(_function);
	
	var _object = __webpack_require__(15);
	
	var _object2 = _interopRequireDefault(_object);
	
	function isitJquery(obj) {
	    if (_interfaces.not(_object2["default"])(obj)) {
	        return false;
	    }
	
	    if (_function2["default"](obj)) {
	        var $obj = obj();
	
	        return _object2["default"]($obj) && !!$obj.jquery;
	    }
	
	    /* eslint-disable */
	    return obj instanceof jQuery;
	    /* eslint-enable */
	}
	
	module.exports = exports["default"];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a plain object?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitPlainObject;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _function = __webpack_require__(11);
	
	var _function2 = _interopRequireDefault(_function);
	
	var _null = __webpack_require__(5);
	
	var _null2 = _interopRequireDefault(_null);
	
	var _object = __webpack_require__(15);
	
	var _object2 = _interopRequireDefault(_object);
	
	function isitPlainObject(obj) {
	    if (_null2["default"](obj) || _interfaces.not(_object2["default"])(obj)) {
	        return false;
	    }
	
	    if (_function2["default"](Object.getPrototypeOf)) {
	        var proto = Object.getPrototypeOf(obj);
	
	        return proto === Object.prototype || _null2["default"](proto);
	    }
	
	    return _interfaces.not(_function2["default"])(obj);
	}
	
	module.exports = exports["default"];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// is obj an object value, and do the number of properties in that object match count
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitPropertyCount;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _object = __webpack_require__(15);
	
	var _object2 = _interopRequireDefault(_object);
	
	function isitPropertyCount(obj, count) {
	    if (_interfaces.not(_object2["default"])(obj) || _interfaces.not(_number2["default"])(count)) {
	        return false;
	    }
	
	    if (Object.keys) {
	        return Object.keys(obj).length === count;
	    }
	
	    var props = [],
	        prop = undefined;
	
	    for (prop in obj) {
	        if (_interfaces.hasOwnProperty.call(obj, prop)) {
	            props[props.length] = prop;
	        }
	    }
	
	    return props.length === count;
	}
	
	module.exports = exports["default"];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// is obj an object and does prop exist as a key in it?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitPropertyDefined;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _object = __webpack_require__(15);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	function isitPropertyDefined(obj, prop) {
	    return _object2["default"](obj) && _string2["default"](prop) && prop in obj;
	}
	
	module.exports = exports["default"];

/***/ },
/* 80 */
/***/ function(module, exports) {

	// is obj the window object?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitWindowObject;
	
	function isitWindowObject(obj) {
	    return typeof obj === "object" && "setInterval" in obj;
	}
	
	module.exports = exports["default"];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// is arr an array, and does obj exist in it?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitInArray;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _array = __webpack_require__(2);
	
	var _array2 = _interopRequireDefault(_array);
	
	function isitInArray(obj, arr) {
	    if (_interfaces.not(_array2["default"])(arr)) {
	        return false;
	    }
	
	    return arr.indexOf(obj) !== -1;
	}
	
	module.exports = exports["default"];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// is arr an array that is sorted either ascending or descending?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitSorted;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _array = __webpack_require__(2);
	
	var _array2 = _interopRequireDefault(_array);
	
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
	
	function isitSorted(arr) {
	    if (_interfaces.not(_array2["default"])(arr)) {
	        return false;
	    }
	
	    return isArraySortedAsc(arr) || isArraySortedDesc(arr);
	}
	
	module.exports = exports["default"];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a date value and does it match the day string?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitDay;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _dateNames = __webpack_require__(84);
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _undefined = __webpack_require__(20);
	
	var _undefined2 = _interopRequireDefault(_undefined);
	
	function isitDay(obj, dayString) {
	    if (_undefined2["default"](dayString)) {
	        dayString = _dateNames.days[new Date().getDay()];
	    }
	
	    return _date2["default"](obj) && _string2["default"](dayString) && dayString.toLowerCase() === _dateNames.days[obj.getDay()];
	}
	
	module.exports = exports["default"];

/***/ },
/* 84 */
/***/ function(module, exports) {

	// days and months used for various date comparisons
	
	"use strict";
	
	exports.__esModule = true;
	var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
	
	exports.days = days;
	var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
	
	exports.months = months;
	exports["default"] = {
	    days: days,
	    months: months
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a date and does it's timezone use daylight saving time?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitDaylightSavingTime;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	function isitDaylightSavingTime(obj) {
	    if (!_date2["default"](obj)) {
	        return false;
	    }
	
	    var objYear = obj.getFullYear(),
	        jan = new Date(objYear, 0, 1),
	        jul = new Date(objYear, 6, 1);
	
	    return obj.getTimezoneOffset() < Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
	}
	
	module.exports = exports["default"];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// is obj in the future compared to now?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitFuture;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	function isitFuture(obj) {
	    return _date2["default"](obj) && obj.getTime() > new Date().getTime();
	}
	
	module.exports = exports["default"];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// are obj, startObj, and endObj all date values, and does obj exist in the range created by
	// startObj and endObj?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitInDateRange;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	function isitInDateRange(obj, startObj, endObj) {
	    if (_interfaces.all(_interfaces.not(_date2["default"]))(obj, startObj, endObj)) {
	        return false;
	    }
	
	    var objTime = obj.getTime();
	
	    return objTime > startObj.getTime() && objTime < endObj.getTime();
	}
	
	module.exports = exports["default"];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// is obj in the last month compared to now?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitInLastMonth;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _inDateRange = __webpack_require__(87);
	
	var _inDateRange2 = _interopRequireDefault(_inDateRange);
	
	function isitInLastMonth(obj) {
	    return _inDateRange2["default"](obj, new Date(new Date().setDate(new Date().getMonth() - 1)), new Date());
	}
	
	module.exports = exports["default"];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// is obj in the last week compared to now?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitInLastWeek;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _inDateRange = __webpack_require__(87);
	
	var _inDateRange2 = _interopRequireDefault(_inDateRange);
	
	function isitInLastWeek(obj) {
	    return _inDateRange2["default"](obj, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
	}
	
	module.exports = exports["default"];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// is obj in the last year compared to now?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitInLastYear;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _inDateRange = __webpack_require__(87);
	
	var _inDateRange2 = _interopRequireDefault(_inDateRange);
	
	function isitInLastYear(obj) {
	    return _inDateRange2["default"](obj, new Date(new Date().setDate(new Date().getFullYear() - 1)), new Date());
	}
	
	module.exports = exports["default"];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a number and a valid leap year?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitLeapYear;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	function isitLeapYear(obj) {
	    return _number2["default"](obj) && (obj % 4 === 0 && obj % 100 !== 0 || obj % 400 === 0);
	}
	
	module.exports = exports["default"];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a date, and does it match monthString?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitMonth;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _dateNames = __webpack_require__(84);
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _undefined = __webpack_require__(20);
	
	var _undefined2 = _interopRequireDefault(_undefined);
	
	function isitMonth(obj, monthString) {
	    if (_undefined2["default"](monthString)) {
	        monthString = _dateNames.months[new Date().getMonth()];
	    }
	
	    return _date2["default"](obj) && _string2["default"](monthString) && monthString.toLowerCase() === _dateNames.months[obj.getMonth()];
	}
	
	module.exports = exports["default"];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// is obj in the next month compared to now?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitInNextMonth;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _inDateRange = __webpack_require__(87);
	
	var _inDateRange2 = _interopRequireDefault(_inDateRange);
	
	function isitInNextMonth(obj) {
	    return _inDateRange2["default"](obj, new Date(), new Date(new Date().setDate(new Date().getMonth() + 1)));
	}
	
	module.exports = exports["default"];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// is obj in the next week compared to now?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitInNextWeek;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _inDateRange = __webpack_require__(87);
	
	var _inDateRange2 = _interopRequireDefault(_inDateRange);
	
	function isitInNextWeek(obj) {
	    return _inDateRange2["default"](obj, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
	}
	
	module.exports = exports["default"];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// is obj in the next year compared to now?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitInNextYear;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _inDateRange = __webpack_require__(87);
	
	var _inDateRange2 = _interopRequireDefault(_inDateRange);
	
	function isitInNextYear(obj) {
	    return _inDateRange2["default"](obj, new Date(), new Date(new Date().setDate(new Date().getFullYear() + 1)));
	}
	
	module.exports = exports["default"];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// is obj in the past compared to now?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitPast;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	function isitPast(obj) {
	    return _date2["default"](obj) && obj.getTime() < new Date().getTime();
	}
	
	module.exports = exports["default"];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a date and is it in quarter quarterNumber?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitQuarterOfYear;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	function isitQuarterOfYear(obj, quarterNumber) {
	    return _date2["default"](obj) && _number2["default"](quarterNumber) && quarterNumber === Math.floor((obj.getMonth() + 3) / 3);
	}
	
	module.exports = exports["default"];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a date and is it the same as today?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitToday;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	function isitToday(obj) {
	    return _date2["default"](obj) && obj.toDateString() === new Date().toDateString();
	}
	
	module.exports = exports["default"];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a date and is it tomorrow?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitTomorrow;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	function isitTomorrow(obj) {
	    if (_interfaces.not(_date2["default"])(obj)) {
	        return false;
	    }
	
	    var now = new Date(),
	        tomorrowString = new Date(now.setDate(now.getDate() + 1).toDateString());
	
	    return obj.toDateString() === tomorrowString;
	}
	
	module.exports = exports["default"];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a date and a weekday?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitWeekday;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	function isitWeekday(obj) {
	    if (_interfaces.not(_date2["default"])(obj)) {
	        return false;
	    }
	
	    var day = obj.getDay();
	
	    return day !== 6 && day !== 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a date and a weekend day?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitWeekday;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	function isitWeekday(obj) {
	    if (_interfaces.not(_date2["default"])(obj)) {
	        return false;
	    }
	
	    var day = obj.getDay();
	
	    return day === 6 || day === 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a date and year a number, and is obj in year year?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitYear;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _number = __webpack_require__(14);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _string = __webpack_require__(8);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _undefined = __webpack_require__(20);
	
	var _undefined2 = _interopRequireDefault(_undefined);
	
	function isitYear(obj, yearNumber) {
	    if (_undefined2["default"](yearNumber)) {
	        yearNumber = new Date().getFullYear();
	    }
	
	    if (_string2["default"](yearNumber)) {
	        yearNumber = parseInt(yearNumber, 10);
	    }
	
	    return _date2["default"](obj) && _number2["default"](yearNumber) && yearNumber === obj.getFullYear();
	}
	
	module.exports = exports["default"];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// is obj a date and is it yesterday?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitYesterday;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _date = __webpack_require__(9);
	
	var _date2 = _interopRequireDefault(_date);
	
	function isitYesterday(obj) {
	    var now = new Date(),
	        yesterdayString = new Date(now.setDate(now.getDate() - 1).toDateString());
	
	    return _date2["default"](obj) && obj.toDateString() === yesterdayString;
	}
	
	module.exports = exports["default"];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// does the device used run on android?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitAndroid;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitAndroid() {
	    return _browser2["default"]() && /android/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// navigator info from browser, captured once
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	var navigatorInfo = {};
	
	if (_browser2["default"]()) {
	    navigatorInfo = {
	        appVersion: "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "",
	        userAgent: "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
	        vendor: "navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase() || ""
	    };
	}
	
	exports["default"] = navigatorInfo;
	module.exports = exports["default"];

/***/ },
/* 106 */
/***/ function(module, exports) {

	// is the environment a browser?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitBrowser;
	
	function isitBrowser() {
	    return typeof window !== "undefined";
	}
	
	module.exports = exports["default"];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used an android phone?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitAndroidPhone;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	var _browser3 = _interopRequireDefault(_browser);
	
	function isitAndroidPhone() {
	    return _browser2["default"]() && _browser3["default"]() && /mobile/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used an android tablet?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitAndroidTablet;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	var _browser3 = _interopRequireDefault(_browser);
	
	function isitAndroidTablet() {
	    return _browser2["default"]() && _browser3["default"]() && !/mobile/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used a blackberry phone?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitBlackberry;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitBlackberry() {
	    return _browser2["default"]() && /blackberry/i.test(_navigator2["default"].userAgent) || /BB10/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// does the browser used render via blink?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitBlink;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitBlink() {
	    return _browser2["default"]() && /chrome/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// is the browser used chrome?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitChrome;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitChrome() {
	    return _browser2["default"]() && /chrome|chromium/i.test(_navigator2["default"].userAgent) && /google inc/.test(_navigator2["default"].vendor);
	}
	
	module.exports = exports["default"];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used a desktop / laptop computer?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitDesktop;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	var _mobile = __webpack_require__(113);
	
	var _mobile2 = _interopRequireDefault(_mobile);
	
	var _tablet = __webpack_require__(118);
	
	var _tablet2 = _interopRequireDefault(_tablet);
	
	function isitDesktop() {
	    return _browser2["default"]() && !_mobile2["default"]() && !_tablet2["default"]();
	}
	
	module.exports = exports["default"];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used a mobile phone?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitMobile;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _androidPhone = __webpack_require__(107);
	
	var _androidPhone2 = _interopRequireDefault(_androidPhone);
	
	var _blackberry = __webpack_require__(109);
	
	var _blackberry2 = _interopRequireDefault(_blackberry);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	var _iphone = __webpack_require__(114);
	
	var _iphone2 = _interopRequireDefault(_iphone);
	
	var _ipod = __webpack_require__(115);
	
	var _ipod2 = _interopRequireDefault(_ipod);
	
	var _windowsPhone = __webpack_require__(116);
	
	var _windowsPhone2 = _interopRequireDefault(_windowsPhone);
	
	function isitMobile() {
	    return _browser2["default"]() && (_iphone2["default"]() || _androidPhone2["default"]() || _ipod2["default"]() || _windowsPhone2["default"]() || _blackberry2["default"]());
	}
	
	module.exports = exports["default"];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used an iPhone?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitIphone;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitIphone() {
	    return _browser2["default"]() && /iphone/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used an iPod?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitIpod;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitIpod() {
	    return _browser2["default"]() && /ipod/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used a mobile phone running on Windows?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitWindowsPhone;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	var _windows = __webpack_require__(117);
	
	var _windows2 = _interopRequireDefault(_windows);
	
	function isitWindowsPhone() {
	    return _browser2["default"]() && _windows2["default"]() && /phone/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used running on Windows?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitWindows;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitWindows() {
	    return _browser2["default"]() && /win/i.test(_navigator2["default"].appVersion);
	}
	
	module.exports = exports["default"];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used a tablet?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitTablet;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _androidTablet = __webpack_require__(108);
	
	var _androidTablet2 = _interopRequireDefault(_androidTablet);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	var _ipad = __webpack_require__(119);
	
	var _ipad2 = _interopRequireDefault(_ipad);
	
	var _windowsTablet = __webpack_require__(120);
	
	var _windowsTablet2 = _interopRequireDefault(_windowsTablet);
	
	function isitTablet() {
	    return _browser2["default"]() && (_ipad2["default"]() || _androidTablet2["default"]() || _windowsTablet2["default"]());
	}
	
	module.exports = exports["default"];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used an iPad?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitIpad;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitIpad() {
	    return _browser2["default"]() && /ipad/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used a tablet running on Windows?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitWindowsTablet;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	var _windows = __webpack_require__(117);
	
	var _windows2 = _interopRequireDefault(_windows);
	
	var _windowsPhone = __webpack_require__(116);
	
	var _windowsPhone2 = _interopRequireDefault(_windowsPhone);
	
	function isitWindowsTablet() {
	    return _browser2["default"]() && _windows2["default"]() && _interfaces.not(_windowsPhone2["default"])() && /touch/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// is the browser used Internet Explorer?
	// NOTE: if version is passed, will validate if IE and equal to that version
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitIe;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _interfaces = __webpack_require__(3);
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitIe(version) {
	    if (_interfaces.not(_browser2["default"])()) {
	        return false;
	    }
	
	    if (!version) {
	        return (/msie/.test(_navigator2["default"].userAgent) || !window.ActiveXObject && "ActiveXObject" in window
	        );
	    }
	
	    if (version >= 11) {
	        return !window.ActiveXObject && "ActiveXObject" in window;
	    }
	
	    return new RegExp("msie " + version).test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// is the browser used firefox?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitFirefox;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitFirefox() {
	    return _browser2["default"]() && /firefox/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// does the browser used render via gecko?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitGecko;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitGecko() {
	    return _browser2["default"]() && /gecko/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used running on iOS?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitIOS;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _ipad = __webpack_require__(119);
	
	var _ipad2 = _interopRequireDefault(_ipad);
	
	var _iphone = __webpack_require__(114);
	
	var _iphone2 = _interopRequireDefault(_iphone);
	
	var _ipod = __webpack_require__(115);
	
	var _ipod2 = _interopRequireDefault(_ipod);
	
	function isitIOS() {
	    return _ipad2["default"]() || _iphone2["default"]() || _ipod2["default"]();
	}
	
	module.exports = exports["default"];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used running on Linux?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitLinux;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitLinux() {
	    return _browser2["default"]() && /linux|x11/i.test(_navigator2["default"].appVersion);
	}
	
	module.exports = exports["default"];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used a Mac?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitMac;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitMac() {
	    return _browser2["default"]() && /mac/i.test(_navigator2["default"].appVersion);
	}
	
	module.exports = exports["default"];

/***/ },
/* 127 */
/***/ function(module, exports) {

	// is the environment not a browser (meaning its likely server-side, or NodeJS)?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitNode;
	
	function isitNode() {
	    return typeof window === "undefined";
	}
	
	module.exports = exports["default"];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitOffline;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _online = __webpack_require__(129);
	
	var _online2 = _interopRequireDefault(_online);
	
	function isitOffline() {
	    return !_online2["default"]();
	}
	
	module.exports = exports["default"];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitOnline;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitOnline() {
	    return _browser2["default"]() && navigator.onLine;
	}
	
	module.exports = exports["default"];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// is the browser used Opera?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitOpera;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitOpera() {
	    return _browser2["default"]() && /^opera/i.test(_navigator2["default"].userAgent) || /OPR/.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// does the browser used render via Presto?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitPresto;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitPresto() {
	    return _browser2["default"]() && /opera/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// does the device used have a retina screen?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitRetina;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitRetina() {
	    if (_browser2["default"]() && window.matchMedia) {
	        var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and " + "(-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen " + "and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
	
	        return mq && mq.matches || window.devicePixelRatio > 1;
	    }
	}
	
	module.exports = exports["default"];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// is the browser used Safari?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitSafari;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitSafari() {
	    return _browser2["default"]() && /safari/i.test(_navigator2["default"].userAgent) && /apple computer/.test(_navigator2["default"].vendor);
	}
	
	module.exports = exports["default"];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// is the device used a touch device?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitTouchDevice;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitTouchDevice() {
	    /* eslint-disable */
	    return _browser2["default"]() && "ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch;
	    /* eslint-enable */
	}
	
	module.exports = exports["default"];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// does the browser used render via Trident?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitTrident;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitTrident() {
	    return _browser2["default"]() && /trident/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// does the browser used render via WebKit?
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isitWebkit;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _navigator = __webpack_require__(105);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _browser = __webpack_require__(106);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function isitWebkit() {
	    return _browser2["default"]() && /applewebkit/i.test(_navigator2["default"].userAgent);
	}
	
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=isit.js.map