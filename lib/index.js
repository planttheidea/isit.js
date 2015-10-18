// isit.js
// Author: Tony Quetano

// Forked from: isit.js
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

var _isitArguments = require("isit.arguments");

var _isitArguments2 = _interopRequireDefault(_isitArguments);

var _isitArray = require("isit.array");

var _isitArray2 = _interopRequireDefault(_isitArray);

var _isitBoolean = require("isit.boolean");

var _isitBoolean2 = _interopRequireDefault(_isitBoolean);

var _isitChar = require("isit.char");

var _isitChar2 = _interopRequireDefault(_isitChar);

var _isitDate = require("isit.date");

var _isitDate2 = _interopRequireDefault(_isitDate);

var _isitError = require("isit.error");

var _isitError2 = _interopRequireDefault(_isitError);

var _isitFunction = require("isit.function");

var _isitFunction2 = _interopRequireDefault(_isitFunction);

var _isitJson = require("isit.json");

var _isitJson2 = _interopRequireDefault(_isitJson);

var _isitNan = require("isit.nan");

var _isitNan2 = _interopRequireDefault(_isitNan);

var _isitNull = require("isit.null");

var _isitNull2 = _interopRequireDefault(_isitNull);

var _isitNumber = require("isit.number");

var _isitNumber2 = _interopRequireDefault(_isitNumber);

var _isitObject = require("isit.object");

var _isitObject2 = _interopRequireDefault(_isitObject);

var _isitRegexp = require("isit.regexp");

var _isitRegexp2 = _interopRequireDefault(_isitRegexp);

var _isitSameType = require("isit.sameType");

var _isitSameType2 = _interopRequireDefault(_isitSameType);

var _isitString = require("isit.string");

var _isitString2 = _interopRequireDefault(_isitString);

var _isitSymbol = require("isit.symbol");

var _isitSymbol2 = _interopRequireDefault(_isitSymbol);

var _isitUndefined = require("isit.undefined");

var _isitUndefined2 = _interopRequireDefault(_isitUndefined);

// Presence checks
/* -------------------------------------------------------------------------- */

var _isitEmpty = require("isit.empty");

var _isitEmpty2 = _interopRequireDefault(_isitEmpty);

var _isitExisty = require("isit.existy");

var _isitExisty2 = _interopRequireDefault(_isitExisty);

var _isitFalsy = require("isit.falsy");

var _isitFalsy2 = _interopRequireDefault(_isitFalsy);

var _isitSpace = require("isit.space");

var _isitSpace2 = _interopRequireDefault(_isitSpace);

var _isitTruthy = require("isit.truthy");

var _isitTruthy2 = _interopRequireDefault(_isitTruthy);

// Arithmetic checks
/* -------------------------------------------------------------------------- */

var _isitAbove = require("isit.above");

var _isitAbove2 = _interopRequireDefault(_isitAbove);

var _isitDecimal = require("isit.decimal");

var _isitDecimal2 = _interopRequireDefault(_isitDecimal);

var _isitEqual = require("isit.equal");

var _isitEqual2 = _interopRequireDefault(_isitEqual);

var _isitEven = require("isit.even");

var _isitEven2 = _interopRequireDefault(_isitEven);

var _isitFinite = require("isit.finite");

var _isitFinite2 = _interopRequireDefault(_isitFinite);

var _isitInfinite = require("isit.infinite");

var _isitInfinite2 = _interopRequireDefault(_isitInfinite);

var _isitInteger = require("isit.integer");

var _isitInteger2 = _interopRequireDefault(_isitInteger);

var _isitNegative = require("isit.negative");

var _isitNegative2 = _interopRequireDefault(_isitNegative);

var _isitOdd = require("isit.odd");

var _isitOdd2 = _interopRequireDefault(_isitOdd);

var _isitPositive = require("isit.positive");

var _isitPositive2 = _interopRequireDefault(_isitPositive);

var _isitUnder = require("isit.under");

var _isitUnder2 = _interopRequireDefault(_isitUnder);

var _isitWithin = require("isit.within");

var _isitWithin2 = _interopRequireDefault(_isitWithin);

// Regexp checks
/* -------------------------------------------------------------------------- */

var _isitAffirmative = require("isit.affirmative");

var _isitAffirmative2 = _interopRequireDefault(_isitAffirmative);

var _isitAlphaNumeric = require("isit.alphaNumeric");

var _isitAlphaNumeric2 = _interopRequireDefault(_isitAlphaNumeric);

var _isitCaPostalCode = require("isit.caPostalCode");

var _isitCaPostalCode2 = _interopRequireDefault(_isitCaPostalCode);

var _isitCreditCard = require("isit.creditCard");

var _isitCreditCard2 = _interopRequireDefault(_isitCreditCard);

var _isitDateString = require("isit.dateString");

var _isitDateString2 = _interopRequireDefault(_isitDateString);

var _isitEmail = require("isit.email");

var _isitEmail2 = _interopRequireDefault(_isitEmail);

