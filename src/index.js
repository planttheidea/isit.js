// isit.js
// Author: Tony Quetano

// Forked from: isit.js
// Original Author: Aras Atasaygin


import {hasOwnProperty} from "./utils";

import {
    all,
    any,
    not
} from "./helpers";

const defaultApi = [
    "all",
    "any",
    "not"
];

let isit = {
    all:{},
    any:{},
    not:{},
    version: "1.0.0"
};

// Type checks
/* -------------------------------------------------------------------------- */

import _isArguments from "arguments";
import _isArray from "array";
import _isBoolean from "boolean";
import _isChar from "char";
import _isDate from "date";
import _isError from "error";
import _isFunction from "function";
import _isJSON from "json";
import _isNaN from "nan.js"; // it doesn't like just "nan"
import _isNull from "null";
import _isNumber from "number";
import _isObject from "object";
import _isRegExp from "regexp";
import _isSameType from "sameType";
import _isString from "string";
import _isSymbol from "symbol";
import _isUndefined from "undefined";

isit.arguments = _isArguments;
isit.array = _isArray;
isit.boolean = _isBoolean;
isit.char = _isChar;
isit.date = _isDate;
isit.error = _isError;
isit.function = _isFunction;
isit.json = _isJSON;
isit.nan = _isNaN;
isit.null = _isNull;
isit.number = _isNumber;
isit.object = _isObject;
isit.regexp = _isRegExp;
isit.sameType = _isSameType;
isit.string = _isString;
isit.symbol = _isSymbol;
isit.undefined = _isUndefined;

// api restrictions
isit.sameType.api = ["not"];

// Presence checks
/* -------------------------------------------------------------------------- */

import _isEmpty from "empty";
import _isExisty from "existy";
import _isFalsy from "falsy";
import _isSpace from "space";
import _isTruthy from "truthy";

isit.empty = _isEmpty;
isit.existy = _isExisty;
isit.falsy = _isFalsy;
isit.space = _isSpace;
isit.truthy = _isTruthy;

// Arithmetic checks
/* -------------------------------------------------------------------------- */

import _isAbove from "above";
import _isDecimal from "decimal";
import _isEqual from "equal";
import _isEven from "even";
import _isFinite from "finite";
import _isInfinite from "infinite";
import _isInteger from "integer";
import _isNegative from "negative";
import _isOdd from "odd";
import _isPositive from "positive";
import _isUnder from "under";
import _isWithin from "within";

isit.above = _isAbove;
isit.decimal = _isDecimal;
isit.equal = _isEqual;
isit.even = _isEven;
isit.finite = _isFinite;
isit.infinite = _isInfinite;
isit.integer = _isInteger;
isit.negative = _isNegative;
isit.odd = _isOdd;
isit.positive = _isPositive;
isit.under = _isUnder;
isit.within = _isWithin;

// api restrictions
isit.above.api = ["not"];
isit.equal.api = ["not"];
isit.under.api = ["not"];
isit.within.api = ["not"];

// Regexp checks
/* -------------------------------------------------------------------------- */

import _isAffirmative from "affirmative";
import _isAlphaNumeric from "alphaNumeric";
import _isCaPostalCode from "caPostalCode";
import _isCreditCard from "creditCard";
import _isDateString from "dateString";
import _isEmail from "email";
import _isEppPhone from "eppPhone";
import _isHexadecimal from "hexadecimal";
import _isHexColor from "hexColor";
import _isIp from "ip";
import _isIpv4 from "ipv4";
import _isIpv6 from "ipv6";
import _isNanpPhone from "nanpPhone";
import _isSocialSecurityNumber from "socialSecurityNumber";
import _isTimeString from "timeString";
import _isUkPostalCode from "ukPostalCode";
import _isUrl from "url.js"; // it doesn't like just "url"
import _isUsZipCode from "usZipCode";
import setRegexp from "setRegexp";

isit.affirmative = _isAffirmative;
isit.alphaNumeric = _isAlphaNumeric;
isit.caPostalCode = _isCaPostalCode;
isit.creditCard = _isCreditCard;
isit.dateString = _isDateString;
isit.email = _isEmail;
isit.eppPhone = _isEppPhone;
isit.hexadecimal = _isHexadecimal;
isit.hexColor = _isHexColor;
isit.ip = _isIp;
isit.ipv4 = _isIpv4;
isit.ipv6 = _isIpv6;
isit.nanpPhone = _isNanpPhone;
isit.setRegexp = setRegexp.bind(isit);
isit.socialSecurityNumber = _isSocialSecurityNumber;
isit.timeString = _isTimeString;
isit.ukPostalCode = _isUkPostalCode;
isit.url = _isUrl;
isit.usZipCode = _isUsZipCode;

// String checks
/* -------------------------------------------------------------------------- */

import _isCapitalized from "capitalized";
import _isEndWith from "endWith";
import _isInclude from "include";
import _isLowerCase from "lowercase";
import _isPalindrome from "palindrome";
import _isStartWith from "startWith";
import _isUppercase from "uppercase";

isit.capitalized = _isCapitalized;
isit.endWith = _isEndWith;
isit.include = _isInclude;
isit.lowercase = _isLowerCase;
isit.palindrome = _isPalindrome;
isit.startWith = _isStartWith;
isit.uppercase = _isUppercase;

// api restrictions
isit.endWith.api = ["not"];
isit.include.api = ["not"];
isit.startWith.api = ["not"];

// String checks
/* -------------------------------------------------------------------------- */

