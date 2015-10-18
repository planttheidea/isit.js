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