var _isitEppPhone = require("isit.eppPhone");

var _isitEppPhone2 = _interopRequireDefault(_isitEppPhone);

var _isitHexadecimal = require("isit.hexadecimal");

var _isitHexadecimal2 = _interopRequireDefault(_isitHexadecimal);

var _isitHexColor = require("isit.hexColor");

var _isitHexColor2 = _interopRequireDefault(_isitHexColor);

var _isitIp = require("isit.ip");

var _isitIp2 = _interopRequireDefault(_isitIp);

var _isitIpv4 = require("isit.ipv4");

var _isitIpv42 = _interopRequireDefault(_isitIpv4);

var _isitIpv6 = require("isit.ipv6");

var _isitIpv62 = _interopRequireDefault(_isitIpv6);

var _isitNanpPhone = require("isit.nanpPhone");

var _isitNanpPhone2 = _interopRequireDefault(_isitNanpPhone);

var _isitSocialSecurityNumber = require("isit.socialSecurityNumber");

var _isitSocialSecurityNumber2 = _interopRequireDefault(_isitSocialSecurityNumber);

var _isitTimeString = require("isit.timeString");

var _isitTimeString2 = _interopRequireDefault(_isitTimeString);

var _isitUkPostalCode = require("isit.ukPostalCode");

var _isitUkPostalCode2 = _interopRequireDefault(_isitUkPostalCode);

var _isitUrl = require("isit.url");

var _isitUrl2 = _interopRequireDefault(_isitUrl);

var _isitUsZipCode = require("isit.usZipCode");

var _isitUsZipCode2 = _interopRequireDefault(_isitUsZipCode);

var _isitSetRegexp = require("isit.setRegexp");

var _isitSetRegexp2 = _interopRequireDefault(_isitSetRegexp);

// String checks
/* -------------------------------------------------------------------------- */

var _isitCapitalized = require("isit.capitalized");

var _isitCapitalized2 = _interopRequireDefault(_isitCapitalized);

var _isitEndWith = require("isit.endWith");

var _isitEndWith2 = _interopRequireDefault(_isitEndWith);

var _isitInclude = require("isit.include");

var _isitInclude2 = _interopRequireDefault(_isitInclude);

var _isitLowercase = require("isit.lowercase");

var _isitLowercase2 = _interopRequireDefault(_isitLowercase);

var _isitPalindrome = require("isit.palindrome");

var _isitPalindrome2 = _interopRequireDefault(_isitPalindrome);

var _isitStartWith = require("isit.startWith");

var _isitStartWith2 = _interopRequireDefault(_isitStartWith);

var _isitUppercase = require("isit.uppercase");

var _isitUppercase2 = _interopRequireDefault(_isitUppercase);

// String checks
/* -------------------------------------------------------------------------- */

// Object checks
/* -------------------------------------------------------------------------- */

var _isitDomNode = require("isit.domNode");

var _isitDomNode2 = _interopRequireDefault(_isitDomNode);

var _isitPropertyCount = require("isit.propertyCount");

var _isitPropertyCount2 = _interopRequireDefault(_isitPropertyCount);

var _isitPropertyDefined = require("isit.propertyDefined");

var _isitPropertyDefined2 = _interopRequireDefault(_isitPropertyDefined);

var _isitWindowObject = require("isit.windowObject");

var _isitWindowObject2 = _interopRequireDefault(_isitWindowObject);

// Array checks
/* -------------------------------------------------------------------------- */

var _isitInArray = require("isit.inArray");

var _isitInArray2 = _interopRequireDefault(_isitInArray);

var _isitSorted = require("isit.sorted");

var _isitSorted2 = _interopRequireDefault(_isitSorted);

// Date checks
/* -------------------------------------------------------------------------- */

var _isitDay = require("isit.day");

var _isitDay2 = _interopRequireDefault(_isitDay);

var _isitDaylightSavingTime = require("isit.daylightSavingTime");

var _isitDaylightSavingTime2 = _interopRequireDefault(_isitDaylightSavingTime);

var _isitFuture = require("isit.future");

var _isitFuture2 = _interopRequireDefault(_isitFuture);

var _isitInDateRange = require("isit.inDateRange");

var _isitInDateRange2 = _interopRequireDefault(_isitInDateRange);

var _isitInLastMonth = require("isit.inLastMonth");

var _isitInLastMonth2 = _interopRequireDefault(_isitInLastMonth);

var _isitInLastWeek = require("isit.inLastWeek");

var _isitInLastWeek2 = _interopRequireDefault(_isitInLastWeek);

var _isitInLastYear = require("isit.inLastYear");

var _isitInLastYear2 = _interopRequireDefault(_isitInLastYear);

var _isitLeapYear = require("isit.leapYear");

var _isitLeapYear2 = _interopRequireDefault(_isitLeapYear);

var _isitMonth = require("isit.month");

var _isitMonth2 = _interopRequireDefault(_isitMonth);

var _isitInNextMonth = require("isit.inNextMonth");

var _isitInNextMonth2 = _interopRequireDefault(_isitInNextMonth);

