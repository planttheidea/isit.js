

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isIe(version) {
    if (!isBrowser()) {
        return false;
    }

    if (!version) {
        return /msie/.test(navigatorInfo.userAgent) || !(window.ActiveXObject) && "ActiveXObject" in window;
    }

    if (version >= 11) {
        return !(window.ActiveXObject) && "ActiveXObject" in window;
    }

    return new RegExp('msie ' + version).test(navigatorInfo.userAgent);
}