// is.js
// Author: Tony Quetano

// Forked from: is.js
// Original Author: Aras Atasaygin

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("./utils");

var _helpers = require("./helpers");

// Type checks
/* -------------------------------------------------------------------------- */

var _isArguments = require("is.arguments");

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isArray = require("is.array");

var _isArray2 = _interopRequireDefault(_isArray);

var _isBoolean = require("is.boolean");

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isChar = require("is.char");

var _isChar2 = _interopRequireDefault(_isChar);

var _isDate = require("is.date");

var _isDate2 = _interopRequireDefault(_isDate);

var _isError = require("is.error");

var _isError2 = _interopRequireDefault(_isError);

var _isFunction = require("is.function");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isJson = require("is.json");

var _isJson2 = _interopRequireDefault(_isJson);

var _isNan = require("is.nan");

var _isNan2 = _interopRequireDefault(_isNan);

var _isNull = require("is.null");

var _isNull2 = _interopRequireDefault(_isNull);

var _isNumber = require("is.number");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isObject = require("is.object");

var _isObject2 = _interopRequireDefault(_isObject);

var _isRegexp = require("is.regexp");

var _isRegexp2 = _interopRequireDefault(_isRegexp);

var _isSameType = require("is.sameType");

var _isSameType2 = _interopRequireDefault(_isSameType);

var _isString = require("is.string");

var _isString2 = _interopRequireDefault(_isString);

var _isSymbol = require("is.symbol");

var _isSymbol2 = _interopRequireDefault(_isSymbol);

var _isUndefined = require("is.undefined");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

// Presence checks
/* -------------------------------------------------------------------------- */

