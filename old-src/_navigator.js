// navigator info from browser, captured once

import isitBrowser from "./browser";

let navigatorInfo = {};

if (isitBrowser()) {
    navigatorInfo = {
        appVersion:"navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "",
        userAgent:"navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
        vendor:"navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase() || ""
    };
}

export default navigatorInfo;