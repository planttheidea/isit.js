// isit.js
// Author: Tony Quetano

// Forked from: isit.js
// Original Author: Aras Atasaygin


import {
    arraySlice,
    hasOwnProperty,
    toString
} from "./utils";

import {
    all,
    any,
    not
} from "./helpers";

function setInterfaces(options) {
    for (var option in options) {
        if (hasOwnProperty.call(options, option) && isFunction(options[option])) {
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

import isArguments from "isit.arguments";
import isArray from "isit.array";
import isBoolean from "isit.boolean";
import isChar from "isit.char";
import isDate from "isit.date";
import isError from "isit.error";
import isFunction from "isit.function";
import isJson from "isit.json";
import isNaN from "isit.nan";
import isNull from "isit.null";
import isNumber from "isit.number";
import isObject from "isit.object";
import isRegExp from "isit.regexp";
import isSameType from "isit.sameType";
import isString from "isit.string";
import isSymbol from "isit.symbol";
import isUndefined from "isit.undefined";

isit.arguments = isArguments;
isit.array = isArray;
isit.boolean = isBoolean;
isit.char = isChar;
isit.date = isDate;
isit.error = isError;
isit.function = isFunction;
isit.nan = isNaN;
isit.null = isNull;
isit.number = isNumber;
isit.object = isObject;
isit.json = isJson;
isit.regexp = isRegExp;
isit.sameType = isSameType;
isit.string = isString;
isit.symbol = isSymbol;
isit.undefined = isUndefined;

// api restrictions
isit.sameType.api = ["not"];

// Presence checks
/* -------------------------------------------------------------------------- */

import isEmpty from "isit.empty";
import isExisty from "isit.existy";
import isFalsy from "isit.falsy";
import isSpace from "isit.space";
import isTruthy from "isit.truthy";

isit.empty = isEmpty;
isit.existy = isExisty;
isit.falsy = isFalsy;
isit.space = isSpace;
isit.truthy = isTruthy;

// Arithmetic checks
/* -------------------------------------------------------------------------- */

import isAbove from "isit.above";
import isDecimal from "isit.decimal";
import isEqual from "isit.equal";
import isEven from "isit.even";
import isFinite from "isit.finite";
import isInfinite from "isit.infinite";
import isInteger from "isit.integer";
import isNegative from "isit.negative";
import isOdd from "isit.odd";
import isPositive from "isit.positive";
import isUnder from "isit.under";
import isWithin from "isit.within";

isit.above = isAbove;
isit.decimal = isDecimal;
isit.equal = isEqual;
isit.even = isEven;
isit.finite = isFinite;
isit.infinite = isInfinite;
isit.integer = isInteger;
isit.negative = isNegative;
isit.odd = isOdd;
isit.positive = isPositive;
isit.under = isUnder;
isit.within = isWithin;

// api restrictions
isit.above.api = ["not"];
isit.equal.api = ["not"];
isit.under.api = ["not"];
isit.within.api = ["not"];

// Regexp checks
/* -------------------------------------------------------------------------- */

import isAffirmative from "isit.affirmative";
import isAlphaNumeric from "isit.alphaNumeric";
import isCaPostalCode from "isit.caPostalCode";
import isCreditCard from "isit.creditCard";
import isDateString from "isit.dateString";
import isEmail from "isit.email";
import isEppPhone from "isit.eppPhone";
import isHexadecimal from "isit.hexadecimal";
import isHexColor from "isit.hexColor";
import isIp from "isit.ip";
import isIpv4 from "isit.ipv4";
import isIpv6 from "isit.ipv6";
import isNanpPhone from "isit.nanpPhone";
import isSocialSecurityNumber from "isit.socialSecurityNumber";
import isTimeString from "isit.timeString";
import isUkPostalCode from "isit.ukPostalCode";
import isUrl from "isit.url";
import isUsZipCode from "isit.usZipCode";
import setRegexp from "isit.setRegexp";

isit.affirmative = isAffirmative;
isit.alphaNumeric = isAlphaNumeric;
isit.caPostalCode = isCaPostalCode;
isit.creditCard = isCreditCard;
isit.dateString = isDateString;
isit.email = isEmail;
isit.eppPhone = isEppPhone;
isit.hexadecimal = isHexadecimal;
isit.hexColor = isHexColor;
isit.ip = isIp;
isit.ipv4 = isIpv4;
isit.ipv6 = isIpv6;
isit.nanpPhone = isNanpPhone;
isit.setRegexp = setRegexp.bind(isit);
isit.socialSecurityNumber = isSocialSecurityNumber;
isit.timeString = isTimeString;
isit.ukPostalCode = isUkPostalCode;
isit.url = isUrl;
isit.usZipCode = isUsZipCode;

// String checks
/* -------------------------------------------------------------------------- */

import isCapitalized from "isit.capitalized";
import isEndWith from "isit.endWith";
import isInclude from "isit.include";
import isLowerCase from "isit.lowercase";
import isPalindrome from "isit.palindrome";
import isStartWith from "isit.startWith";
import isUppercase from "isit.uppercase";

isit.capitalized = isCapitalized;
isit.endWith = isEndWith;
isit.include = isInclude;
isit.lowercase = isLowerCase;
isit.palindrome = isPalindrome;
isit.startWith = isStartWith;
isit.uppercase = isUppercase;

// api restrictions
isit.endWith.api = ["not"];
isit.include.api = ["not"];
isit.startWith.api = ["not"];

// String checks
/* -------------------------------------------------------------------------- */

// Object checks
/* -------------------------------------------------------------------------- */

import isDomNode from "isit.domNode";
import isPropertyCount from "isit.propertyCount";
import isPropertyDefined from "isit.propertyDefined";
import isWindowObject from "isit.windowObject";

isit.domNode = isDomNode;
isit.propertyCount = isPropertyCount;
isit.propertyDefined = isPropertyDefined;
isit.windowObject = isWindowObject;

// api restrictions
isit.propertyCount.api = ["not"];
isit.propertyDefined.api = ["not"];

// Array checks
/* -------------------------------------------------------------------------- */

import isInArray from "isit.inArray";
import isSorted from "isit.sorted";

isit.inArray = isInArray;
isit.sorted = isSorted;

// api restrictions
isit.inArray.api = ["not"];

// Date checks
/* -------------------------------------------------------------------------- */

import isDay from "isit.day";
import isDaylightSavingTime from "isit.daylightSavingTime";
import isFuture from "isit.future";
import isInDateRange from "isit.inDateRange";
import isInLastMonth from "isit.inLastMonth";
import isInLastWeek from "isit.inLastWeek";
import isInLastYear from "isit.inLastYear";
import isLeapYear from "isit.leapYear";
import isMonth from "isit.month";
import isInNextMonth from "isit.inNextMonth";
import isInNextWeek from "isit.inNextWeek";
import isInNextYear from "isit.inNextYear";
import isPast from "isit.past";
import isQuarterOfYear from "isit.quarterOfYear";
import isToday from "isit.today";
import isTomorrow from "isit.tomorrow";
import isWeekday from "isit.weekday";
import isWeekend from "isit.weekend";
import isYear from "isit.year";
import isYesterday from "isit.yesterday";

isit.day = isDay;
isit.daylightSavingTime = isDaylightSavingTime;
isit.future = isFuture;
isit.inDateRange = isInDateRange;
isit.inLastMonth = isInLastMonth;
isit.inLastWeek = isInLastWeek;
isit.inLastYear = isInLastYear;
isit.leaYear = isLeapYear;
isit.month = isMonth;
isit.inNextMonth = isInNextMonth;
isit.inNextWeek = isInNextWeek;
isit.inNextYear = isInNextYear;
isit.past = isPast;
isit.quarterOfYear = isQuarterOfYear;
isit.today = isToday;
isit.tomorrow = isTomorrow;
isit.weekday = isWeekday;
isit.weekend = isWeekend;
isit.year = isYear;
isit.yesterday = isYesterday;

// api restrictions
isit.day.api = ["not"];
isit.inDateRange.api = ["not"];
isit.month.api = ["not"];
isit.quarterOfYear.api = ["not"];
isit.year.api = ["not"];

// Environment checks
/* -------------------------------------------------------------------------- */

import isAndroid from "isit.android";
import isAndroidPhone from "isit.androidPhone";
import isAndroidTablet from "isit.androidTablet";
import isBlackberry from "isit.blackberry";
import isBlink from "isit.blink";
import isBrowser from "isit.browser";
import isChrome from "isit.chrome";
import isDesktop from "isit.desktop";
import isIe from "isit.ie";
import isFirefox from "isit.firefox";
import isGecko from "isit.gecko";
import isIos from "isit.ios";
import isIpad from "isit.ipad";
import isIphone from "isit.iphone";
import isIpod from "isit.ipod";
import isLinux from "isit.linux";
import isMac from "isit.mac";
import isMobile from "isit.mobile";
import isNode from "isit.node";
import isOffline from "isit.offline";
import isOnline from "isit.online";
import isOpera from "isit.opera";
import isPresto from "isit.presto";
import isRetina from "isit.retina";
import isSafari from "isit.safari";
import isTablet from "isit.tablet";
import isTouchDevice from "isit.touchDevice";
import isTrident from "isit.trident";
import isWebkit from "isit.webkit";
import isWindows from "isit.windows";
import isWindowsPhone from "isit.windowsPhone";
import isWindowsTablet from "isit.windowsTablet";

isit.android = isAndroid;
isit.androidPhone = isAndroidPhone;
isit.androidTablet = isAndroidTablet;
isit.blackberry = isBlackberry;
isit.blink = isBlink;
isit.browser = isBrowser;
isit.chrome = isChrome;
isit.desktop = isDesktop;
isit.firefox = isFirefox;
isit.gecko = isGecko;
isit.ie = isIe;
isit.ios = isIos;
isit.ipad = isIpad;
isit.iphone = isIphone;
isit.ipod = isIpod;
isit.linux = isLinux;
isit.mac = isMac;
isit.mobile = isMobile;
isit.node = isNode;
isit.offline = isOffline;
isit.online = isOnline;
isit.opera = isOpera;
isit.presto = isPresto;
isit.retina = isRetina;
isit.safari = isSafari;
isit.tablet = isTablet;
isit.touchDevice = isTouchDevice;
isit.trident = isTrident;
isit.webkit = isWebkit;
isit.windows = isWindows;
isit.windowsPhone = isWindowsPhone;
isit.windowsTablet = isWindowsTablet;

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

export default isit;