var _isEmpty = require("is.empty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isExisty = require("is.existy");

var _isExisty2 = _interopRequireDefault(_isExisty);

var _isFalsy = require("is.falsy");

var _isFalsy2 = _interopRequireDefault(_isFalsy);

var _isSpace = require("is.space");

var _isSpace2 = _interopRequireDefault(_isSpace);

var _isTruthy = require("is.truthy");

var _isTruthy2 = _interopRequireDefault(_isTruthy);

// Arithmetic checks
/* -------------------------------------------------------------------------- */

var _isAbove = require("is.above");

var _isAbove2 = _interopRequireDefault(_isAbove);

var _isDecimal = require("is.decimal");

var _isDecimal2 = _interopRequireDefault(_isDecimal);

var _isEqual = require("is.equal");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _isEven = require("is.even");

var _isEven2 = _interopRequireDefault(_isEven);

var _isFinite = require("is.finite");

var _isFinite2 = _interopRequireDefault(_isFinite);

var _isInfinite = require("is.infinite");

var _isInfinite2 = _interopRequireDefault(_isInfinite);

var _isInteger = require("is.integer");

var _isInteger2 = _interopRequireDefault(_isInteger);

var _isNegative = require("is.negative");

var _isNegative2 = _interopRequireDefault(_isNegative);

var _isOdd = require("is.odd");

var _isOdd2 = _interopRequireDefault(_isOdd);

var _isPositive = require("is.positive");

var _isPositive2 = _interopRequireDefault(_isPositive);

var _isUnder = require("is.under");

var _isUnder2 = _interopRequireDefault(_isUnder);

var _isWithin = require("is.within");

var _isWithin2 = _interopRequireDefault(_isWithin);

// Regexp checks
/* -------------------------------------------------------------------------- */

var _isAffirmative = require("is.affirmative");

var _isAffirmative2 = _interopRequireDefault(_isAffirmative);

var _isAlphaNumeric = require("is.alphaNumeric");

var _isAlphaNumeric2 = _interopRequireDefault(_isAlphaNumeric);

var _isCaPostalCode = require("is.caPostalCode");

var _isCaPostalCode2 = _interopRequireDefault(_isCaPostalCode);

var _isCreditCard = require("is.creditCard");

var _isCreditCard2 = _interopRequireDefault(_isCreditCard);

var _isDateString = require("is.dateString");

var _isDateString2 = _interopRequireDefault(_isDateString);

var _isEmail = require("is.email");

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isEppPhone = require("is.eppPhone");

var _isEppPhone2 = _interopRequireDefault(_isEppPhone);

var _isHexadecimal = require("is.hexadecimal");

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

var _isHexColor = require("is.hexColor");

var _isHexColor2 = _interopRequireDefault(_isHexColor);

var _isIp = require("is.ip");

var _isIp2 = _interopRequireDefault(_isIp);

var _isIpv4 = require("is.ipv4");

var _isIpv42 = _interopRequireDefault(_isIpv4);

var _isIpv6 = require("is.ipv6");

var _isIpv62 = _interopRequireDefault(_isIpv6);

var _isNanpPhone = require("is.nanpPhone");

var _isNanpPhone2 = _interopRequireDefault(_isNanpPhone);

var _isSocialSecurityNumber = require("is.socialSecurityNumber");

var _isSocialSecurityNumber2 = _interopRequireDefault(_isSocialSecurityNumber);

var _isTimeString = require("is.timeString");

var _isTimeString2 = _interopRequireDefault(_isTimeString);

var _isUkPostalCode = require("is.ukPostalCode");

var _isUkPostalCode2 = _interopRequireDefault(_isUkPostalCode);

var _isUrl = require("is.url");

var _isUrl2 = _interopRequireDefault(_isUrl);

var _isUsZipCode = require("is.usZipCode");

var _isUsZipCode2 = _interopRequireDefault(_isUsZipCode);

var _isSetRegexp = require("is.setRegexp");

var _isSetRegexp2 = _interopRequireDefault(_isSetRegexp);

// String checks
/* -------------------------------------------------------------------------- */

var _isCapitalized = require("is.capitalized");

var _isCapitalized2 = _interopRequireDefault(_isCapitalized);

var _isEndWith = require("is.endWith");

var _isEndWith2 = _interopRequireDefault(_isEndWith);

var _isInclude = require("is.include");

var _isInclude2 = _interopRequireDefault(_isInclude);

var _isLowercase = require("is.lowercase");

var _isLowercase2 = _interopRequireDefault(_isLowercase);

var _isPalindrome = require("is.palindrome");

var _isPalindrome2 = _interopRequireDefault(_isPalindrome);

var _isStartWith = require("is.startWith");

var _isStartWith2 = _interopRequireDefault(_isStartWith);

var _isUppercase = require("is.uppercase");

var _isUppercase2 = _interopRequireDefault(_isUppercase);

// String checks
/* -------------------------------------------------------------------------- */

// Object checks
/* -------------------------------------------------------------------------- */

var _isDomNode = require("is.domNode");

var _isDomNode2 = _interopRequireDefault(_isDomNode);

var _isPropertyCount = require("is.propertyCount");

var _isPropertyCount2 = _interopRequireDefault(_isPropertyCount);

var _isPropertyDefined = require("is.propertyDefined");

var _isPropertyDefined2 = _interopRequireDefault(_isPropertyDefined);

var _isWindowObject = require("is.windowObject");

var _isWindowObject2 = _interopRequireDefault(_isWindowObject);

// Array checks
/* -------------------------------------------------------------------------- */

var _isInArray = require("is.inArray");

var _isInArray2 = _interopRequireDefault(_isInArray);

var _isSorted = require("is.sorted");

var _isSorted2 = _interopRequireDefault(_isSorted);

// Date checks
/* -------------------------------------------------------------------------- */

var _isToday = require("is.today");

var _isToday2 = _interopRequireDefault(_isToday);

// lots more to do

// Environment checks
/* -------------------------------------------------------------------------- */

var _isBrowser = require("is.browser");

var _isBrowser2 = _interopRequireDefault(_isBrowser);

var _isChrome = require("is.chrome");

var _isChrome2 = _interopRequireDefault(_isChrome);

var _isFirefox = require("is.firefox");

var _isFirefox2 = _interopRequireDefault(_isFirefox);

var _isNode = require("is.node");

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