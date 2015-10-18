// utility functions, used all over the place

import isitBrowser from "./browser";

export var arraySlice = Array.prototype.slice;

export var epsilon = "EPSILON" in Number ? Number.EPSILON : 2.220446049250313e-16;

export var hasOwnProperty = Object.prototype.hasOwnProperty;

export var navigatorInfo = (function() {
    if (!isitBrowser()) {
        return {};
    }

    return {
        appVersion:"navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "",
        userAgent:"navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
        vendor:"navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase() || ""
    };
})();

export var toCamelCase = function (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, "");
};

export var toString = Object.prototype.toString;

export default {
    arraySlice,
    epsilon,
    hasOwnProperty,
    navigatorInfo,
    toCamelCase,
    toString
};