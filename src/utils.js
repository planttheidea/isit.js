

import _isBrowser from "browser";

export var arraySlice = Array.prototype.slice;

export var navigatorInfo = (function() {
    if (!_isBrowser()) {
        return {};
    }

    return {
        appVersion:"navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "",
        userAgent:"navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
        vendor:"navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase() || ""
    };
})();

export var hasOwnProperty = Object.prototype.hasOwnProperty;

export var toString = Object.prototype.toString;

export default {
    arraySlice,
    hasOwnProperty,
    navigatorInfo,
    toString
};