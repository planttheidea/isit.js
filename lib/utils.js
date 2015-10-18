// utility functions, used all over the place

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

var arraySlice = Array.prototype.slice;

exports.arraySlice = arraySlice;
var epsilon = "EPSILON" in Number ? Number.EPSILON : 2.220446049250313e-16;

exports.epsilon = epsilon;
var hasOwnProperty = Object.prototype.hasOwnProperty;

exports.hasOwnProperty = hasOwnProperty;
var navigatorInfo = (function () {
    if (!(0, _browser2["default"])()) {
        return {};
    }

    return {
        appVersion: "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "",
        userAgent: "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
        vendor: "navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase() || ""
    };
})();

exports.navigatorInfo = navigatorInfo;
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
    epsilon: epsilon,
    hasOwnProperty: hasOwnProperty,
    navigatorInfo: navigatorInfo,
    toCamelCase: toCamelCase,
    toString: toString
};