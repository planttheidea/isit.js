// is the browser used Internet Explorer?
// NOTE: if version is passed, will validate if IE and equal to that version

import {not} from "./helpers";
import {navigatorInfo} from "./utils";
import isitBrowser from "./browser";

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