

import {not} from "helpers";
import {navigatorInfo} from "utils";
import isitBrowser from "browser";

export default function isitIe(version) {
    if (not(isitBrowser)()) {
        return false;
    }

    if (!version) {
        return /msie/.test(navigatorInfo.userAgent) || !(window.ActiveXObject) && "ActiveXObject" in window;
    }

    if (version >= 11) {
        return !(window.ActiveXObject) && "ActiveXObject" in window;
    }

    return new RegExp("msie " + version).test(navigatorInfo.userAgent);
}