var _isitInNextWeek = require("isit.inNextWeek");

var _isitInNextWeek2 = _interopRequireDefault(_isitInNextWeek);

var _isitInNextYear = require("isit.inNextYear");

var _isitInNextYear2 = _interopRequireDefault(_isitInNextYear);

var _isitPast = require("isit.past");

var _isitPast2 = _interopRequireDefault(_isitPast);

var _isitQuarterOfYear = require("isit.quarterOfYear");

var _isitQuarterOfYear2 = _interopRequireDefault(_isitQuarterOfYear);

var _isitToday = require("isit.today");

var _isitToday2 = _interopRequireDefault(_isitToday);

var _isitTomorrow = require("isit.tomorrow");

var _isitTomorrow2 = _interopRequireDefault(_isitTomorrow);

var _isitWeekday = require("isit.weekday");

var _isitWeekday2 = _interopRequireDefault(_isitWeekday);

var _isitWeekend = require("isit.weekend");

var _isitWeekend2 = _interopRequireDefault(_isitWeekend);

var _isitYear = require("isit.year");

var _isitYear2 = _interopRequireDefault(_isitYear);

var _isitYesterday = require("isit.yesterday");

var _isitYesterday2 = _interopRequireDefault(_isitYesterday);

// Environment checks
/* -------------------------------------------------------------------------- */

var _isitAndroid = require("isit.android");

var _isitAndroid2 = _interopRequireDefault(_isitAndroid);

var _isitAndroidPhone = require("isit.androidPhone");

var _isitAndroidPhone2 = _interopRequireDefault(_isitAndroidPhone);

var _isitAndroidTablet = require("isit.androidTablet");

var _isitAndroidTablet2 = _interopRequireDefault(_isitAndroidTablet);

var _isitBlackberry = require("isit.blackberry");

var _isitBlackberry2 = _interopRequireDefault(_isitBlackberry);

var _isitBlink = require("isit.blink");

var _isitBlink2 = _interopRequireDefault(_isitBlink);

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

var _isitChrome = require("isit.chrome");

var _isitChrome2 = _interopRequireDefault(_isitChrome);

var _isitDesktop = require("isit.desktop");

var _isitDesktop2 = _interopRequireDefault(_isitDesktop);

var _isitIe = require("isit.ie");

var _isitIe2 = _interopRequireDefault(_isitIe);

var _isitFirefox = require("isit.firefox");

var _isitFirefox2 = _interopRequireDefault(_isitFirefox);

var _isitGecko = require("isit.gecko");

var _isitGecko2 = _interopRequireDefault(_isitGecko);

var _isitIos = require("isit.ios");

var _isitIos2 = _interopRequireDefault(_isitIos);

var _isitIpad = require("isit.ipad");

var _isitIpad2 = _interopRequireDefault(_isitIpad);

var _isitIphone = require("isit.iphone");

var _isitIphone2 = _interopRequireDefault(_isitIphone);

var _isitIpod = require("isit.ipod");

var _isitIpod2 = _interopRequireDefault(_isitIpod);

var _isitLinux = require("isit.linux");

var _isitLinux2 = _interopRequireDefault(_isitLinux);

var _isitMac = require("isit.mac");

var _isitMac2 = _interopRequireDefault(_isitMac);

var _isitMobile = require("isit.mobile");

var _isitMobile2 = _interopRequireDefault(_isitMobile);

var _isitNode = require("isit.node");

var _isitNode2 = _interopRequireDefault(_isitNode);

var _isitOffline = require("isit.offline");

var _isitOffline2 = _interopRequireDefault(_isitOffline);

var _isitOnline = require("isit.online");

var _isitOnline2 = _interopRequireDefault(_isitOnline);

var _isitOpera = require("isit.opera");

var _isitOpera2 = _interopRequireDefault(_isitOpera);

var _isitPresto = require("isit.presto");

var _isitPresto2 = _interopRequireDefault(_isitPresto);

var _isitRetina = require("isit.retina");

var _isitRetina2 = _interopRequireDefault(_isitRetina);

var _isitSafari = require("isit.safari");

var _isitSafari2 = _interopRequireDefault(_isitSafari);

var _isitTablet = require("isit.tablet");

var _isitTablet2 = _interopRequireDefault(_isitTablet);

var _isitTouchDevice = require("isit.touchDevice");

var _isitTouchDevice2 = _interopRequireDefault(_isitTouchDevice);

var _isitTrident = require("isit.trident");

var _isitTrident2 = _interopRequireDefault(_isitTrident);

var _isitWebkit = require("isit.webkit");

var _isitWebkit2 = _interopRequireDefault(_isitWebkit);

var _isitWindows = require("isit.windows");

var _isitWindows2 = _interopRequireDefault(_isitWindows);

var _isitWindowsPhone = require("isit.windowsPhone");

var _isitWindowsPhone2 = _interopRequireDefault(_isitWindowsPhone);

var _isitWindowsTablet = require("isit.windowsTablet");

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