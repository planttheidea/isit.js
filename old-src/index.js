// isit.js
// Author: Tony Quetano

// Originally forked from: isit.js
// Author: Aras Atasaygin

import {hasOwnProperty} from "./_utils";

import {
    all,
    any,
    not
} from "./_interfaces";

const defaultApi = [
    "all",
    "any",
    "not"
];

let isit = {
    all:{},
    any:{},
    not:{}
};

// Type checks
/* -------------------------------------------------------------------------- */

import isitArguments from "./arguments";
import isitArray from "./array";
import isitBoolean from "./boolean";
import isitChar from "./char";
import isitDate from "./date";
import isitError from "./error";
import isitFunction from "./function";
import isitJSON from "./json";
import isitNaN from "./nan.js"; // it doesn't like just "nan"
import isitNull from "./null";
import isitNumber from "./number";
import isitObject from "./object";
import isitRegExp from "./regexp";
import isitSameType from "./sameType";
import isitString from "./string";
import isitSymbol from "./symbol";
import isitTypedArray from "./typedArray";
import isitUndefined from "./undefined";

isit.arguments = isitArguments;
isit.array = isitArray;
isit.boolean = isitBoolean;
isit.char = isitChar;
isit.date = isitDate;
isit.error = isitError;
isit.function = isitFunction;
isit.json = isitJSON;
isit.nan = isitNaN;
isit.null = isitNull;
isit.number = isitNumber;
isit.object = isitObject;
isit.regexp = isitRegExp;
isit.sameType = isitSameType;
isit.string = isitString;
isit.symbol = isitSymbol;
isit.typedArray = isitTypedArray;
isit.undefined = isitUndefined;

// api restrictions
isit.sameType.api = ["not"];

// Presence checks
/* -------------------------------------------------------------------------- */

import isitEmpty from "./empty";
import isitExisty from "./existy";
import isitFalsy from "./falsy";
import isitTruthy from "./truthy";
import isitWhitespace from "./whitespace";

isit.empty = isitEmpty;
isit.existy = isitExisty;
isit.falsy = isitFalsy;
isit.truthy = isitTruthy;
isit.whitespace = isitWhitespace;

// Arithmetic checks
/* -------------------------------------------------------------------------- */

import isitAbove from "./above";
import isitDecimal from "./decimal";
import isitEqual from "./equal";
import isitEven from "./even";
import isitFinite from "./finite";
import isitInfinite from "./infinite";
import isitInteger from "./integer";
import isitNegative from "./negative";
import isitOdd from "./odd";
import isitPositive from "./positive";
import isitUnder from "./under";
import isitWithin from "./within";

isit.above = isitAbove;
isit.decimal = isitDecimal;
isit.equal = isitEqual;
isit.even = isitEven;
isit.finite = isitFinite;
isit.infinite = isitInfinite;
isit.integer = isitInteger;
isit.negative = isitNegative;
isit.odd = isitOdd;
isit.positive = isitPositive;
isit.under = isitUnder;
isit.within = isitWithin;

// api restrictions
isit.above.api = ["not"];
isit.equal.api = ["not"];
isit.under.api = ["not"];
isit.within.api = ["not"];

// Regexp checks
/* -------------------------------------------------------------------------- */

import isitAffirmative from "./affirmative";
import isitAlphaNumeric from "./alphaNumeric";
import isitCAPostalCode from "./caPostalCode";
import isitCreditCard from "./creditCard";
import isitDateString from "./dateString";
import isitEmail from "./email";
import isitEppPhone from "./eppPhone";
import isitHexadecimal from "./hexadecimal";
import isitHexColor from "./hexColor";
import isitIp from "./ip";
import isitIpv4 from "./ipv4";
import isitIpv6 from "./ipv6";
import isitIsoDateString from "./isoDateString";
import isitNanpPhone from "./nanpPhone";
import isitSocialSecurityNumber from "./socialSecurityNumber";
import isitTimeString from "./timeString";
import isitUKPostCode from "./ukPostCode";
import isitUrl from "./url.js"; // it doesn't like just "url"
import isitUSZipCode from "./usZipCode";
import setRegexp from "./setRegexp";

