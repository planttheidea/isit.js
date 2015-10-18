// isit.js
// Author: Tony Quetano

// Originally forked from: isit.js
// Author: Aras Atasaygin

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("././utils");

var _helpers = require("././helpers");

// Type checks
/* -------------------------------------------------------------------------- */

var _arguments = require("./arguments");

var _arguments2 = _interopRequireDefault(_arguments);

var _array = require("./array");

var _array2 = _interopRequireDefault(_array);

var _boolean = require("./boolean");

var _boolean2 = _interopRequireDefault(_boolean);

var _char = require("./char");

var _char2 = _interopRequireDefault(_char);

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

var _error = require("./error");

var _error2 = _interopRequireDefault(_error);

var _function = require("./function");

var _function2 = _interopRequireDefault(_function);

var _json = require("./json");

var _json2 = _interopRequireDefault(_json);

var _nanJs = require("./nan.js");

var _nanJs2 = _interopRequireDefault(_nanJs);

// it doesn't like just "nan"

var _null = require("./null");

var _null2 = _interopRequireDefault(_null);

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

var _regexp = require("./regexp");

var _regexp2 = _interopRequireDefault(_regexp);

var _sameType = require("./sameType");

var _sameType2 = _interopRequireDefault(_sameType);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

var _symbol = require("./symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _undefined = require("./undefined");

var _undefined2 = _interopRequireDefault(_undefined);

// Presence checks
/* -------------------------------------------------------------------------- */

var _empty = require("./empty");

var _empty2 = _interopRequireDefault(_empty);

var _existy = require("./existy");

var _existy2 = _interopRequireDefault(_existy);

var _falsy = require("./falsy");

var _falsy2 = _interopRequireDefault(_falsy);

var _truthy = require("./truthy");

var _truthy2 = _interopRequireDefault(_truthy);

var _whitespace = require("./whitespace");

var _whitespace2 = _interopRequireDefault(_whitespace);

// Arithmetic checks
/* -------------------------------------------------------------------------- */

var _above = require("./above");

var _above2 = _interopRequireDefault(_above);

var _decimal = require("./decimal");

var _decimal2 = _interopRequireDefault(_decimal);

var _equal = require("./equal");

var _equal2 = _interopRequireDefault(_equal);

var _even = require("./even");

var _even2 = _interopRequireDefault(_even);

var _finite = require("./finite");

var _finite2 = _interopRequireDefault(_finite);

var _infinite = require("./infinite");

var _infinite2 = _interopRequireDefault(_infinite);

var _integer = require("./integer");

var _integer2 = _interopRequireDefault(_integer);

var _negative = require("./negative");

var _negative2 = _interopRequireDefault(_negative);

var _odd = require("./odd");

var _odd2 = _interopRequireDefault(_odd);

var _positive = require("./positive");

var _positive2 = _interopRequireDefault(_positive);

var _under = require("./under");

var _under2 = _interopRequireDefault(_under);

var _within = require("./within");

var _within2 = _interopRequireDefault(_within);

// Regexp checks
/* -------------------------------------------------------------------------- */

var _affirmative = require("./affirmative");

var _affirmative2 = _interopRequireDefault(_affirmative);

var _alphaNumeric = require("./alphaNumeric");

var _alphaNumeric2 = _interopRequireDefault(_alphaNumeric);

var _caPostalCode = require("./caPostalCode");

var _caPostalCode2 = _interopRequireDefault(_caPostalCode);

var _creditCard = require("./creditCard");

var _creditCard2 = _interopRequireDefault(_creditCard);

var _dateString = require("./dateString");

var _dateString2 = _interopRequireDefault(_dateString);

var _email = require("./email");

var _email2 = _interopRequireDefault(_email);

var _eppPhone = require("./eppPhone");

var _eppPhone2 = _interopRequireDefault(_eppPhone);

var _hexadecimal = require("./hexadecimal");

var _hexadecimal2 = _interopRequireDefault(_hexadecimal);

var _hexColor = require("./hexColor");

var _hexColor2 = _interopRequireDefault(_hexColor);

var _ip = require("./ip");

var _ip2 = _interopRequireDefault(_ip);

var _ipv4 = require("./ipv4");

var _ipv42 = _interopRequireDefault(_ipv4);

var _ipv6 = require("./ipv6");

var _ipv62 = _interopRequireDefault(_ipv6);

var _nanpPhone = require("./nanpPhone");

var _nanpPhone2 = _interopRequireDefault(_nanpPhone);

var _socialSecurityNumber = require("./socialSecurityNumber");

var _socialSecurityNumber2 = _interopRequireDefault(_socialSecurityNumber);

var _timeString = require("./timeString");

var _timeString2 = _interopRequireDefault(_timeString);

var _ukPostalCode = require("./ukPostalCode");

var _ukPostalCode2 = _interopRequireDefault(_ukPostalCode);

var _urlJs = require("./url.js");

var _urlJs2 = _interopRequireDefault(_urlJs);

// it doesn't like just "url"

var _usZipCode = require("./usZipCode");

var _usZipCode2 = _interopRequireDefault(_usZipCode);

var _setRegexp = require("./setRegexp");

var _setRegexp2 = _interopRequireDefault(_setRegexp);

// String checks
/* -------------------------------------------------------------------------- */

var _capitalized = require("./capitalized");

var _capitalized2 = _interopRequireDefault(_capitalized);

var _endWith = require("./endWith");

var _endWith2 = _interopRequireDefault(_endWith);

var _include = require("./include");

var _include2 = _interopRequireDefault(_include);

var _lowercase = require("./lowercase");

var _lowercase2 = _interopRequireDefault(_lowercase);

var _palindrome = require("./palindrome");

var _palindrome2 = _interopRequireDefault(_palindrome);

var _startWith = require("./startWith");

var _startWith2 = _interopRequireDefault(_startWith);

var _uppercase = require("./uppercase");

var _uppercase2 = _interopRequireDefault(_uppercase);

// String checks
/* -------------------------------------------------------------------------- */

// Object checks
/* -------------------------------------------------------------------------- */

var _domNode = require("./domNode");

var _domNode2 = _interopRequireDefault(_domNode);

var _propertyCount = require("./propertyCount");

var _propertyCount2 = _interopRequireDefault(_propertyCount);

var _propertyDefined = require("./propertyDefined");

var _propertyDefined2 = _interopRequireDefault(_propertyDefined);

var _windowObject = require("./windowObject");

var _windowObject2 = _interopRequireDefault(_windowObject);

// Array checks
/* -------------------------------------------------------------------------- */

var _inArray = require("./inArray");

var _inArray2 = _interopRequireDefault(_inArray);

var _sorted = require("./sorted");

var _sorted2 = _interopRequireDefault(_sorted);

// Date checks
/* -------------------------------------------------------------------------- */

var _day = require("./day");

var _day2 = _interopRequireDefault(_day);

var _daylightSavingTime = require("./daylightSavingTime");

var _daylightSavingTime2 = _interopRequireDefault(_daylightSavingTime);

var _future = require("./future");

var _future2 = _interopRequireDefault(_future);

var _inDateRange = require("./inDateRange");

var _inDateRange2 = _interopRequireDefault(_inDateRange);

var _inLastMonth = require("./inLastMonth");

var _inLastMonth2 = _interopRequireDefault(_inLastMonth);

var _inLastWeek = require("./inLastWeek");

var _inLastWeek2 = _interopRequireDefault(_inLastWeek);

var _inLastYear = require("./inLastYear");

var _inLastYear2 = _interopRequireDefault(_inLastYear);

var _leapYear = require("./leapYear");

var _leapYear2 = _interopRequireDefault(_leapYear);

var _month = require("./month");

var _month2 = _interopRequireDefault(_month);

var _inNextMonth = require("./inNextMonth");

var _inNextMonth2 = _interopRequireDefault(_inNextMonth);

var _inNextWeek = require("./inNextWeek");

var _inNextWeek2 = _interopRequireDefault(_inNextWeek);

var _inNextYear = require("./inNextYear");

var _inNextYear2 = _interopRequireDefault(_inNextYear);

var _past = require("./past");

var _past2 = _interopRequireDefault(_past);

var _quarterOfYear = require("./quarterOfYear");

var _quarterOfYear2 = _interopRequireDefault(_quarterOfYear);

var _today = require("./today");

var _today2 = _interopRequireDefault(_today);

var _tomorrow = require("./tomorrow");

var _tomorrow2 = _interopRequireDefault(_tomorrow);

var _weekday = require("./weekday");

var _weekday2 = _interopRequireDefault(_weekday);

var _weekend = require("./weekend");

var _weekend2 = _interopRequireDefault(_weekend);

var _year = require("./year");

var _year2 = _interopRequireDefault(_year);

var _yesterday = require("./yesterday");

var _yesterday2 = _interopRequireDefault(_yesterday);

// Environment checks
/* -------------------------------------------------------------------------- */

var _android = require("./android");

var _android2 = _interopRequireDefault(_android);

var _androidPhone = require("./androidPhone");

var _androidPhone2 = _interopRequireDefault(_androidPhone);

var _androidTablet = require("./androidTablet");

var _androidTablet2 = _interopRequireDefault(_androidTablet);

var _blackberry = require("./blackberry");

var _blackberry2 = _interopRequireDefault(_blackberry);

var _blink = require("./blink");

var _blink2 = _interopRequireDefault(_blink);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

var _chrome = require("./chrome");

var _chrome2 = _interopRequireDefault(_chrome);

var _desktop = require("./desktop");

var _desktop2 = _interopRequireDefault(_desktop);

var _ie = require("./ie");

var _ie2 = _interopRequireDefault(_ie);

var _firefox = require("./firefox");

var _firefox2 = _interopRequireDefault(_firefox);

var _gecko = require("./gecko");

var _gecko2 = _interopRequireDefault(_gecko);

var _ios = require("./ios");

var _ios2 = _interopRequireDefault(_ios);

var _ipad = require("./ipad");

var _ipad2 = _interopRequireDefault(_ipad);

var _iphone = require("./iphone");

var _iphone2 = _interopRequireDefault(_iphone);

var _ipod = require("./ipod");

var _ipod2 = _interopRequireDefault(_ipod);

var _linux = require("./linux");

var _linux2 = _interopRequireDefault(_linux);

var _mac = require("./mac");

var _mac2 = _interopRequireDefault(_mac);

var _mobile = require("./mobile");

var _mobile2 = _interopRequireDefault(_mobile);

var _node = require("./node");

var _node2 = _interopRequireDefault(_node);

var _offline = require("./offline");

var _offline2 = _interopRequireDefault(_offline);

var _online = require("./online");

var _online2 = _interopRequireDefault(_online);

var _opera = require("./opera");

var _opera2 = _interopRequireDefault(_opera);

var _presto = require("./presto");

var _presto2 = _interopRequireDefault(_presto);

var _retina = require("./retina");

var _retina2 = _interopRequireDefault(_retina);

var _safari = require("./safari");

var _safari2 = _interopRequireDefault(_safari);

var _tablet = require("./tablet");

var _tablet2 = _interopRequireDefault(_tablet);

var _touchDevice = require("./touchDevice");

var _touchDevice2 = _interopRequireDefault(_touchDevice);

var _trident = require("./trident");

var _trident2 = _interopRequireDefault(_trident);

var _webkit = require("./webkit");

var _webkit2 = _interopRequireDefault(_webkit);

var _windows = require("./windows");

var _windows2 = _interopRequireDefault(_windows);

var _windowsPhone = require("./windowsPhone");

var _windowsPhone2 = _interopRequireDefault(_windowsPhone);

var _windowsTablet = require("./windowsTablet");

var _windowsTablet2 = _interopRequireDefault(_windowsTablet);

var defaultApi = ["all", "any", "not"];

var isit = {
    all: {},
    any: {},
    not: {},
    version: "1.0.0"
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
isit.nanpPhone = _nanpPhone2["default"];
isit.setRegexp = _setRegexp2["default"].bind(isit);
isit.socialSecurityNumber = _socialSecurityNumber2["default"];
isit.timeString = _timeString2["default"];
isit.ukPostalCode = _ukPostalCode2["default"];
isit.url = _urlJs2["default"];
isit.usZipCode = _usZipCode2["default"];

isit.capitalized = _capitalized2["default"];
isit.endWith = _endWith2["default"];
isit.include = _include2["default"];
isit.lowercase = _lowercase2["default"];
isit.palindrome = _palindrome2["default"];
isit.startWith = _startWith2["default"];
isit.uppercase = _uppercase2["default"];

// api restrictions
isit.endWith.api = ["not"];
isit.include.api = ["not"];
isit.startWith.api = ["not"];

isit.domNode = _domNode2["default"];
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
        if (_utils.hasOwnProperty.call(options, option) && (0, _function2["default"])(options[option])) {
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

setInterfaces(isit);

exports["default"] = isit;
module.exports = exports["default"];