// Object checks
/* -------------------------------------------------------------------------- */

import _isDomNode from "domNode";
import _isPropertyCount from "propertyCount";
import _isPropertyDefined from "propertyDefined";
import _isWindowObject from "windowObject";

isit.domNode = _isDomNode;
isit.propertyCount = _isPropertyCount;
isit.propertyDefined = _isPropertyDefined;
isit.windowObject = _isWindowObject;

// api restrictions
isit.propertyCount.api = ["not"];
isit.propertyDefined.api = ["not"];

// Array checks
/* -------------------------------------------------------------------------- */

import _isInArray from "inArray";
import _isSorted from "sorted";

isit.inArray = _isInArray;
isit.sorted = _isSorted;

// api restrictions
isit.inArray.api = ["not"];

// Date checks
/* -------------------------------------------------------------------------- */

import _isDay from "day";
import _isDaylightSavingTime from "daylightSavingTime";
import _isFuture from "future";
import _isInDateRange from "inDateRange";
import _isInLastMonth from "inLastMonth";
import _isInLastWeek from "inLastWeek";
import _isInLastYear from "inLastYear";
import _isLeapYear from "leapYear";
import _isMonth from "month";
import _isInNextMonth from "inNextMonth";
import _isInNextWeek from "inNextWeek";
import _isInNextYear from "inNextYear";
import _isPast from "past";
import _isQuarterOfYear from "quarterOfYear";
import _isToday from "today";
import _isTomorrow from "tomorrow";
import _isWeekday from "weekday";
import _isWeekend from "weekend";
import _isYear from "year";
import _isYesterday from "yesterday";

isit.day = _isDay;
isit.daylightSavingTime = _isDaylightSavingTime;
isit.future = _isFuture;
isit.inDateRange = _isInDateRange;
isit.inLastMonth = _isInLastMonth;
isit.inLastWeek = _isInLastWeek;
isit.inLastYear = _isInLastYear;
isit.leaYear = _isLeapYear;
isit.month = _isMonth;
isit.inNextMonth = _isInNextMonth;
isit.inNextWeek = _isInNextWeek;
isit.inNextYear = _isInNextYear;
isit.past = _isPast;
isit.quarterOfYear = _isQuarterOfYear;
isit.today = _isToday;
isit.tomorrow = _isTomorrow;
isit.weekday = _isWeekday;
isit.weekend = _isWeekend;
isit.year = _isYear;
isit.yesterday = _isYesterday;

// api restrictions
isit.day.api = ["not"];
isit.inDateRange.api = ["not"];
isit.month.api = ["not"];
isit.quarterOfYear.api = ["not"];
isit.year.api = ["not"];

// Environment checks
/* -------------------------------------------------------------------------- */

import _isAndroid from "android";
import _isAndroidPhone from "androidPhone";
import _isAndroidTablet from "androidTablet";
import _isBlackberry from "blackberry";
import _isBlink from "blink";
import _isBrowser from "browser";
import _isChrome from "chrome";
import _isDesktop from "desktop";
import _isIe from "ie";
import _isFirefox from "firefox";
import _isGecko from "gecko";
import _isIos from "ios";
import _isIpad from "ipad";
import _isIphone from "iphone";
import _isIpod from "ipod";
import _isLinux from "linux";
import _isMac from "mac";
import _isMobile from "mobile";
import _isNode from "node";
import _isOffline from "offline";
import _isOnline from "online";
import _isOpera from "opera";
import _isPresto from "presto";
import _isRetina from "retina";
import _isSafari from "safari";
import _isTablet from "tablet";
import _isTouchDevice from "touchDevice";
import _isTrident from "trident";
import _isWebkit from "webkit";
import _isWindows from "windows";
import _isWindowsPhone from "windowsPhone";
import _isWindowsTablet from "windowsTablet";

isit.android = _isAndroid;
isit.androidPhone = _isAndroidPhone;
isit.androidTablet = _isAndroidTablet;
isit.blackberry = _isBlackberry;
isit.blink = _isBlink;
isit.browser = _isBrowser;
isit.chrome = _isChrome;
isit.desktop = _isDesktop;
isit.firefox = _isFirefox;
isit.gecko = _isGecko;
isit.ie = _isIe;
isit.ios = _isIos;
isit.ipad = _isIpad;
isit.iphone = _isIphone;
isit.ipod = _isIpod;
isit.linux = _isLinux;
isit.mac = _isMac;
isit.mobile = _isMobile;
isit.node = _isNode;
isit.offline = _isOffline;
isit.online = _isOnline;
isit.opera = _isOpera;
isit.presto = _isPresto;
isit.retina = _isRetina;
isit.safari = _isSafari;
isit.tablet = _isTablet;
isit.touchDevice = _isTouchDevice;
isit.trident = _isTrident;
isit.webkit = _isWebkit;
isit.windows = _isWindows;
isit.windowsPhone = _isWindowsPhone;
isit.windowsTablet = _isWindowsTablet;

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
        if (hasOwnProperty.call(options, option) && _isFunction(options[option])) {
            let interfaces = options[option].api || defaultApi,
                i = 0,
                len = interfaces.length;

            for (; i < len; i++) {
                if (interfaces[i] === "all") {
                    options.all[option] = all(options[option]);
                }

                if (interfaces[i] === "any") {
                    options.any[option] = any(options[option]);
                }

                if (interfaces[i] === "not") {
                    options.not[option] = not(options[option]);
                }
            }
        }
    }
}

setInterfaces(isit);

export default isit;