isit.affirmative = isitAffirmative;
isit.alphaNumeric = isitAlphaNumeric;
isit.caPostalCode = isitCAPostalCode;
isit.creditCard = isitCreditCard;
isit.dateString = isitDateString;
isit.email = isitEmail;
isit.eppPhone = isitEppPhone;
isit.hexadecimal = isitHexadecimal;
isit.hexColor = isitHexColor;
isit.ip = isitIp;
isit.ipv4 = isitIpv4;
isit.ipv6 = isitIpv6;
isit.isoDateString = isitIsoDateString;
isit.nanpPhone = isitNanpPhone;
isit.setRegexp = setRegexp.bind(isit);
isit.socialSecurityNumber = isitSocialSecurityNumber;
isit.timeString = isitTimeString;
isit.ukPostCode = isitUKPostCode;
isit.url = isitUrl;
isit.usZipCode = isitUSZipCode;

// String checks
/* -------------------------------------------------------------------------- */

import isitCamelCase from "./camelCase";
import isitCapitalized from "./capitalized";
import isitDataUrl from "./dataUrl";
import isitDoubleByte from "./doubleByte";
import isitEndWith from "./endWith";
import isitHtml from "./html";
import isitInclude from "./include";
import isitKebabCase from "./kebabCase";
import isitLowerCase from "./lowercase";
import isitPalindrome from "./palindrome";
import isitSnakeCase from "./snakeCase";
import isitStartCase from "./startCase";
import isitStartWith from "./startWith";
import isitUppercase from "./uppercase";

isit.camelCase = isitCamelCase;
isit.capitalized = isitCapitalized;
isit.dataUrl = isitDataUrl;
isit.doubleByte = isitDoubleByte;
isit.endWith = isitEndWith;
isit.html = isitHtml;
isit.include = isitInclude;
isit.kebabCase = isitKebabCase;
isit.lowercase = isitLowerCase;
isit.palindrome = isitPalindrome;
isit.snakeCase = isitSnakeCase;
isit.startCase = isitStartCase;
isit.startWith = isitStartWith;
isit.uppercase = isitUppercase;

// api restrictions
isit.endWith.api = ["not"];
isit.include.api = ["not"];
isit.startWith.api = ["not"];

// Object checks
/* -------------------------------------------------------------------------- */

import isitDomNode from "./domNode";
import isitDOMNodeList from "./domNodeList";
import isitJquery from "./jquery";
import isitPlainObject from "./plainObject";
import isitPropertyCount from "./propertyCount";
import isitPropertyDefined from "./propertyDefined";
import isitWindowObject from "./windowObject";

isit.domNode = isitDomNode;
isit.domNodeList = isitDOMNodeList;
isit.jquery = isitJquery;
isit.plainObject = isitPlainObject;
isit.propertyCount = isitPropertyCount;
isit.propertyDefined = isitPropertyDefined;
isit.windowObject = isitWindowObject;

// api restrictions
isit.propertyCount.api = ["not"];
isit.propertyDefined.api = ["not"];

// Array checks
/* -------------------------------------------------------------------------- */

import isitInArray from "./inArray";
import isitSorted from "./sorted";

isit.inArray = isitInArray;
isit.sorted = isitSorted;

// api restrictions
isit.inArray.api = ["not"];

// Date checks
/* -------------------------------------------------------------------------- */

import isitDay from "./day";
import isitDaylightSavingTime from "./daylightSavingTime";
import isitFuture from "./future";
import isitInDateRange from "./inDateRange";
import isitInLastMonth from "./inLastMonth";
import isitInLastWeek from "./inLastWeek";
import isitInLastYear from "./inLastYear";
import isitLeapYear from "./leapYear";
import isitMonth from "./month";
import isitInNextMonth from "./inNextMonth";
import isitInNextWeek from "./inNextWeek";
import isitInNextYear from "./inNextYear";
import isitPast from "./past";
import isitQuarterOfYear from "./quarterOfYear";
import isitToday from "./today";
import isitTomorrow from "./tomorrow";
import isitWeekday from "./weekday";
import isitWeekend from "./weekend";
import isitYear from "./year";
import isitYesterday from "./yesterday";

isit.day = isitDay;
isit.daylightSavingTime = isitDaylightSavingTime;
isit.future = isitFuture;
isit.inDateRange = isitInDateRange;
isit.inLastMonth = isitInLastMonth;
isit.inLastWeek = isitInLastWeek;
isit.inLastYear = isitInLastYear;
isit.leaYear = isitLeapYear;
isit.month = isitMonth;
isit.inNextMonth = isitInNextMonth;
isit.inNextWeek = isitInNextWeek;
isit.inNextYear = isitInNextYear;
isit.past = isitPast;
isit.quarterOfYear = isitQuarterOfYear;
isit.today = isitToday;
isit.tomorrow = isitTomorrow;
isit.weekday = isitWeekday;
isit.weekend = isitWeekend;
isit.year = isitYear;
isit.yesterday = isitYesterday;

// api restrictions
isit.day.api = ["not"];
isit.inDateRange.api = ["not"];
isit.month.api = ["not"];
isit.quarterOfYear.api = ["not"];
isit.year.api = ["not"];

// Environment checks
/* -------------------------------------------------------------------------- */

import isitAndroid from "./android";
import isitAndroidPhone from "./androidPhone";
import isitAndroidTablet from "./androidTablet";
import isitBlackberry from "./blackberry";
import isitBlink from "./blink";
import isitBrowser from "./browser";
import isitChrome from "./chrome";
import isitDesktop from "./desktop";
import isitIe from "./ie";
import isitFirefox from "./firefox";
import isitGecko from "./gecko";
import isitIOS from "./ios";
import isitIpad from "./ipad";
import isitIphone from "./iphone";
import isitIpod from "./ipod";
import isitLinux from "./linux";
import isitMac from "./mac";
import isitMobile from "./mobile";
import isitNode from "./node";
import isitOffline from "./offline";
import isitOnline from "./online";
import isitOpera from "./opera";
import isitPresto from "./presto";
import isitRetina from "./retina";
import isitSafari from "./safari";
import isitTablet from "./tablet";
import isitTouchDevice from "./touchDevice";
import isitTrident from "./trident";
import isitWebkit from "./webkit";
import isitWindows from "./windows";
import isitWindowsPhone from "./windowsPhone";
import isitWindowsTablet from "./windowsTablet";

isit.android = isitAndroid;
isit.androidPhone = isitAndroidPhone;
isit.androidTablet = isitAndroidTablet;
isit.blackberry = isitBlackberry;
isit.blink = isitBlink;
isit.browser = isitBrowser;
isit.chrome = isitChrome;
isit.desktop = isitDesktop;
isit.firefox = isitFirefox;
isit.gecko = isitGecko;
isit.ie = isitIe;
isit.ios = isitIOS;
isit.ipad = isitIpad;
isit.iphone = isitIphone;
isit.ipod = isitIpod;
isit.linux = isitLinux;
isit.mac = isitMac;
isit.mobile = isitMobile;
isit.node = isitNode;
isit.offline = isitOffline;
isit.online = isitOnline;
isit.opera = isitOpera;
isit.presto = isitPresto;
isit.retina = isitRetina;
isit.safari = isitSafari;
isit.tablet = isitTablet;
isit.touchDevice = isitTouchDevice;
isit.trident = isitTrident;
isit.webkit = isitWebkit;
isit.windows = isitWindows;
isit.windowsPhone = isitWindowsPhone;
isit.windowsTablet = isitWindowsTablet;

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
        if (hasOwnProperty.call(options, option) && isitFunction(options[option])) {
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